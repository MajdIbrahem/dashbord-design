import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New'
import List from './pages/list/List';
import { userInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import {darkModeContext} from './context/darkModeContext'
function App() {

  const {dark}=useContext(darkModeContext)
  return (
    <div className={dark?"app dark":"app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/users">
          <Route index  element={<List/>}></Route>
          <Route path=":userId"  element={<Single/>}></Route>
          <Route path="new"  element={<New inputs={userInputs} title="Add New User"/>}></Route>
        </Route>
        <Route path="/products">
          <Route index  element={<List/>}></Route>
          <Route path=":productId"  element={<Single/>}></Route>
          <Route path="new"  element={<New/>}></Route>
        </Route>
    </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
