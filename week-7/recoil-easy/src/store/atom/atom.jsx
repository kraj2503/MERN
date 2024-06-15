import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 0
});
export const messagesAtom = atom({
    key: "messagesAtom",
    default: 12
});


export const totalnotificationSelector = selector({
    key: "totalnotificationSelector",
    get: ({get}) =>{
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationsAtomCount= get(notificationsAtom)
        const messagesAtomCount = get(messagesAtom)
        return (networkAtomCount+jobsAtomCount+notificationsAtomCount+messagesAtomCount)
    }
})