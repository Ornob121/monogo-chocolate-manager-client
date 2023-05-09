import { Outlet } from "react-router-dom";
import Header from "./components/header";

const App = () => {
  return (
    <div style={{ background: "rgba(20, 20, 20, 0.05)" }} className="p-12">
      <div className="bg-white shadow-xl pt-16 pb-20 rounded-xl">
        <div className="pb-16">
          <Header></Header>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
