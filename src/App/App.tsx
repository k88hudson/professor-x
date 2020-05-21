import React from "react";
import { HashRouter, Route, Switch, useParams } from "react-router-dom";
import styles from "./App.css";
import Store from "./AppStore";
import CreateNew from "../components/CreateNew/CreateNew";
import EditMessageForm from "../components/EditMessageForm/EditMessageForm";
import EditForm from "../components/EditForm/EditForm";
import LaunchForm from "../components/LaunchForm/LaunchForm";
import LiveForm from "../components/LiveForm/LiveForm";
import AppSidebar from "../AppSidebar/AppSidebar";

const EditMessageFormWithParams = () => {
  const { type } = useParams();
  return <EditMessageForm type={type} onSave={() => null} />;
};

export default () => {
  return (
    <Store>
      <HashRouter>
        <div className={styles.container}>
          <AppSidebar />

          <div style={{ flexGrow: 1 }}>
            <div className={styles.main}>
              <Switch>
                <Route exact path="/" />
                <Route path="/new" component={CreateNew} />
                <Route
                  path="/message/:type"
                  component={EditMessageFormWithParams}
                />
                <Route path="/:slug/edit" component={EditForm} />
                <Route path="/launch" component={LaunchForm} />
                <Route path="/live" component={LiveForm} />
              </Switch>
            </div>
          </div>
          <Switch>
            <Route exact path="/:slug/edit/:branch/message">
              <div className={styles.slideInPanel}>
                <EditMessageForm type="cfr" />
              </div>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </Store>
  );
};
