import Header from "./Header/Header.jsx";
import Footer from './Footer/Footer.jsx'

function LayoutPublico ({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default LayoutPublico;