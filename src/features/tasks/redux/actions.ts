import { ActionAdd, ActionRemove, ActionUpdate } from './types';

export const addTask = (title: string): ActionAdd => ({
    type: 'Tasks/ADD',
    title
});

export const removeTask = (id: string): ActionRemove => ({
    type: 'Tasks/REMOVE',
    id
});

export const updateTask = (id: string, payload: { title: string }): ActionUpdate => ({
    type: 'Tasks/UPDATE',
    id,
    payload: {
        title: payload.title
    }
});
