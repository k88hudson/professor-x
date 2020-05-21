/* eslint react/jsx-props-no-spreading: 0 */
import React from "react";
import Select, { components, OptionProps, Props, Styles } from "react-select";
import styles from "./FormFields.css";
import { colorOptions, ColorOption } from "./photonColors";
import { Experiment } from "../../@types/Experiment";

interface BaseFieldProps {
  title: string;
  description?: string;
  id: string;
  noBottomPadding?: boolean;
}

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export const BaseField = ({
  title,
  description,
  id,

  children,
}: React.PropsWithChildren<BaseFieldProps>) => {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.titleLabel} htmlFor={id}>
        {title}
      </label>
      {description && <p className={styles.inputHelpText}>{description}</p>}
      {children}
    </div>
  );
};

export const SingleTextField = (
  props: BaseFieldProps & {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  }
) => {
  const { placeholder, id, value, onChange, ...baseProps } = props;
  return (
    <BaseField id={id} {...baseProps}>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </BaseField>
  );
};

export const LongTextField = (
  props: BaseFieldProps & {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  }
) => {
  const { placeholder, id, value, onChange, ...baseProps } = props;
  return (
    <BaseField id={id} {...baseProps}>
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </BaseField>
  );
};

export const CustomSelectOption = (props: OptionProps<SelectOption>) => {
  const { children, data } = props;
  return (
    <div>
      <components.Option {...props}>
        {children}
        {data.description && (
          <p className={styles.dropdownDescription}>{data.description}</p>
        )}
      </components.Option>
    </div>
  );
};

export const SelectField = (
  props: BaseFieldProps & {
    value?: SelectOption;
    onChange?: (value: string) => void;
    options: SelectOption[];
  }
) => {
  const { id, options, ...baseProps } = props;
  return (
    <BaseField id={id} {...baseProps}>
      <Select components={{ Option: CustomSelectOption }} options={options} />
    </BaseField>
  );
};

interface MultiSelectFieldProps extends BaseFieldProps {
  options: SelectOption[];
  emptyMessage: string;
}

export const MultiSelectField = (props: MultiSelectFieldProps) => {
  const { id, options, emptyMessage, ...baseProps } = props;
  return (
    <BaseField id={id} {...baseProps}>
      <Select
        components={{ Option: CustomSelectOption }}
        isMulti
        options={options}
        placeholder={emptyMessage}
      />
    </BaseField>
  );
};

const colorDot: Styles["option"] = (
  provided,
  { data }: { data: ColorOption }
) => {
  return {
    ...provided,

    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: data.value,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  };
};

const colorStyles: Styles = {
  option: colorDot,
  singleValue: colorDot,
};

export const ColorSelect = (props: Props<ColorOption>) => {
  return <Select styles={colorStyles} options={colorOptions} {...props} />;
};

export const Button = ({
  secondary,
  lightBlue,
  header,
  ...restProps
}: {
  secondary?: boolean;
  lightBlue?: boolean;
  header?: boolean;
}) => {
  let className = styles.primaryButton;
  if (secondary) {
    className = styles.secondaryButton;
  } else if (lightBlue) {
    className = styles.lightBlue;
  } else if (header) {
    className = styles.headerButton;
  }
  return <button className={className} type="button" {...restProps} />;
};

export const Notice = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.notice}>{children}</div>
);

type SelectOptionArr = SelectOption[];
type SelectOptionGroupArr = SelectOptionGroup[];

export function isSelectOption(opts: any): opts is SelectOption {
  return opts?.label && opts?.value;
}

function isSelectOptionGroup(
  opts: SelectOptionArr | SelectOptionGroupArr
): opts is SelectOptionGroupArr {
  return (opts as SelectOptionGroupArr)[0]?.options !== undefined;
}

export const getOptionFromValue = (
  value: string,
  options: SelectOption[] | SelectOptionGroup[]
): SelectOption | undefined => {
  let optionsToCheck: SelectOption[];
  if (isSelectOptionGroup(options)) {
    optionsToCheck = [];
    options.forEach((group) =>
      group.options.forEach((option) => optionsToCheck.push(option))
    );
  } else {
    optionsToCheck = options;
  }

  for (const option of optionsToCheck) {
    if (option.value === value) {
      return option;
    }
  }
};

interface XSelectProps {
  propName: keyof Experiment;
  experiment: Experiment;
  onValue(value: string): void;
  options: SelectOption[] | SelectOptionGroup[];
}

const customStyles: Styles = {
  container: (other, { selectProps: { inline, width } }) => ({
    ...other,
    display: inline && "inline-block",
    width,
    margin: inline && "0 8px",
  }),
  control: (other, { selectProps: { inline } }) =>
    inline
      ? {
          ...other,
          color: "var(--blue-60)",
          border: "1px solid",
          "&:hover": { borderColor: "var(--blue-40)" },
        }
      : other,
  singleValue: (other, { selectProps: { inline } }) =>
    inline
      ? {
          ...other,
          color: "inherit",
        }
      : other,
  menu: (other, { selectProps: { menuWidth } }) =>
    menuWidth ? { ...other, width: menuWidth } : other,
  indicatorSeparator: (other, { selectProps: { inline } }) =>
    inline ? { display: "none" } : other,
};

export function XSelect({
  propName,
  experiment,
  onValue,
  ...restProps
}: XSelectProps & Props) {
  const { options } = restProps;
  return (
    <Select
      styles={customStyles}
      {...restProps}
      value={getOptionFromValue(experiment[propName], options)}
      onChange={(option) => {
        if (!isSelectOption(option)) return;
        onValue(option.value);
      }}
      components={{ Option: CustomSelectOption }}
    />
  );
}
