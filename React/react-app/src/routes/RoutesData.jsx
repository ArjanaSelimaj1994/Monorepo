import Home from '../pages/Home'
import SelectedOption from '../pages/SelectedOption'

export const routesData = [
    {
        path: '/',
        element: <Home/>
    }, 
    {
        path: '/selection/:option',
        element: <SelectedOption/>
    }
]