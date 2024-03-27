
import {Navigate,Route,Routes} from "react-router-dom"
import { lazy } from 'react'
import LazySuspense from "./components/LazySuspense"
const LazyLogin = lazy(() => import ("./pages/auth/Login"))
const LazyRegister = lazy(() => import ("./pages/auth/Register"))
const LazyForgotPassword = lazy(() => import ("./pages/auth/ForgotPassword"))
const LazyHome = lazy(() => import ("./pages/user/Home"))
const Lazyabout = lazy(() => import ("./pages/user/about"))
const Lazyacademy = lazy(() => import ("./pages/user/academy"))
const Lazycourses = lazy(() => import ("./pages/user/courses"))






function App()  {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/ChessChampion/login"/>}/>
      <Route path="/ChessChampion/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/ChessChampion/Register" element={<LazySuspense component={LazyRegister}/>}/>
      <Route path="/ChessChampion/ForgotPassword" element={<LazySuspense component={LazyForgotPassword}/>}/>
      <Route path="/ChessChampion/Home" element={<LazySuspense component={LazyHome}/>}/>
      <Route path="/ChessChampion/about" element={<LazySuspense component={Lazyabout}/>}/>
      <Route path="/ChessChampion/courses" element={<LazySuspense component={Lazycourses}/>}/>
      <Route path="/ChessChampion/academy" element={<LazySuspense component={Lazyacademy}/>}/>
    
    </Routes>
  )
}

export default App
 