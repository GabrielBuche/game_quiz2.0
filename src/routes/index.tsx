import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { Ranking }  from '../pages/ranking';
import { Home } from '../pages/home';
import { Register } from '../pages/register';
import { Game } from '../pages/game'
export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/Ranking' 
                    element={
                        <Ranking/>
                    }
                />
                <Route 
                    path='/Home' 
                    element={
                        <Home/>
                    }
                />

                <Route 
                    path='/Register' 
                    element={
                        <Register/>
                    }
                />

                <Route 
                    path='/Game' 
                    element={
                        <Game/>
                    }
                />

                <Route
                    index
                    path='/'
                    element={
                        <Login />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}