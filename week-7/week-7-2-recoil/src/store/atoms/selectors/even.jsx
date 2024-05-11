import { selector } from "recoil";
import { CountAtom } from "../count";

export const evenSelector = selector({
    key: "evenSelector",
    get: ({ get }) => {
        const count = get(CountAtom)
        return count%2
    }
})