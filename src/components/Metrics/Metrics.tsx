import React from "react";
import Select from "react-select";
import { BaseField, Notice, XSelect } from "../FormFields/FormFields";
import styles from "./Metrics.css";
import formStyles from "../FormFields/FormFields.css";
import events from "./events";
import Table from "../Table/Table";
import { StandardMetrics } from "../../@schemas/StandardMetrics";
import { Experiment } from "../../@types/Experiment";

const metricsDirectionsOptions = [
  { value: "stay_same", label: "Not change" },
  { value: "increase", label: "Increase" },
  { value: "decrease", label: "Decrease" },
];

interface Props {
  experiment: Experiment;
  onChange(value: string): void;
}
export default ({ experiment, onChange }: Props) => {
  const minEffectData = StandardMetrics.map((m) => {
    return {
      Metric: (
        <>
          {m.label}
          <br />
          <span className={formStyles.dropdownDescription}>
            {m.description}
          </span>
        </>
      ),
      Baseline: m.baseline,

      "Expected change": (
        <XSelect
          propName="secondary_metric"
          experiment={experiment}
          onValue={onChange}
          width={150}
          defaultValue={metricsDirectionsOptions[0]}
          options={metricsDirectionsOptions}
        />
      ),
    };
  });

  return (
    <BaseField title="Primary Metrics" id="metric">
      <p>
        <Notice>
          Note that all experiments collect and report on{" "}
          <a href="#">Standard Experiment Metrics</a>.
        </Notice>
      </p>

      <Table data={minEffectData} />

      <p>
        What behavior do you expect to influence (e.g. clicks on a feature)?
      </p>
      <div className={styles.metricsTable} style={{ marginBottom: 20 }}>
        <div>
          <XSelect
            propName="secondary_metric"
            experiment={experiment}
            onValue={onChange}
            options={events}
          />
        </div>
        <div>will</div>
        <div>
          <Select options={metricsDirectionsOptions} />
        </div>
      </div>
    </BaseField>
  );
};
