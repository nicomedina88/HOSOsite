import FooterBar from "./FooterBar/FooterBar";
import NavBar from "./NavBar/NavBar";


const LayoutPrivado = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <FooterBar />
        </>
    )
}

export default LayoutPrivado;