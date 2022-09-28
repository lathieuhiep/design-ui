import Header from "./components/Header";
import {Container} from "@mui/material";

function Layout({ children }) {
    return (
        <div className="warp">
            <Header />

            <div className="sticky-footer">
                <Container>
                    <div className="content">
                        {children}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Layout