
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProviders/lib/useTheme";
import "./styles/index.scss";


const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div className={classNames("app", {}, [theme])}>
        <h2>Главная</h2>
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    </div>
  );
};

export default App;
