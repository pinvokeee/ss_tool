import { atom } from "recoil";
import { atomKeys } from "./keys";

export const atomTitle = atom<string>({
    key: atomKeys.title.toString(),
    default: "",
});