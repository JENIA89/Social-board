import { UserSchema } from 'entities/User/index';
import { LoginShema } from 'features/AuthByUsername';

export interface StateSchema {
    user: UserSchema;

    //Асинхронный редьюсер
    loginForm?: LoginShema;
}

export type StateSchemaKey = keyof StateSchema;
