import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import LogoDev from "@mui/icons-material/LogoDev";
import { Menu, MenuItem, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MODE } from "../../constant/mode";
import Login from "../../feature/Auth/components/Login";
import Fade from "@mui/material/Fade";
import Register from "../../feature/Auth/components/Register";
import { logout } from "../../feature/Auth/userSlice";

const useStyles = makeStyles({
    logo: {
        cursor: "pointer",
        marginRight: "10px",
    },
    link: {
        cursor: "pointer",
        color: "white",
        textDecoration: "none",
        fontWeight: "bolder",
    },
});

function Header() {
    const dispatch = useDispatch()
    const classes = useStyles();
    const loggedInUser = useSelector((state) => state.user.currentUser);
    const isLoggedIn = !!loggedInUser?.id;
    const [mode, setMode] = React.useState(MODE.LOGIN); // mode default is Login
    const [open, setOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openUserMenu = Boolean(anchorEl);

    // Dialog Event
    const handleOpenDialog = () => {
        setOpen(true);
    };
    const handleCloseDialog = () => {
        setOpen(false);
    };

    //  Sub menu event
    const handleOpenUserMenu = (event) => {
        // set anchor element === itsefl
        setAnchorEl(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };

    //  Logout handled
    const handleLogoutUser = () => {
        const action = logout()
        dispatch(action)
        setAnchorEl(null)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ ml: 4, mr: 4 }}>
                    <LogoDev className={classes.logo} />
                    <Typography variant="h6" component="h4" sx={{ flexGrow: 1 }}>
                        <Link className={classes.link} to="/">
                            LINDEV
                        </Link>
                    </Typography>
                    {!isLoggedIn && (
                        <Button
                            sx={{ fontWeight: "bold", letterSpacing: "1px" }}
                            onClick={handleOpenDialog}
                            color="inherit"
                        >
                            LOGIN
                        </Button>
                    )}
                    {isLoggedIn && (
                        <Button onClick={handleOpenUserMenu} >
                            <AccountCircleTwoToneIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            ></AccountCircleTwoToneIcon>
                            <Typography
                                sx={{ color: "white", textTransform: "capitalize", ml: 1 }}
                            >
                                {loggedInUser.fullName}
                            </Typography>
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
            {/*  Sub Menu */}

            <Menu
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                open={openUserMenu}
                onClose={handleCloseUserMenu}
                TransitionComponent={Fade}
            >
                <MenuItem sx={{ minWidth: 100 }} onClick={handleCloseUserMenu}>Profile</MenuItem>
                <MenuItem sx={{ minWidth: 100 }} onClick={handleLogoutUser}>Logout</MenuItem>
            </Menu>
            {/*  Sub Menu */}

            {/* Modal */}
            <Dialog open={open}>
                <CloseIcon
                    sx={{
                        position: "absolute",
                        right: "30px",
                        top: "10px",
                        fontSize: "30px",
                        cursor: "pointer",
                    }}
                    onClick={handleCloseDialog}
                />

                <DialogContent>
                    {/* Show component Form Register inside. */}
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleCloseDialog} />
                            <Box textAlign="center">
                                <Button
                                    sx={{ textTransform: "capitalize", letterSpacing: "1px" }}
                                    color="primary"
                                    onClick={() => setMode(MODE.LOGIN)}
                                >
                                    Already have an account.Login here 👋.
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleCloseDialog} />
                            <Box textAlign="center">
                                <Button
                                    sx={{ textTransform: "capitalize", letterSpacing: "1px" }}
                                    color="primary"
                                    onClick={() => setMode(MODE.REGISTER)}
                                >
                                    You don't have an account.Register now 👋.
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
            </Dialog>
            {/* Modal */}
        </Box >
    );
}

export default Header;
