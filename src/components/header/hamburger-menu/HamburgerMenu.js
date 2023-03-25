import React, { useState } from 'react';
import {
    Button, IconButton, Dialog, DialogContent, Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './hamburger-menu.module.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                {open ? <CloseIcon className={styles['menu-icon']}/> 
                : <MenuIcon className={styles['menu-icon']}/> }
            </IconButton>
            <Dialog
                fullScreen
                scroll='body'
                className={styles.wrapper}
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                BackdropProps={{
                    style: {
                        backgroundColor: 'transparent'
                    },
                }}
            >
                <DialogContent className={styles.content}>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">Home</Button>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">Services</Button>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">Blog</Button>
                    <Button
                        className={styles['nav-button-text']}
                        variant="text">About</Button>
                    <Button
                        className={styles['nav-button-last']}
                        variant="text" sx={{ borderBottom: 'none' }}>Agency</Button>
                    <Button
                        className={styles['nav-button-contained']}
                        variant="contained">Get in touch</Button>
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default HamburgerMenu