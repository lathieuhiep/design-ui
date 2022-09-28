import {Container} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

function Top() {
    return (
        <header className="main-header">
            <Container>
                <div className="grid">
                    <div className="grid__item">
                        <div className="info address">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="text">988782, Our Street, S State</span>
                        </div>

                        <div className="info address">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="text">988782, Our Street, S State</span>
                        </div>

                        <div className="info address">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="text">988782, Our Street, S State</span>
                        </div>
                    </div>

                    <div className="grid__item">
                        abc
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Top