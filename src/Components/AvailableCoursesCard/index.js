import React from 'react'
import { Row , Col } from 'react-bootstrap'
import './index.scss'

const AvailableCoursesCard = ({data}) => {
    const showData = [
        {
            label : "کد درس",
            value : data?.code,
            color : "purple"
        },
        {
            label : "گروه",
            value : data?.group
        },
        {
            label : "نام درس",
            value : data?.name,
            color : "success"
            
        },
        {
            label : "نام استاد",
            value : data?.teacher,
            color : "primary"
        },
        {
            label : "ظرفیت",
            value : data?.size
        },
        {
            label : "تاریخ امتحان",
            value : data?.date,
            color : "danger"
        },
        {
            label : "محل تشکیل کلاس",
            value : data?.location,
            color : "gray"
        },
        {
            label : "ارائه شده برای",
            value : data?.groupName
        },
        {
            label : "پیشنیاز",
            value : data?.need
        },
    ]
  return (
    <div className="w-100 rounded bg-white shadow-sm border rounded m-2 p-1 ">
        <Row className="p-1">
            {showData.map((item , index)=>
                <Col className="p-1" key={index+10} xs="12" md="6" lg="4">
                    <p className={`p-2 text-${item.color}`}>{item.label}  :  {item.value}</p>
                </Col>
            )}
        </Row>
    </div>
  )
}

export default AvailableCoursesCard