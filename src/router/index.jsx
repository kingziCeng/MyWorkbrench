import { Route, Routes } from "react-router-dom";
import Home from '../page/Home'
import FirstOne from '../page/FirstLayout/FirstOne'
import FirstTwo from '../page/FirstLayout/FirstTwo'
function Router() {
  return (
    <Routes>
      <Route path="/" element = { <Home></Home> }></Route>
      <Route path="/first_one" element = { <FirstOne></FirstOne> }></Route>
      <Route path="/first_two" element = { <FirstTwo></FirstTwo> }></Route>
    </Routes>
  )
}
export default Router