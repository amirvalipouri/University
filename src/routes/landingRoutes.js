import GuestLesson from "../Pages/Landing/GuestLesson";
import Main from "../Pages/Landing/Main";

const landingRoutes = [
    { path : "" , element : <Main/> },
    { path : "guest-lesson" , element : <GuestLesson/> }
]

export default landingRoutes;