import React, { useState } from "react";
import { Button } from "../FormFields/FormFields";
import styles from "./LiveForm.css";
import Table from "../Table/Table";

const tableData = [
  {
    branch: "Control",
    users: "10,175",
    pip_create: "1524",
    improvement: "",
    "confidence interval": "0.9 - 1.1",
    "statistical significance": "95%",
  },
  {
    branch: "Treatment",
    users: "10,543",
    pip_create: "1424",
    improvement: "+0%",
    "confidence interval": "0.9 - 1.1",
    "statistical significance": "95%",
  },
];

// Todo
const healthMetrics = [
  {
    metric: "daily unenrollments",
    control: "15.3%",
    variant: "15.5%",
    difference: "+0.02%",
  },
  {
    metric: "view_about_logins",
    control: "15.3%",
    variant: "15.5%",
    difference: "+0.02%",
  },
  {
    metric: "active_hours",
    control: "123123",
    variant: "123123",
    difference: "+0.00%",
  },
  {
    metric: "uri_count",
    control: "123123",
    variant: "123123",
    difference: "+0.00%",
  },
  {
    metric: "ad_clicks",
    control: "123123",
    variant: "123123",
    difference: "+0.00%",
  },
  {
    metric: "search_count",
    control: "123123",
    variant: "123123",
    difference: "+0.00%",
  },
];

export default () => {
  const marginBottom = "50px";
  return (
    <div className={styles.container}>
      <h2>Experiment Results</h2>

      <div style={{ marginBottom }}>
        <h3>
          Picture-in-picture create events{" "}
          <Button header>Behavioral metric</Button>
        </h3>
        <p>
          Among profiles that were active at least once in a specified week,
          what proportion (out of 1) meet the usage criterion during the
          following week.
        </p>
        <Table data={tableData} />
      </div>
      <div style={{ marginBottom }}>
        <h3>Standard Experiment Metrics</h3>
        <Table data={healthMetrics} />
      </div>
    </div>
  );
};
