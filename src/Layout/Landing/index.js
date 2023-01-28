
import './index.scss'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'

const LandingLayout = () => {

    
    return (
        <div className="Landing">
            <Header />
            <main className="py-3">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default LandingLayout;