import React from "react";
import Select from "react-select";
import {
  BaseField,
  MultiSelectField,
  CustomSelectOption,
  SelectOption,
  SelectOptionGroup,
  XSelect,
} from "../FormFields/FormFields";
import { Experiment } from "../../@types/Experiment";

const audienceOptions: SelectOptionGroup[] = [
  {
    label: "Locales",
    options: [
      {
        value: "en",
        label: "English locales",
        description: "ALl English locales",
      },
      {
        value: "t1",
        label: "Tier 1 locales",
        description: "Includes English, German, French, and Spanish",
      },
    ],
  },
  {
    label: "Presets",
    options: [
      {
        value: "has_fxa",
        label: "Recently returned",
        description:
          "User has recently returned to firefox after being inactive.",
      },
      {
        value: "has_pocket_us",
        label: "Pocket US",
        description: "US users who receive pocket content",
      },
      {
        value: "has_pocket_germany",
        label: "Pocket Germany",
        description: "German users who receive pocket content",
      },
    ],
  },
];

const triggerOptions: SelectOption[] = [
  { value: "anytime", label: "At any time" },
  {
    value: "about_welcome",
    label: "When they visit about:welcome",
    description: "Use this for onboarding experiments.",
  },
  {
    value: "visit_site",
    label: "When they visit one of a group of URLs...",
  },
  { value: "custom_event", label: "Custom event..." },
];

interface Props {
  experiment: Experiment;
  updateExperiment(exp: Partial<Experiment>): void;
}
export default ({ experiment, updateExperiment }: Props) => {
  return (
    <>
      <MultiSelectField
        title="Audiences"
        description="In order to be enrolled, users must satisfy the following:"
        id="audience"
        emptyMessage="Everyone"
        options={audienceOptions}
      />

      <BaseField
        title="Event targeting"
        description="When should users receive the treatment?"
        id="metric"
      >
        <XSelect
          experiment={experiment}
          propName="trigger"
          onChange={(value: string) => {
            updateExperiment({ trigger: value });
          }}
          options={triggerOptions}
          components={{ Option: CustomSelectOption }}
        />
        {experiment.trigger === "visit_site" && (
          <>
            <p>Choose a group of sites:</p>
            <Select
              options={[
                {
                  value: "articles",
                  label: "Article sites",
                  description: "cnn.com, abc.com, fox.com, foo.com, bar.com,",
                },
                {
                  value: "video",
                  label: "Video sites",
                  description: "cnn.com, abc.com, fox.com, foo.com, bar.com,",
                },
                {
                  value: "custom",
                  label: "Custom...",
                  description:
                    "Note: you should get legal review before using this option.",
                },
              ]}
              components={{ Option: CustomSelectOption }}
            />{" "}
          </>
        )}
      </BaseField>
    </>
  );
};
