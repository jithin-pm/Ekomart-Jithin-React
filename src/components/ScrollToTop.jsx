import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import './styles/ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            {isVisible && (
                <div className="scroll-to-top" onClick={scrollToTop} style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '45px',
                    height: '45px',
                    backgroundColor: '#629D23',
                    color: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 9999,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                }}>
                    <FaArrowUp />
                </div>
            )}
        </>
    )
}

export default ScrollToTop
