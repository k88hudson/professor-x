import React, { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import Slider from "./@material-ui/core/Slider";
import { Button } from "../FormFields/FormFields";
import styles from "./LaunchForm.css";
import formStyles from "../FormFields/FormFields.css";
import Table from "../Table/Table";
import Targeting from "../Targeting/Targeting";

const Tabs = ({ noTopPadding, values, currentValue, setTabValue }) => {
  return (
    <div
      className={
        styles.tabsContainer + (noTopPadding ? ` ${styles.noTopPadding}` : "")
      }
    >
      <ul>
        {values.map(({ value, label }) => (
          <li key={value}>
            <a
              className={value === currentValue ? styles.activeTab : ""}
              onClick={() => setTabValue(value)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const channelOptions = [
  // {
  //   value: "preview",
  //   label: "QA Group",
  //   description:
  //     "Start with this group to preview the experiment for a small group of users.",
  // },
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

const tabConfig = [
  {
    label: "Control",
    value: "control",
    description: "Check to make sure you enroll, but don't see any message.",
  },
  {
    label: "Treatment",
    description: "Check to make sure you see the treatment message.",
    value: "treatment",
  },
  {
    label: "No Experiment",
    description:
      "Check to make sure you don't enroll in the experiment at all.",
    value: "no-experiment",
  },
];

const minEffectData = [
  {
    metric: "Click through",
    baseline: "4%",
    minEffect: "+5%",
  },
];

const defaultState = {
  channel: channelOptions[1],
  targeting: "",
  population: null,
  type: "",
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default (props) => {
  const [experiment, setExperiment] = useState(defaultState);
  const [tabValue, setTabValue] = useState("control");

  // For luanch pop
  const isPreview = experiment.channel.value === "preview";
  const defaultPopValue = isPreview ? 100 : 5;
  const population = experiment.population || defaultPopValue;
  const xDays = Math.round(200 / population);
  const xUsers = numberWithCommas(5000 * population);

  return (
    <>
      <h2>Review and Launch Experiment</h2>
      {/* <div style={{ marginBottom: "40px" }}>
        <Tabs
          values={tabConfig}
          currentValue={tabValue}
          setTabValue={setTabValue}
        />
        <p>
          To preview to your experiment, paste the following into your browser.
        </p>
        <pre className={styles.codeSnippet}>
          <code>
            about:experiments?testExperimentID=foo&branch=
            <span style={{ color: "yellow", fontWeight: "bold" }}>
              {tabValue.toLowerCase()}
            </span>
          </code>
        </pre>
        <p style={{ color: "#999" }}>
          QA Hint: {tabConfig.find((t) => t.value === tabValue)?.description}
        </p>
      </div> */}

      {/* <BaseField
        id="content"
        title="Experiment Recipe"
        description="This is the code generated from your experiment definition."
      >
        <pre className={`${styles.codeSnippet} ${styles.previewAllSnippet}`}>
          <code>{exampleRecipe}</code>
        </pre>
      </BaseField> */}

      <Table>
        <thead>
          <th>Field</th>
          <th>Value</th>
        </thead>
        <tbody>
          <tr>
            <td>Control</td>
            <td>No mesage shown</td>
          </tr>
          <tr>
            <td>Treatment</td>
            <td>Message (CFR)</td>
          </tr>
          <tr>
            <td>Targeting</td>
            <td>All English locales</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>5% of release</td>
          </tr>
        </tbody>
      </Table>

      {/* <Targeting
        experiment={experiment}
        updateExperiment={(value) =>
          setExperiment({ ...experiment, targeting: value })
        }
      />

      <BaseField
        id="channel"
        title="Channel"
        description="Which channel do you want to launch in?"
      >
        <Select
          value={experiment.channel}
          components={{ Option: CustomSelectOption }}
          onChange={(value) => setExperiment({ ...experiment, channel: value })}
          defaultValue={channelOptions[0]}
          options={channelOptions}
        />
      </BaseField> */}

      {/* {!isPreview && (
        <BaseField id="channel" title="Population">
          <p>
            What percentage of the <strong>{experiment.channel.label}</strong>{" "}
            population?
          </p>

          <Slider
            value={population}
            onChange={(e, value) => {
              setExperiment({ ...experiment, population: value });
            }}
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
        </BaseField>
      )}

      <BaseField title="Estimated Minimum Effect">
        <p>
          <Notice>
            Based on your settings, each variation will enroll approximately{" "}
            <strong>{xUsers} over 1 week</strong> . You should only run your
            study if you think you can detect the following minimum effects:
          </Notice>
        </p>

        <Table data={minEffectData} />
      </BaseField> */}

      <p>
        <Button secondary>Edit</Button>{" "}
        <Link className={formStyles.primaryButton} to="/live">
          Launch Experiment
        </Link>
      </p>
    </>
  );
};
