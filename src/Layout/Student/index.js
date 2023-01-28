import { useState, useRef , useEffect } from "react"

import './index.scss'

import { Outlet , Link , NavLink , useLocation } from 'react-router-dom';
import { Row , Col , Badage  } from "react-bootstrap"
import { students } from "../../constant/_navItems";
import Accordion from "./Accordion";

const StudentLayout = () => {
    
   const location = useLocation();
  const [ message , setMessages ] = useState([])
//   const headerButtons = [
//     {
//       icon: notification,
//       title: "notification",
//       href: "/messages",
//     },
//     {
//       icon: people,
//       title: "people",
//       href: "/my-information",
//     },
//   ];

  const renderNavItems = () => {
    const elements = [];
    students.forEach((item, index) => {
      if ("path" in item) {
        const element = (
          <li key={index} className="w-100 ">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `w-100 d-flex justify-content-start align-items-center   ${
                  isActive ? "text-success active" : "text-black"
                }`
              }
            >
              <i class={`bi bi-${item.icon}  mx-2 my-2`} ></i>
              {item.title}
            </NavLink>
          </li>
        );
        elements.push(element);
      }
      if ("children" in item) {
        const element = (
          <li key={index} className="w-100 p-1 text-black">
            <Accordion className="p-1" title={item.title}>
              <div className="d-flex flex-column">
                {item.children.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    
                    className={({ isActive }) =>
                      ` d-flex align-items-center justify-content-start align-items-center transition p-2 fs-15  ${
                        isActive ? "text-success active" : "text-black"
                      }`
                    }
                  >
                    {item.title}
                    
                  </NavLink>
                ))}
              </div>
            </Accordion>
          </li>
        );
        elements.push(element);
      }
    });
    return elements;
  };
  const sidebar = useRef();
//   const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const profile = useSelector((s) => s.profile);
//   const setProfile = (data) => {
//     dispatch({ type: "SET_PROFILE", data });
//   };
  const handleShowSidebar = () => {
    sidebar.current.classList.toggle("active", showSidebar);
  };
  const handleChangeLocation = () => {
    setShowSidebar(false);
  };
//   const getProfile = () => {
//     const url = "/user/getMyProfile";
//     axios.post(url).then(({ data }) => {
//       setProfile(data.user[0]);
//     });
//   };

//   const getMessages = () => {
//     const url = "/message/getMessage";
//     axios.post(url).then(({ data }) => {
//       setMessages(data);
//       console.log(data)
//     });
//   };

  // const hasProfile = Boolean(profile.profilePic);
  // useEffect(getMessages, []);
  useEffect(handleChangeLocation, [location.pathname]);
  useEffect(handleShowSidebar, [showSidebar]);
  // useEffect(getProfile, []);

  return (
    <div className="STUDENT d-flex  w-100">
      
      <div ref={sidebar} className="sidebar shadow-sm p-0">
        <div className="sidebar-menu w-100  d-flex flex-column align-items-center justify-content-center  text-white px-1 py-3">
          
          <div className="profile  rounded  bg-opacity-10">
            <div className="content d-flex flex-column flex-center row-gap-3 py-2 w-100 rounded">
              <img
                width="60"
                height="60"
                className="bg-light bg-opacity-10 rounded-circle object-fit-cover"
                src="https://gravatar.com/avatar/82755c2edccbd174c7dee90218c52ec4?s=400&d=robohash&r=x"
                alt="vector"
              />
              <h6 className="text-center text-white">فاطمه علیمرادی</h6>
            </div>
          </div>
          <ul className="nav-items w-100 p-3 h-auto d-flex flex-column flex-center row-gap-2">
            {renderNavItems()}
          </ul>
          <button
            onClick={() => setShowLogoutModal(true)}
            className="text-danger mt-auto d-flex flex-center col-gap-1 bg-transparent border-0"
          >
            {/* <img width="25" src={logOutIcon} alt="logOutIcon" /> */}
            خروج از حساب کاربری
          </button>
        </div>
        <button
          onClick={() => setShowSidebar(false)}
          className="hide-btn d-block d-lg-none"
        />
      </div>
      <div className="px-2 w-100">
        <Row as="header" className="justify-content-between">
          <Col xs="12" md="6">
            <div className="d-flex align-items-end ms-auto">
              <i
                className="bi bi-list fs-1 d-flex d-lg-none"
                onClick={() => setShowSidebar(true)}
              />
            </div>
          </Col>
          
        </Row>
        <main className="py-2 w-100">
          <Outlet />
        </main>
      </div>
      {/* <LogoutModal show={showLogoutModal} onHide={setShowLogoutModal} /> */}
    </div>)
}

export default StudentLayout;