import FooterBar from "./FooterBar/componentes/FooterBar";
import NavBar from "./NavBar/componentes/NavBar";

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