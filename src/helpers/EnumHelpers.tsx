export function getNamesAndValues<T extends string>(e: any) {
  return getNames(e).map((n) => ({
    name: n,
    value: (e[n] !== undefined ? e[n] : n) as T,
  }));
}

export function getValuesAsNames<T extends number>(e: any) {
  return getValues(e).map((n) => ({ name: n as T, value: n }));
}

export function getNames(e: any) {
  return getObjValues(e).filter((v) => typeof v === "string") as string[];
}

export function getValues<T extends number>(e: any) {
  return getObjValues(e).filter((v) => typeof v === "number") as T[];
}

export function getSelectList<T extends number, U>(
  e: any,
  stringConverter: (arg: U) => string
) {
  const selectList = new Map<T, string>();
  getValues(e).forEach((val) =>
    selectList.set(val as T, stringConverter(val as unknown as U))
  );
  return selectList;
}

export function getSelectListAsArray<T extends number, U>(
  e: any,
  stringConverter: (arg: U) => string
) {
  return Array.from(getSelectList(e, stringConverter), (value) => ({
    value: value[0] as T,
    presentation: value[1],
  }));
}

export function getObjValues(e: any): (number | string)[] {
  return Object.keys(e).map((k) => e[k]);
}
