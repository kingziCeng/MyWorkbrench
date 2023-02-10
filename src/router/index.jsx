import { Route, Routes } from "react-router-dom";
import Home from '../page/Home'
function Router() {
  return (
    <Routes>
      <Route path="/" element = { <Home></Home> }></Route>
    </Routes>
  )
}
export default Router