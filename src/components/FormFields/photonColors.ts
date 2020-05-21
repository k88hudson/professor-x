export const colors = {
  MAGENTA_50: "#ff1ad9",
  MAGENTA_60: "#ed00b5",
  MAGENTA_70: "#b5007f",
  MAGENTA_80: "#7d004f",
  MAGENTA_90: "#440027",

  PURPLE_30: "#c069ff",
  PURPLE_40: "#ad3bff",
  PURPLE_50: "#9400ff",
  PURPLE_60: "#8000d7",
  PURPLE_70: "#6200a4",
  PURPLE_80: "#440071",
  PURPLE_90: "#25003e",

  BLUE_40: "#45a1ff",
  BLUE_50: "#0a84ff",
  BLUE_50_A30: "#0a84ff4c",
  BLUE_60: "#0060df",
  BLUE_70: "#003eaa",
  BLUE_80: "#002275",
  BLUE_90: "#000f40",

  TEAL_50: "#00feff",
  TEAL_60: "#00c8d7",
  TEAL_70: "#008ea4",
  TEAL_80: "#005a71",
  TEAL_90: "#002d3e",

  GREEN_50: "#30e60b",
  GREEN_60: "#12bc00",
  GREEN_70: "#058b00",
  GREEN_80: "#006504",
  GREEN_90: "#003706",

  YELLOW_50: "#ffe900",
  YELLOW_60: "#d7b600",
  YELLOW_70: "#a47f00",
  YELLOW_80: "#715100",
  YELLOW_90: "#3e2800",

  RED_50: "#ff0039",
  RED_60: "#d70022",
  RED_70: "#a4000f",
  RED_80: "#5a0002",
  RED_90: "#3e0200",

  ORANGE_50: "#ff9400",
  ORANGE_60: "#d76e00",
  ORANGE_70: "#a44900",
  ORANGE_80: "#712b00",
  ORANGE_90: "#3e1300",

  GREY_10: "#f9f9fa",
  GREY_10_A10: "#f9f9fa19",
  GREY_10_A20: "#f9f9fa33",
  GREY_10_A40: "#f9f9fa66",
  GREY_10_A60: "#f9f9fa99",
  GREY_10_A80: "#f9f9facc",
  GREY_20: "#ededf0",
  GREY_30: "#d7d7db",
  GREY_40: "#b1b1b3",
  GREY_50: "#737373",
  GREY_60: "#4a4a4f",
  GREY_70: "#38383d",
  GREY_80: "#2a2a2e",
  GREY_90: "#0c0c0d",
  GREY_90_A05: "#0c0c0d0c",
  GREY_90_A10: "#0c0c0d19",
  GREY_90_A20: "#0c0c0d33",
  GREY_90_A30: "#0c0c0d4c",
  GREY_90_A40: "#0c0c0d66",
  GREY_90_A50: "#0c0c0d7f",
  GREY_90_A60: "#0c0c0d99",
  GREY_90_A70: "#0c0c0db2",
  GREY_90_A80: "#0c0c0dcc",
  GREY_90_A90: "#0c0c0de5",

  INK_70: "#363959",
  INK_80: "#202340",
  INK_90: "#0f1126",

  WHITE_100: "#ffffff",
};

// Utility
const entries = Object.entries as <T>(
  o: T
) => [Extract<keyof T, string>, T[keyof T]][];
type Unpacked<T> = T extends (infer U)[] ? U : T;

export const colorOptions = entries(colors).map(([key, value]) => ({
  label: key,
  value,
}));

export type ColorOption = Unpacked<typeof colorOptions>;
