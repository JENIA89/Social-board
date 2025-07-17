import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProviders/lib/useTheme';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsopen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={() => setIsopen(true)}>toggle</button>
            <Navbar />
            <Modal isOpen={isOpen} onClose={() => setIsopen(false)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ipsa atque repellat nostrum ad sint porro
                maiores facilis labore incidunt.
            </Modal>
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
