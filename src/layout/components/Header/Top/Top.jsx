import {Box, Container} from "@mui/material";
import {Alert} from "@mui/lab";

import InfoItem from "./InfoItem";

function Top() {
    return (
        <Box component="header" className="main-header">
            <Alert icon={false} severity="success" sx={{
                justifyContent: 'center',
                borderRadius: 0,
                padding: '0',
                lineHeight: '1.4'
            }}>
                Giảm 5% khi đăng ký học 2 người - Giảm 5% khi đăng ký 2 khóa học
            </Alert>

            <Container>
                <Box className="grid">
                    <Box className="grid__item" sx={{alignItems: 'center'}}>
                        <Box component="h4" className="contact-title" sx={{margin: 0}}>
                            GỌI NGAY:
                        </Box>

                        <Box component="ul">
                            <Box component="li">
                                <InfoItem text={'0911321300'} />
                            </Box>

                            <Box component="li">
                                <InfoItem text={'0975458209'} />
                            </Box>
                        </Box>
                    </Box>

                    <Box className="grid__item">
                        <div className="fanpage">
                            <span className="text">Theo dõi chúng tôi trên</span>

                            <a className="link" href="https://www.facebook.com/khoahocuxui" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-facebook-f"></i>
                                <span>Fanpage</span>
                            </a>
                        </div>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Top