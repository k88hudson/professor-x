import React, { useState, useContext } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Context } from "../../App/AppStore";
import { LongTextField, XSelect, BaseField } from "../FormFields/FormFields";
import formStyles from "../FormFields/FormFields.css";
import { Experiment } from "../../@types/Experiment";
import Metrics from "../Metrics/Metrics";
import stringToSlug from "../../utils/stringToSlug";

// Actually submit the new experiment?
const ACTUALLY_SUBMIT = false;

const defaultState: Experiment = {
  name: "",
  slug: "",
  description: "",
  metric: "",
  secondary_metric: "",
  design: "",
  tags: "",
  channel: "",
};

const tagOptions = [
  { value: "fxa", label: "Firefox (Growth)" },
  { value: "ujet", label: "Platform (Growth)" },
  { value: "ujet", label: "FXA" },
];

export default (props: RouteComponentProps) => {
  const [, dispatch] = useContext(Context);
  const [experiment, setExperiment] = useState(defaultState);

  const updateExperiment = (newProps: Partial<Experiment>) =>
    setExperiment({ ...experiment, ...newProps });

  const onSubmit = () => {
    let slug = "new-experiment";

    if (ACTUALLY_SUBMIT) {
      slug = stringToSlug(experiment.name);
      dispatch({
        type: "ADD_EXPERIMENT",
        data: { ...experiment, slug },
      });
    }

    props.history.push(`/${slug}/edit`);
  };
  return (
    <>
      <h2>Create a New Rapid Experiment</h2>
      <BaseField
        title="Experiment Name"
        description="Choose a name that describes what you're testing, like 'Larger Sign in Button'."
        id="displayName"
      >
        <input
          type="text"
          placeholder="Name"
          value={experiment.name}
          onChange={(e) => updateExperiment({ name: e.target.value })}
        />
        <p>Is your experiment related to one of these projects?</p>
        <XSelect
          isMulti
          propName="tags"
          experiment={experiment}
          updateExperiment={setExperiment}
          placeholder="Add tags..."
          onValue={(value) => updateExperiment({ tags: value })}
          options={tagOptions}
        />
      </BaseField>
      <LongTextField
        title="Goal"
        description="Describe the purpose and hypothesis of your experiment."
        placeholder="Description"
        id="description"
        value={experiment.description}
        onChange={(value) => updateExperiment({ description: value })}
      />
      <Metrics
        experiment={experiment}
        onChange={(value) => updateExperiment({ metric: value })}
      />
      <button
        className={formStyles.primaryButton}
        type="button"
        onClick={onSubmit}
      >
        Create experiment
      </button>{" "}
      <Link className={formStyles.secondaryButton} type="button" to="/">
        Cancel
      </Link>
    </>
  );
};
