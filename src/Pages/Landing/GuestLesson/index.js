import { useState, useEffect } from 'react';
import './index.scss'
import guestLesson from '../../../constant/_guestLesson';
import { slice } from 'lodash'
import { Row, Col } from 'react-bootstrap';

const GuestLesson = () => {
  const [post, setPost] = useState([...guestLesson])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(5)
  const initialPosts = slice(post, 0, index)

  const loadMore = () => {
    setIndex(index + 5)
    console.log(index)
    if (index >= post.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }


  return (
    <Row className="w-100 d-flex justify-content-center p-4">
      {initialPosts.map((i) =>
        <Col xs={12} sm={12} md={12} lg={4} xl={4} className="shadow rounded-20 bg-white p-3 guest-lesson-div m-2">
          <div className="d-flex justify-content-between align-items-center p-2 font-fa">
            <p className='fs-15 font-fa p-1 fw-700 text-white'>رشته :</p>
            <p className="font-fa p-1 fs-15">{i.lesson}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center p-2">
            <p className='fs-15 font-fa p-1 fw-700 text-white'>نام درس :</p>
            <p className="font-fa p-1 fs-15">{i.name}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center p-2">
            <p className='fs-15 font-fa p-1 fw-700 text-white'>ظرفیت :</p>
            <p className="font-fa p-1 fs-15">{i.Capacity}</p>
          </div>
        </Col>
      )}
      <div className="mt-3 mb-5 d-flex justify-content-center w-100">
        {isCompleted ? (
          <button
            onClick={loadMore}
            type="button"
            className="btn btn-white shadow disabled font-fa text-gray"
          >
            نمایش بیشتر
          </button>
        ) : (
          <button onClick={loadMore} type="button" className="btn btn-gray rounded-4 font-fa text-white">
            نمایش بیشتر
          </button>
        )}
      </div>

    </Row>
  )
}

export default GuestLesson;