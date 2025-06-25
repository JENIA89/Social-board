import { classNames } from "./helpers/classNames/classNames";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

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
