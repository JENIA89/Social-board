import React, { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProviders/lib/useTheme';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useAppDispatch } from './providers/StoreProvider/config/hooks';
import { userActions } from 'entities/User';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
