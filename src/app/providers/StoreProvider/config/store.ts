/* eslint-disable @typescript-eslint/ban-ts-comment */
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
    };

    const ruducerManage = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS__DEV,
        preloadedState: initialState,
    });

    // @ts-expect-error
    store.ruducerManage = ruducerManage;

    return store;
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
