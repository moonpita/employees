export enum ActionType {
    changeArchive = 'main/changeArchive',
    changeName = 'main/changeName',
    changeRole = 'main/changeRole',
    changeDate = 'main/changeDate'
}

export type State = {
    filter: {
        name: string,
        role: string,
        date: string,
        archive: string,
    }
}

export type changeName = {
    filterName: string,
    filterType: string,
}

export type changeArchiveAction = {
    type: ActionType.changeArchive;
    payload: string;
}
export type changeNameAction = {
    type: ActionType.changeName;
    payload: string;
}
export type changeRoleAction = {
    type: ActionType.changeRole;
    payload: string;
}
export type changeDateAction = {
    type: ActionType.changeDate;
    payload: string;
}

export type Actions = changeArchiveAction | changeNameAction | changeDateAction | changeRoleAction; // создаю общий тип для расширяемости