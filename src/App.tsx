import { Dashboard } from "./components/Dashboard/Dashboard";
import { widgets } from "./mocks/dashboard.data";

import "./styles/main.scss";

const App = () => {
  return (
    <div className="App">
      <Dashboard title="My Awesome SOLID Dashboard" widgets={widgets} />
    </div>
  );
};

export default App;
