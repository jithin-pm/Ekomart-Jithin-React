import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderTopBar from '../components/Header/HeaderTopBar'
import HeaderSearchBar from '../components/Header/HeaderSearchBar'
import HeaderNavBar from '../components/Header/HeaderNavBar'
import MobileMenu from '../components/MobileMenu'
import HeaderMobile from '../components/Header/HeaderMobile'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import ScrollToTop from '../components/ScrollToTop'

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="demo-one">

            {/* Header - Style Two (index-three) */}
            <div className="rts-header-one-area-one header-style-two bg-primary-header">
                <HeaderTopBar />
                <HeaderSearchBar />
                <HeaderNavBar />
                <HeaderMobile setIsOpen={setIsOpen} />
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Scroll To Top */}
            <ScrollToTop />

            {/* Main Content */}
            <Outlet />

            {/* Footer */}
            <div>
                <Footer />
                <Copyright />
            </div>
        </div>
    )
}

export default MainLayout
