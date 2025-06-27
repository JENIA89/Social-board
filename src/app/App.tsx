import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProviders/lib/useTheme";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme } = useTheme();
    return (
        <div>
            <div className={classNames("app", {}, [theme])}>
                <Navbar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
