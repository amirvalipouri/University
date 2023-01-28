import React, { useState } from 'react'
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import Table from '../../../Components/Table'

const TemporaryRecord = () => {
    const [year, setYear] = useState('')
    const data = [
        {
            id : 0,
            date : "نیمسال اول 1400-1401"
        },
        {
            id : 1,
            date : "نیمسال دوم 1400-1401"
        },
        {
            id : 2,
            date : "نیمسال اول 1399-1400"
        },
        {
            id : 3,
            date : "نیمسال دوم 1399-1400"
        },
    ]
    return (
        <Container>
            <Row>
                <Col className="p-1" xs="12" lg="6">دروس ارائه شده شما در  : {year}</Col>
                <Col style={{overflowY : "hidden"}} xs="12" lg="6" className="p-1 h-auto">
                    <DropdownButton id="dropdown-basic-button" title="انتخاب نیمسال">
                        {data.map((item , index)=>
                            <Dropdown.Item className="text-black m-1 p-2" onClick={()=>setYear(item.date)} key={item.id}>{item.data}</Dropdown.Item>
                        )}
                        
                    </DropdownButton>
                </Col>
            </Row>

            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>كد درس	</th>
                            <th>نام درس</th>
                            <th>واحد</th>
                            <th>نمره</th>
                            <th>وضع</th>
                            <th>تاريخ امتحان</th>
                            <th>ساعت امتحان</th>
                        </tr>
                    </thead>
                </Table>
            </div>
        </Container>
    )
}

export default TemporaryRecord