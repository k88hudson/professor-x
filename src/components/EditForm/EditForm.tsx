import React, { useState, useContext } from "react";
import Select from "react-select";
import { Link, useParams, RouteComponentProps } from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import {
  BaseField,
  CustomSelectOption,
  SelectOption,
  SelectOptionGroup,
  XSelect,
  Notice,
} from "../FormFields/FormFields";
import styles from "./EditForm.css";
import formStyles from "../FormFields/FormFields.css";
import { Context } from "../../App/AppStore";
import { Experiment } from "../../@types/Experiment";
import Targeting from "../Targeting/Targeting";
import Table from "../Table/Table";
import { StandardMetrics } from "../../@schemas/StandardMetrics";

interface Variant {
  letter: string;
  title: string;
  ratio: number;
  configurable: string;
}

const designOptions: SelectOptionGroup[] = [
  {
    label: "Messaging",
    options: [
      {
        value: "simple_ab",
        label: "Add a new message",
        description: "Test the effect of a new message.",
      },
      {
        value: "compare",
        label: "Compare message content",
        description: "Test which message content performs better.",
      },
      {
        value: "compare_pop",
        label: "Compare message targeting",
        description: "Test how a message performs across different segments.",
      },
    ],
  },
  {
    label: "Diagnostic",
    options: [
      {
        value: "aa",
        label: "A/A experiment",
        description: "Useful for testing targeting criteria",
      },
    ],
  },
  {
    label: "Advanced",
    options: [
      {
        value: "featuregate",
        label: "Feature Gate",
        description:
          "Set an arbitrary value to be included in source code.",
      }
    ],
  },
];

const channelOptions: SelectOption[] = [
  {
    value: "nightly",
    label: "Nightly (Firefox 78)",
    description:
      "Experiments in this channel are usually 20% of the population.",
  },
  {
    value: "release",
    label: "Release (Firefox 76)",
    description:
      "Experiments in this channel are usually 1-5% of the population.",
  },
];

const typeOptions = [
  {
    value: "aboutwelcome",
    label: "Onboarding",
    description:
      "Change content on about:welcome in order to influence early activation",
  },
  {
    value: "cfr",
    label: "CFR Doorhanger",
    description:
      "Show a dooorhanger in order to recommend a feature while someone is browsing",
  },
];

interface BranchTableProps {
  variants: Variant[];
  slug: string;
}
const BranchTable = ({ variants, slug }: BranchTableProps) => {
  const totalRatios: number = variants.reduce(
    (acc: number, current: { ratio: number }) => acc + current.ratio,
    0
  );
  return (
    <Table wide>
      <thead>
        <tr>
          <th colSpan={4}>Variation</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {variants.map((v) => (
          <tr key={v.letter}>
            <td className={styles.tdVariantLetter}>{v.letter}</td>
            <td>{v.title}</td>
            <td style={{ paddingRight: "20px" }}>
              {v.configurable === "message" && (
                <Link
                  to={`/${slug}/edit/${v.title}/message`}
                  type="button"
                  className={formStyles.primaryButton}
                >
                  Add message
                </Link>
              )}
              {v.configurable === "targeting" && (
                <Link
                  to="/message/cfr"
                  type="button"
                  className={formStyles.secondaryButton}
                >
                  Add targeting
                </Link>
              )}
              {v.configurable === "none" && "No message will be shown."}
            </td>

            <td>
              {v.configurable === "message" && (
                <button type="button" className={formStyles.smallButton}>
                  Edit
                </button>
              )}
            </td>
            <td style={{ width: "1%" }}>
              {Math.round((v.ratio / totalRatios) * 100)}%
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Opacity = ({
  value,
  children,
}: {
  value: number;
  children: React.ReactNode;
}) => <span style={{ opacity: value }}>{children}</span>;

export default ({ history }: RouteComponentProps) => {
  const { slug } = useParams();
  const [{ experiments }, dispatch] = useContext(Context);
  const experiment = experiments.find((e) => e.slug === slug);
  const [channel, setChannel] = useState(channelOptions[1]);
  const [population, setPopulation] = useState(5);

  if (typeof experiment === "undefined")
    throw new Error("experiment is not found");

  const updateExperiment = (data: Partial<Experiment>) =>
    dispatch({ type: "UPDATE_EXPERIMENT", slug, data });

  const minEffectData = [
    {
      Metric: "Random click-through rate",
      Baseline: "1%",
      "Minimum Effect": "1%",
    },

    ...StandardMetrics.map((m) => {
      const isSelected = experiment.metric === m.value ? 1 : 0.2;
      return {
        Metric: <Opacity value={isSelected}>{m.label}</Opacity>,
        Baseline: <Opacity value={isSelected}>{m.baseline}</Opacity>,
        "Minimum Effect": <Opacity value={isSelected}>1%</Opacity>
      };
    })),

  ];

  const xUsers = numberWithCommas(5000 * population);

  let variants: Variant[];
  if (experiment.design === "aa") {
    variants = [
      { letter: "A", title: "Control", ratio: 1, configurable: "none" },
      { letter: "B", title: "Treatment", ratio: 1, configurable: "none" },
    ];
  } else if (experiment.design === "simple_ab") {
    variants = [
      { letter: "A", title: "Control", ratio: 1, configurable: "none" },
      { letter: "B", title: "Treatment", configurable: "message", ratio: 1 },
    ];
  } else if (experiment.design === "compare") {
    variants = [
      { letter: "A", title: "Control", ratio: 1, configurable: "none" },
      { letter: "B", title: "Variant 1", configurable: "message", ratio: 1 },
      { letter: "C", title: "Variant 2", configurable: "message", ratio: 1 },
    ];
  } else if (experiment.design === "compare_pop") {
    variants = [
      { letter: "A", title: "Control", ratio: 1, configurable: "none" },
      { letter: "B", title: "Variant 1", configurable: "targeting", ratio: 1 },
      { letter: "C", title: "Variant 2", configurable: "targeting", ratio: 1 },
    ];
  }

  return (
    <>
      <h2>Edit {experiment.name} Experiment</h2>

      <BaseField
        title="Design"
        id="design"
        description="Choose an experiment design:"
        noBottomPadding
      >
        <XSelect
          propName="design"
          experiment={experiment}
          options={designOptions}
          onValue={(value) => updateExperiment({ design: value })}
        />
        {variants && (
          <BranchTable slug={slug} history={history} variants={variants} />
        )}
      </BaseField>

      {experiment.design && (
        <>
          {/* <Metrics
            experiment={experiment}
            onChange={(value: string) => updateExperiment({ metric: value })}
          /> */}

          {["simple_ab", "aa", "compare"].includes(experiment.design) && (
            <Targeting
              experiment={experiment}
              updateExperiment={updateExperiment}
            />
          )}

          {["compare_pop"].includes(experiment.design) && (
            <BaseField
              title="Message Type"
              id="design"
              description="Choose a message type"
              noBottomPadding
            >
              <Select
                placeholder="Add Message..."
                components={{ Option: CustomSelectOption }}
                options={typeOptions}
              />
            </BaseField>
          )}

          {/* <BaseField
            id="channel"
            title="Channel"
            description="Which channel do you want to launch in?"
          >
            <Select
              value={channel}
              components={{ Option: CustomSelectOption }}
              onChange={setChannel}
              defaultValue={channelOptions[0]}
              options={channelOptions}
            />
          </BaseField> */}

          <BaseField id="channel"
            // description="What percentage of the population?"
            title="Population">
            <p>
              What percentage of the
              <XSelect
                inline
                width={180}
                menuWidth={400}
                propName="channel"
                experiment={experiment}
                defaultValue={channelOptions[0]}
                options={channelOptions}
                onValue={(value) => updateExperiment({ channel: value })}
              />

              population?
            </p>

             {/* <XSelect
                propName="channel"
                experiment={experiment}
                defaultValue={channelOptions[0]}
                options={channelOptions}
                onChange={(value) => updateExperiment({ channel: value })}
              />
              <p /> */}

            <Slider
              value={population}
              onChange={(e, value) => setPopulation(value)}
              step={5}
              valueLabelDisplay="auto"
              marks={[
                {
                  value: 5,
                  label: "5%",
                },
                {
                  value: 20,
                  label: "20%",
                },
                {
                  value: 75,
                  label: "75%",
                },
                {
                  value: 100,
                  label: "All users",
                },
              ]}
            />
            <p><Notice>
                Based on your settings, each variation will enroll approximately{" "}
                <strong>{xUsers} users over 1 week</strong>. You should only run
                your study if ...
              </Notice></p>
          </BaseField>

          {/* <BaseField title="Estimated Minimum Effect">
          <p>
              <Notice>
                Based on your settings, each variation will enroll approximately{" "}
                <strong>{xUsers} users over 1 week</strong>. You should only run
                your study if you think you can detect the following minimum
                effects.
              </Notice>
            </p>
            <Table data={minEffectData} />

          </BaseField> */}

          <p>
            <Link className={formStyles.primaryButton} to="/launch">
              Preview and Launch
            </Link>
          </p>
        </>
      )}
    </>
  );
};
