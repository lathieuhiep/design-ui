import {Container} from "@mui/material";

import SocialNetwork from "~/components/socialNetwork";

function Top() {
    return (
        <header className="main-header">
            <Container>
                <div className="grid">
                    <div className="grid__item">
                        <div className="info">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="text">988782, Our Street, S State</span>
                        </div>

                        <div className="info">
                            <i className="fa-solid fa-envelope"></i>
                            <span className="text">info@domain.com</span>
                        </div>

                        <div className="info">
                            <i className="fa-solid fa-mobile-screen"></i>
                            <span className="text">+1 234 567 18</span>
                        </div>
                    </div>

                    <div className="grid__item">
                        <SocialNetwork />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Top