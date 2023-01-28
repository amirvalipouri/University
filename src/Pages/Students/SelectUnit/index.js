import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Table from '../../../Components/Table'

const SelectUnit = () => {

    const data = [
        {
            id: 0,
            teacher: "داور گیوکی",
            lesson: "مبانی",
            examDate: "1402/04/05",
            classTime: "دوشنبه 10-8",
            status: "ثبت شد"
        }
    ]

    return (
        <div className="bg-white rounded shadow-sm w-100">
            <Row className="w-100">
                <Col xs="12" lg="12" >
                    <Form className="my-4 w-100">
                        <Row>
                            <Col xs='12' lg="6" xl="6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="p-1">کد درس</Form.Label>
                                    <Form.Control type="text" placeholder="کد درس را وارد کنید ..." />
                                </Form.Group>
                            </Col>

                            <Col xs='12' lg="6" xl="6">
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className="p-1">شماره گروه</Form.Label>
                                    <Form.Control type="text" placeholder=" کد درس را وارد کنید ..." />
                                </Form.Group>
                            </Col>

                            <Col xs="12" lg="12" >
                                <Button className="w-100" variant="success" type="submit">
                                    ثبت درس
                                </Button>
                            </Col>
                        </Row>

                    </Form>
                </Col>
                <Col xs="12" lg="12" >
                    <Table className="w-100 my-2">
                        <thead>
                            <tr className="">
                                <th>#</th>
                                <th>اسم درس</th>
                                <th>نام استاد</th>
                                <th>تاریخ امتحان</th>
                                <th>تایم کلاسی</th>
                                <th>وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) =>
                                <tr className="shadow-sm">
                                    <td>{item.id + 1}</td>
                                    <td>{item.lesson}</td>
                                    <td className="text-success">{item.teacher}</td>
                                    <td>{item.examDate}</td>
                                    <td className="text-primary">{item.classTime}</td>
                                    <td>{item.status}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Col>
            </Row>





        </div>
    )
}

export default SelectUnit