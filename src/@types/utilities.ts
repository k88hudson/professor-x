export const entries = Object.entries as <T>(
  o: T
) => [Extract<keyof T, string>, T[keyof T]][];

export type Unpacked<T> = T extends (infer U)[] ? U : T;
