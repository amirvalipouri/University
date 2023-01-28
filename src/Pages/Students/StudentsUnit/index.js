import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import Table from '../../../Components/Table'

const StudentsUnit = () => {
    return (
        <Container className="w-100 bg-white rounded shadow-sm p-2 m-2">
            <Row className="w-100">
                <Col xs="12" lg="12" xl="12">
                    <Table className="w-100">
                        <thead>
                            <tr>
                                <th>كد درس	</th>
                                <th>نام درس</th>
                                <th>واحد</th>
                                <th>تاريخ امتحان</th>
                                <th>ساعت امتحان</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>c</td>
                                <td>c</td>
                                <td>c</td>
                                <td>c</td>
                                <td>c</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default StudentsUnit