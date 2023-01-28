import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const Dashboard = () => {
  const Data = [
    {
      id: 1,
      year: 1398,
      avg: 17.63,
      userLost: 823
    },
    {
      id: 2,
      year: 1399,
      avg: 14.54,
      userLost: 345
    },
    {
      id: 3,
      year: 1400,
      avg: 16.60,
      userLost: 555
    },
    {
      id: 4,
      year: 1401,
      avg: 16.92,
      userLost: 4555
    },

  ];
  const chartData =
  {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "معدل شما :",
        data: Data.map((data) => data.avg),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }

  const information = [
    {
      label: "نام ",
      value: "امیرمحمد ولی پوری"
    },
    {
      label: "شماره دنشجویی",
      value: "9811521062"
    },
    {
      label: "دوره آموزشی",
      value: "روزانه"
    },
    {
      label: "نیم سال فعال",
      value: "نيمسال اول سال تحصيلي 1402 - 1401 "
    },
  ]



  return (
    <Container className=" ">
      <Row>

        <div className='bg-white shadow-sm  rounded p-4 mx-1'>
          <p className="text-start mx-2 my-3 p-1">اطلاعات دانشجو</p>
          <Row>
            <Col xs="12" lg="2">
              <img className="rounded-circle" src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' />
            </Col>
            <Col xs="12" lg="10">
              <Row>
                {information.map((item, index) =>
                  <Col xs="12" lg="6">
                    <p className="p-2">{item.label} : {item.value}</p>
                  </Col>
                )}
              </Row>
            </Col>

          </Row>
          <div>

          </div>
          <Row>

          </Row>


        </div>
        <Col className='d-flex justify-content-center align-items-center border bg-white rounded  p-4 mx-1' xs="12" lg="12">
          <Line
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "معدل شما بین سال های 1398-1401"
                },
                legend: {
                  display: false
                }
              }
            }}

          />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard