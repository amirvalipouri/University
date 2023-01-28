import React from 'react'
import { Container } from 'react-bootstrap'
import AvailableCoursesCard from '../../../Components/AvailableCoursesCard'

const AvailableCourses = () => {
  const data = [
    {
      id : "62b63f",
      code : "1501",
      group : "1",
      name : "مبانی کامپیوتر",
      teacher : "داور گیوکی",
      size : "30",
      date : "1402/4/05",
      location : "دوشنبه(12-14)",
      groupName : "کامپیوتر",
      need : "--"
    },
    {
      id : "62b63a",
      code : "1502",
      group : "2",
      name : "برنامه سازی پیشرفته",
      teacher : "داور گیوکی",
      size : "30",
      date : "1402/4/07",
      location : "یکشنبه(12-14)",
      groupName : "کامپیوتر",
      need : "مبانی کامپیوتر"
    },
    {
      id : "62b63u",
      code : "1502",
      group : "2",
      name : "برنامه سازی پیشرفته",
      teacher : "مهدی عباسی",
      size : "30",
      date : "1402/4/07",
      location : "یکشنبه(12-14)",
      groupName : "کامپیوتر",
      need : "مبانی کامپیوتر"
    },
  ]
  return (
    <Container className="bg-white shadow-sm rounded p-2 d-flex flex-column justify-contetn-center align-items-center">
      <p className="text-center text-success p-1 fw-500 fs-20 my-4" >دروس ارائه شده در نیمسال</p>
      {data.map((item , index)=>
        <AvailableCoursesCard  data={item} />
      )}
    </Container>
  )
}

export default AvailableCourses