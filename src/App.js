
import "./App.css";
import Card_Menu from "./components/Cards/Card_Menu";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    
      <div className="bg-[#b3afb8] h-screen">
        <div className=" flex justify-between p-4">
          <h1 className=" text-7xl text-slate-400 ">Review Inbox</h1>
          <p className="  text-slate-400">9:41</p>
        </div>
        <div className=" relative grid grid-cols-4">
          <Sidebar/>
          <div className=" col-span-3">
            <Card_Menu/>
          </div>
        </div>
      </div>
      
    
  );
}

export default App;
