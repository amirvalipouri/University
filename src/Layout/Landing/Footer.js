import React from 'react'
import { Col , Row } from 'react-bootstrap'
import './LandFooter.scss'
import { TbPoint } from 'react-icons/tb'
import {IoLocationOutline} from 'react-icons/io5'
import {BsSignpostSplit , BsTelephone} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="Land-Footer shadow p-4">
      <Row>
        <Col xs={11} sm={11} md={10} lg={4} xl={4} className="d-flex justify-content-center align-items-center align-items-lg-start  flex-column p-4  " >
          <p className='text-start text-black font-fa fs-20 p-1'>دسترسی سریع با ما</p>
          <p className='text-start font-fa p-1 fs-12'><TbPoint/> ارتباط با ما</p>
          <p className='text-start font-fa p-1 fs-12'><TbPoint/> ارتباط با رئیس دانشگاه</p>
          <p className='text-start font-fa p-1 fs-12'><TbPoint/> درباره ما</p>
        </Col>
        <Col xs={11} sm={11} md={10} lg={4} xl={4} className="d-flex justify-content-center align-items-center align-items-lg-start  flex-column p-4  " >
          <p className='text-start text-black font-fa fs-20 p-1'>پیوند های مفید</p>
          <p className='text-start font-fa p-1 fs-12'><TbPoint fontSize="15"/>پارک علم و فناوری استان همدان</p>
          <p className='text-start font-fa p-1 fs-12 '><TbPoint fontSize="15"/>پورتال دانشجویی صندوق رفاه</p>
          <p className='text-start font-fa p-1 fs-12'><TbPoint fontSize="15"/>صندوق رفاه دانشجویان وزارت علوم، تحقیقات و فناوری</p>
        </Col>
        <Col xs={11} sm={11} md={10} lg={4} xl={4} className="d-flex justify-content-center align-items-center align-items-lg-start  flex-column p-4  " >
          <p className='text-start text-black font-fa fs-20 p-1'>تماس با ما</p>
          <p className='text-start font-fa p-1 fs-12'><IoLocationOutline fontSize="15"/>نشانی:ملایر، کیلومتر 4 جاده ملایر-اراک</p>
          <p className='text-start font-fa p-1 fs-12 '><BsSignpostSplit fontSize="15"/>  کدپستی: 84621-65741</p>
          <p className='text-start font-fa p-1 fs-12'><BsTelephone fontSize="15"/>  تلفن: 32456518-81-98 </p>
        </Col>
      </Row>
      <p className=" font-fa fs-15 text-center p-1">کلیه حقوق این وب سایت متعلق به دانشگاه ملایر می باشد.</p>
    </div>
  )
}

export default Footer