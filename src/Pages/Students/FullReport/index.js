import { useState } from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import Table from '../../../Components/Table'

const FullReport = () => {
    const [ active , setActive ] = useState("aboutCourse")
    const buttonInfo = [
        {
          id: 0,
          label: "13981",
          state: "aboutCourse"
        },
        {
          id: 1,
          label: "13982",
          state: "topics"
        },
        {
          id: 2,
          label: "13991",
          state: "aboutTeacher"
        },
        {
          id: 3,
          label: "13992",
          state: "question"
        },
      ]
    return (
        <Container className="bg-white rounded shadow-sm p-2">
            <Row>
                <Col>
                <p className="text-center my-4 text-success fw-500 fs-20 p-1">نیمسال موردنظر خود را انتخاب کنید</p>
                    <div className="sort-items-section col-12 flex-center col-gap-5 overflow-auto p-3">
                        {buttonInfo.map((item) => (
                            <button
                                key={item.id}
                                onClick={() =>
                                    setActive(p => p = item.state)
                                }
                                className={`position-relative white-space-nowrap px-1 py-2 border-0 transition ${active === item.state ? "active text-info" : "text-secondary"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className="w-100">
                        {/* {active == "aboutCourse" && <AboutCourse />}
                        {active == "topics" && <Topics />}
                        {active == "aboutTeacher" && <AboutTeacher />}
                        {active == "question" && <Question />} */}
                    </div>
                </Col>
                <Col xs="12" lg="12">
                    <Table>
                        <thead>
                            <tr>
                                <th>كد درس	</th>
                                <th>نام درس</th>
                                <th>واحد</th>
                                <th>نمره</th>
                                <th>وضع</th>
                            </tr>
                        </thead>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default FullReport