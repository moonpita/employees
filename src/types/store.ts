export enum ActionType {
    changeFilter = 'main/changeFilter',
}

export type State = {
    filter: {
        filterName: string,
        filterType: string,
    }
}

export type changeFilterPayload = {
    filterName: string,
    filterType: string,
}

export type changeFilterAction = {
    type: ActionType.changeFilter;
    payload: {
        filterName: string,
        filterType: string,
    }
}

export type Actions = changeFilterAction; // создаю общий тип для расширяемости