import Header from "./components/Header";
import {Container} from "@mui/material";
import Footer from "./components/Footer";

function Layout({ children }) {
    return (
        <div className="warp">
            <Header />

            <div className="sticky-footer">
                <div className="page-content">
                    <Container>
                        <div className="content">
                            {children}
                        </div>
                    </Container>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Layout