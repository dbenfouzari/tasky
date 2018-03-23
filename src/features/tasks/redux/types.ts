export type ActionAdd = {
    type: 'Tasks/ADD',
    title: string;
};

export type ActionRemove = {
    type: 'Tasks/REMOVE',
    id: string;
};

export type ActionUpdate = {
    type: 'Tasks/UPDATE',
    id: string;
    payload: {
        id?: string;
        title: string;
    };
};
