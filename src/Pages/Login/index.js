import {useState , useEffect} from 'react'

import './index.scss'

import { Row, Col , Form , Button } from 'react-bootstrap'
import logo from '../../assets/logo/logo.png'
import Modal from '../../Components/Modal'
import { Link , useNavigate } from 'react-router-dom'

const Login = () => {

  const [ label , setLabel ] = useState("teacher")
  const [ show , setShow ] = useState(false)
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      setShow(true)
    },1000)
  } , [])

  const labelName = (a) => {
    if(a == "student"){
      return "شماره دانشجویی"
    }else{
      return "کد کاربری"
    }
  }

  return (
    <div className="w-100 d-flex justify-content-center align-items-center Login">
      <Modal show={show} onHide={setShow} size="sm" title="نوع کاربری">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Button onClick={()=>{setLabel("student");setShow(false)}} className='font-fa fw-500 my-2' variant="outline-primary">دانشجو</Button>
          <Button onClick={()=>{setLabel("amoozesh");setShow(false)}} className='font-fa fw-500 my-2' variant="outline-warning">آموزش</Button>
          <Button onClick={()=>{setLabel("teacher");setShow(false)}} className='font-fa fw-500 my-2' variant="outline-success">استاد</Button>
        </div>
      </Modal>
      <div className="d-flex">
        <div className="loginImg d-none d-lg-block shadow-sm"></div>
        <div className=' py-4 px-2 loginForm bg-white shadow-sm position-relative'>
          <Link style={{position : "absolute" , top : "10px" , left : "10px"}}  to="/">
            <i class="bi bi-arrow-left fs-20"></i>
          </Link>
          <div className="w-100 d-flex justify-content-center">
            <img src={logo} alt="logo" />
          </div>
          <Form className=" px-3 py-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='font-fa p-1 fw-700 fs-15'>{labelName(label)} :</Form.Label>
              <Form.Control className='fs-15 fw-500 font-fa' type="text" placeholder={`${labelName(label)} را وارد کنید`} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className='font-fa p-1 fw-700 fs-15'>رمز عبور :</Form.Label>
              <Form.Control type="password" placeholder="******" />
            </Form.Group>
            <Button onClick={()=>navigate('/student/dashboard')} className='font-fa w-100' variant="outline-primary" type="button">
              ورود
            </Button>
            <div className="w-100 d-flex justify-content-center my-1">
              <button onClick={()=>setShow(true)} type='button' className="btn bg-white text-primary font-fa fs-15 " >تغییر نوع کاربری</button>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <i class="bi bi-instagram mx-1"></i>
              <i class="bi bi-twitter mx-1"></i>
              <i class="bi bi-telegram mx-1"></i>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login