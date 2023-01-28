import { Col, Row, Table } from 'react-bootstrap';
import './index.scss'
import MainCarousel from './MainCarousel';
// import {} from 'react-bootstrap';
import mainLesson from '../../../constant/_mainLesson'
import LessonUni from '../../../Components/LessonUni';

const Main = () => {
    return (
        <div className="Land-Main">
            <div className="w-100  position-relative p-4 ">
                <MainCarousel />
            </div>
            <Row>
                <Col xs={11} sm={11} md={11} lg={5} xl={5} className="m-2" >
                    <div className="w-100 p-4 shadow rounded-20 bg-white guest-rules ">
                        <p className="font-fa fs-20 text-center p-2">شرایط مهمانی در دانشگاه ملایر</p>
                        <p className='my-4 mx-2 font-fa fs-15 p-1'>1. داشتن معدل بالای 16</p>
                        <p className='my-4 mx-2 font-fa fs-15 p-1'>2. داشتن دلیل موجه برای مهمان شدن</p>
                        <p className='my-4 mx-2 font-fa fs-15 p-1'>3. رضایت دانشگاه مبدا</p>
                        <p className='my-4 mx-2 font-fa fs-15 p-1'>4. دانشجو مبتلا به بیماری های لاعلاج باشد.</p>
                        <p className='my-4 mx-2 font-fa fs-15 p-1'>5. شرایط مهمانی فقط به دانشجویانی که ترم 8 نیستند تعلق میگیرد.</p>

                    </div>
                </Col>
                <Col xs={11} sm={11} md={11} lg={5} xl={5} className="m-2" >
                    <div className="w-100 p-4 shadow rounded-20 bg-white d-flex justify-content-center align-items-center flex-column">
                        <p className="font-fa fs-20 text-center p-2">اخبار آموزش دانشگاه</p>
                        <div className="amozesh-news ">
                            <ol>
                                <li className="font-fa mx-2 my-4 p-1 fs-15 text-primary">رئیس آموزش انصراف داد</li>
                                <li className="font-fa mx-2 my-4 p-1 fs-15 text-primary">استادان دانشگاه مخالف کلاس های مجازی شدند.</li>
                                <li className="font-fa mx-2 my-4 p-1 fs-15 text-primary">دانشجویان خواستار ارائه دروس بیشتری برای نیمسال شدند.</li>
                                <li className="font-fa mx-2 my-4 p-1 fs-15 text-primary">دروس اختیاری باید حذف شوند و به جای آن ها  کارگاه ها اضافه بشوند.</li>
                                <li className="font-fa mx-2 my-4 p-1 fs-15 text-primary">دانشجویان کامپیوتر دانشگاه ملایر موفق به هک ناسا شدند.</li>
                                <li className="font-fa mx-2 my-4 p-1 fs-15 text-primary">آموزش دانشگاه اجازه اخذ بیش از 18 واحد را نمیدهد.</li>
                            </ol>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="my-4">
                
                <Col className="bg-white rounded-20" xs="12" lg="6">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>نام درس</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mainLesson.map((i) =>
                                <tr>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    
                                </tr>
                            )}


                        </tbody>
                    </Table>
                </Col>
                <Col className="position-relative overflow-hidden" xs="12" lg="4" >
                    <div className="lesson-title">
                        kjgkujh
                        <span className="lesson-title2"></span>
                    </div>
                    
                </Col>
            </Row>

            {/* <Row className="w-100 mainLesson p-4 ">
                <p className="font-fa p-2 fs-20 text-center">رشته های تحصیلی موجود در دانشگاه ملایر</p>
                {mainLesson.map((i) =>
                    // <Col className="bg-white shadow p-4 font-fa fs-20 text-black rounded-20 text-center lesson-COL m-5 d-flex justify-content-center align-items-center" key={i.id} xs={12} sm={12} md={12} lg={4} xl={4} ><p>{i.name}</p></Col>
                    <Col xs={12} lg={3}>
                        <LessonUni {...i} />
                    </Col>
                )}
            </Row> */}
        </div>
    )
}

export default Main;