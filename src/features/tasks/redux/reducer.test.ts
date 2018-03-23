import tasksReducer, { State } from './reducer';
import { ActionAdd, ActionRemove, ActionUpdate } from './types';

jest.mock('uuid', () => ({
    v4: () => '1'
}));

describe('REDUCERS/Tasks', function () {
    it('should add a task', () => {
        const action: ActionAdd = {
            type: 'Tasks/ADD',
            title: 'TEST'
        };
        const state: State = {};
        const result = tasksReducer(state, action);
        const expectedResult: State = {
            '1': {
                id: '1',
                title: 'TEST'
            }
        };

        expect(result).toEqual(expectedResult);
    });

    it('should remove a task', () => {
        const action: ActionRemove = {
            type: 'Tasks/REMOVE',
            id: '1'
        };
        const state: State = {
            '1': {
                id: '1',
                title: 'My test'
            }
        };
        const result = tasksReducer(state, action);
        const expectedResult = {};

        expect(result).toEqual(expectedResult);
    });

    it('should update a task', () => {
        const action: ActionUpdate = {
            type: 'Tasks/UPDATE',
            id: '1',
            payload: {
                title: 'TESTING'
            }
        };
        const state: State = {
            '1': {
                id: '1',
                title: 'My test'
            }
        };
        const result = tasksReducer(state, action);
        const expectedResult = {
            '1': {
                id: '1',
                title: 'TESTING'
            }
        };

        expect(result).toEqual(expectedResult);
    });

    it('should do nothing and return my state', () => {
        const state: State = {
            '1': {
                id: '1',
                title: 'My test'
            }
        };
        // tslint:disable-next-line:no-any
        const result = tasksReducer(state, {type: 'NOTHIN', id: 'nothing'} as any);

        expect(result).toBe(state);
    });

    it('should set my state', () => {
        // tslint:disable-next-line:no-any
        const result = tasksReducer(undefined, {type: 'NOTHIN', id: 'nothing'} as any);

        expect(result).toEqual({});
    });
});