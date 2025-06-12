import { Route, Routes } from "react-router-dom";
import Feed from "../pages/Feed";
import Posts from "../pages/Posts";
import Update from "../pages/Update";
import More from "../pages/More";
import Error from "../pages/Error";

export default function AppRouter() {
  return (
    <Routes>
        <Route path={"/"} element={<Feed/>}></Route>
        <Route path={"/posts"} element={<Posts/>}></Route>
        <Route path={"/update"} element={<Update/>}></Route>
        <Route path={"/more"} element={<More/>}></Route>
        <Route path={"*"} element={<Error/>}></Route>
    </Routes>
  )
}
