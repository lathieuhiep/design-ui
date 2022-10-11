import {useState} from "react";
import {Box, Button, Fade, Modal, Typography} from "@mui/material";

import './RegisterCourseModal.scss';

function RegisterCourseModal({
    txtBtn = 'Đăng kí học ngay',
    classIcon = 'fa-solid fa-arrow-right',
    showNote = false,
    ...propsBox
}) {
    const [open, setOpen] = useState(false)

    // handle open modal
    const handleOpen = () => {
        setOpen(true)
    }

    // handel close modal
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <Box className="register-course-modal" {...propsBox}>
            <Button className="btn-show" variant={"contained"} onClick={handleOpen}>
                {txtBtn}
                {classIcon && <i className={classIcon}></i>}
            </Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>

                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

            {showNote && (
                <Box className="note-warp" sx={{mt: 2}}>
                    <span className="label">Lưu ý: </span>
                    <span className="describe">Tất cả các lịch học đều được học vào buổi tối </span>
                </Box>
            )}
        </Box>
    )
}

export default RegisterCourseModal