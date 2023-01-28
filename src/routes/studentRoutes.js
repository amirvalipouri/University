import SelectUnit from "../Pages/Students/SelectUnit"
import Dashboard from "../Pages/Students/Dashboard"
import TemporaryRecord from "../Pages/Students/TemporaryRecord"
import StudentsUnit from "../Pages/Students/StudentsUnit"
import AvailableCourses from "../Pages/Students/AvailableCourses"
import FullReport from "../Pages/Students/FullReport"



const studentRoutes = [
    { path : "dashboard" , element : <Dashboard/> },
    { path : "select-unit" , element : <SelectUnit/> },
    { path : "Temporary-record" , element : <TemporaryRecord/> },
    { path : "students-unit" , element : <StudentsUnit/> },
    { path : "available-courses" , element : <AvailableCourses/> },
    { path : "full-report" , element : <FullReport/> },

]

export default studentRoutes