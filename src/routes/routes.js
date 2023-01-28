import { StudentLayout , LandingLayout , TeacherLayout } from '../Layout'


import landingRoutes from './landingRoutes'
import loginRoutes from './loginRoutes'

import LoginLayout from '../Layout/Login'
import studentRoutes from './studentRoutes'

const routes = (isLogged = true , role = "") => {

    return [
        {
            path: "/",
            element: <LandingLayout />,
            children: landingRoutes
        },
        {
            path: "/login",
            element: <LoginLayout />,
            children: loginRoutes
        },
        {
            path: "/student",
            element: <StudentLayout />,
            children: studentRoutes
        }
    ]
}

export default routes;