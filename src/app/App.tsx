import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProviders/lib/useTheme";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";



const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div className={classNames("app", {}, [theme])}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
