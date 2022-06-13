import { ActionType } from "../types/store";

// сохраняем приоритет для сортировки: по дате или по имени
// Альтернатива: Единый селектор
export let lastPick = ActionType.changeName;

export const changeArchive = (payload: string) => ({
    type: ActionType.changeArchive,
    payload,
})
export const changeDate = (payload: string) => {
    lastPick = ActionType.changeDate;
    return {
        type: ActionType.changeDate,
        payload,
    }
}
export const changeRole = (payload: string) => ({
    type: ActionType.changeRole,
    payload,
})
export const changeName = (payload: string) => {
    lastPick = ActionType.changeName;
    return {
        type: ActionType.changeName,
        payload,
    }
}

