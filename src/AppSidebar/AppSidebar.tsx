import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./AppSidebar.css";
import formStyles from "../components/FormFields/FormFields.css";
import { Context } from "../App/AppStore";

export default () => {
  const [{ experiments }] = useContext(Context);
  return (
    <div className={styles.experimentList}>
      <h3>
        Experiments{" "}
        <Link to="/new" className={formStyles.headerButton}>
          Add new
        </Link>
      </h3>
      <ul>
        {experiments.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
