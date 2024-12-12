import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <>
    
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
