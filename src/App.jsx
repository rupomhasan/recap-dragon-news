import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-[poppins] sm:m-3 m-5">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
