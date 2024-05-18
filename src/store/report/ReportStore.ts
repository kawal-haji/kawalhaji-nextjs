import { atomWithStorage } from "jotai/utils";

export const reportSelectedAtom = atomWithStorage(
  "reportSelected",
  null as string | null
);
