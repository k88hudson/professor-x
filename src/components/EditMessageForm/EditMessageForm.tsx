import React, { useState } from "react";
import Select from "react-select";
import { useHistory, useParams } from "react-router-dom";
import {
  SingleTextField,
  SelectField,
  ColorSelect,
  LongTextField,
  BaseField,
  Button,
  CustomSelectOption,
} from "../FormFields/FormFields";

import { colors } from "../FormFields/photonColors";
import { SpecialMessageActions } from "../FormFields/SMA";
import styles from "./EditMessageForm.css";
import formStyles from "../FormFields/FormFields.css";

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

const templateTypes = {
  cfr: ({ onSave }) => {
    const history = useHistory();
    return (
      <>
        <BaseField
          title="Chiclet text"
          description="The text of the chiclet. Defaults to 'Recommended'."
          id="chiclet_text"
        >
          <input
            type="text"
            id="chiclet_text"
            placeholder="Recommended"
            defaultValue="Recommended"
          />
        </BaseField>
        <BaseField
          id="chiclet_color"
          title="Chiclet color"
          description="Color of the chiclet. Defaults to blue"
        >
          <ColorSelect
            defaultValue={{ label: "BLUE_60", value: colors.BLUE_60 }}
          />
        </BaseField>
        <SingleTextField
          title="Doorhanger Title"
          description="Title text at the top of the door hanger"
          placeholder="Recommended"
          id="title"
        />
        <LongTextField
          title="Doorhanger Body"
          description="A longer paragraph of text."
          placeholder="Body"
          id="body"
        />
        <SingleTextField
          title="Icon"
          description="An image (please provide a URL or the image file up to 96x96px)."
          placeholder="Icon"
          id="body"
        />
        <SingleTextField
          title="Primary Button Label"
          description="The label of the button."
          placeholder="Import Passwords"
          id="body"
        />
        <SelectField
          title="Primary Button Action"
          description="The special action triggered by clicking on the button. Choose any of the available button actions."
          id="metric"
          options={Object.keys(SpecialMessageActions).map((key) => ({
            value: key,
            label: key,
            description: SpecialMessageActions[key].description,
          }))}
        />
        <p>
          {/* <Button lightBlue onClick={() => history.goBack()}>
            Preview in Firefox
          </Button>{" "} */}
          <Button onClick={() => history.goBack()}>Save Message</Button>
        </p>
      </>
    );
  },
};

export default ({ type, showTypePicker, onSave }) => {
  const { branch = "Branch" } = useParams();
  const { label } = typeOptions.find((o) => o.value === type);
  const TemplateComponent = templateTypes[type];
  return (
    <div className={styles.container}>
      <h2 style={{ display: "flex" }}>
        Edit {branch}{" "}
        <span style={{ flexGrow: 1, textAlign: "right" }}>
          <Button lightBlue>
            Preview in Firefox{" "}
            <img
              style={{ marginLeft: "6px" }}
              className={formStyles.icon}
              src="chrome://browser/skin/open-in-new.svg"
            />
          </Button>
        </span>
      </h2>
      {showTypePicker && (
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

      <TemplateComponent onSave={onSave} />
    </div>
  );
};
