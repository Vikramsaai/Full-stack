
import {Navigate,Route,Routes} from "react-router-dom"
import { lazy } from 'react'
import LazySuspense from "./components/LazySuspense"
const LazyLogin = lazy(() => import ("./pages/auth/Login"))
const LazyRegister = lazy(() => import ("./pages/auth/Register"))
const LazyForgotPassword = lazy(() => import ("./pages/auth/ForgotPassword"))
const LazyHome = lazy(() => import ("./pages/user/Home"))




function App()  {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/ChessChampion/login"/>}/>
      <Route path="/ChessChampion/login" element={<LazySuspense component={LazyLogin}/>}/>
      <Route path="/ChessChampion/Register" element={<LazySuspense component={LazyRegister}/>}/>
      <Route path="/ChessChampion/ForgotPassword" element={<LazySuspense component={LazyForgotPassword}/>}/>
      <Route path="/ChessChampion/Home" element={<LazySuspense component={LazyHome}/>}/>
    
    </Routes>
  )
}

export default App
 