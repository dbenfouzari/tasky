import * as uuid from 'uuid';
import { ActionAdd, ActionRemove, ActionUpdate } from './types';

export type Action = ActionAdd | ActionRemove | ActionUpdate ;

export interface Task {
    id: string;
    title: string;
}

export interface State {
    [id: string]: Task;
}

const initialState: State = {};

export default (state: State = initialState, action: Action) => {
    switch (action.type) {
        case 'Tasks/ADD':
            const id = uuid.v4();
            return {
                ...state,
                [id]: {
                    id,
                    title: action.title
                }
            };
        case 'Tasks/REMOVE':
            const nextStateForRemove = {...state};
            delete nextStateForRemove[action.id];

            return nextStateForRemove;

        case 'Tasks/UPDATE':
            const nextStateForUpdate = {...state};
            nextStateForUpdate[action.id] = {
                ...nextStateForUpdate[action.id],
                title: action.payload.title
            };

            return nextStateForUpdate;

        default:
            return state;
    }
};
