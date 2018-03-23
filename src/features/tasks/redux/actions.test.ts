import { addTask, removeTask, updateTask } from './actions';
import { ActionAdd, ActionRemove, ActionUpdate } from './types';

describe('ACTIONS/Tasks', () => {
    it('should correctly send `ADD` type', () => {
        const result: ActionAdd = addTask('TEST');
        const expectedResult: ActionAdd = {
            type: 'Tasks/ADD',
            title: 'TEST'
        };

        expect(result).toEqual(expectedResult);
    });

    it('should correctly send `REMOVE` type', () => {
        const result: ActionRemove = removeTask('1');
        const expectedResult: ActionRemove = {
            type: 'Tasks/REMOVE',
            id: '1'
        };

        expect(result).toEqual(expectedResult);
    });

    it('should correctly send `UPDATE` type', () => {
        const result: ActionUpdate = updateTask('1', {title: 'TESTING'});
        const expectedResult: ActionUpdate = {
            type: 'Tasks/UPDATE',
            id: '1',
            payload: {
                title: 'TESTING'
            }
        };

        expect(result).toEqual(expectedResult);
    });
});
