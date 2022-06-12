import { ActionType, changeFilterPayload } from "../types/store";

export const changeFilter = (payload: changeFilterPayload) => ({
    type: ActionType.changeFilter,
    payload,
})
