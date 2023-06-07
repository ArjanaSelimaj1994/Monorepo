import {Routes, Route}  from 'react-router-dom'
import { routesData} from './RoutesData'

const AppRoutes = () => {
    return (
        <Routes>
            {routesData.map((elem, index) => {
                return <Route key={index} element={elem.element} path={elem.path}/>
            })}
        </Routes>
    )
}

export default AppRoutes;