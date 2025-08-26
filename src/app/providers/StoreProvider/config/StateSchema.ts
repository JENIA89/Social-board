import { UserSchema } from 'entities/User/index';
import { LoginShema } from 'features/AuthByUsername';

export interface StateSchema {
    user: UserSchema;
    loginForm?: LoginShema;
}
