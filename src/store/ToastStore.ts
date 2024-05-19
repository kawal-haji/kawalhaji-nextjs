import { Toast } from "@/types/toast";
import { atom } from "jotai";

export const timeoutToastAtom = atom<NodeJS.Timeout | null>(null);
export const toastAtom = atom<Toast | null>(null);
