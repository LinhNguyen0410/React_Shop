import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CloseIcon from "@mui/icons-material/Close";
import GppBadOutlinedIcon from "@mui/icons-material/GppBadOutlined";
import { Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Fade from "@mui/material/Fade";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MODE } from "../../constant/mode";
import Login from "../../feature/Auth/components/Login";
import Register from "../../feature/Auth/components/Register";
import { logout } from "../../feature/Auth/userSlice";
import SearchFilters from "../../feature/Products/components/Filters/SearchFilters";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MiniCart from "../../feature/Cart/components/MiniCart";
import { showMiniCart } from "../../feature/Cart/cartSlice";
import { cartItemCount } from "../../feature/Cart/selectors";

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
    const dispatch = useDispatch();
    const classes = useStyles();
    const loggedInUser = useSelector((state) => state.user.currentUser);
    const isLoggedIn = !!loggedInUser?.id;
    const [mode, setMode] = React.useState(MODE.LOGIN); // mode default is Login
    const [open, setOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openUserMenu = Boolean(anchorEl);

    const quantity = useSelector(cartItemCount)
    //  using selector.js get count all product


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
        const action = logout();
        dispatch(action);
        setAnchorEl(null);
    };

    const handleShowMiniCart = () => {
        dispatch(showMiniCart())
    }


    return (
        <Box id='top' sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar sx={{ ml: 4, mr: 4, height: '80px' }}>
                    <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                        <Link className={classes.link} to="/">
                            <img
                                style={{ width: "100px" }}
                                src="https://salt.tikicdn.com/assets/img/image.svg"
                                alt=""
                            />
                        </Link>
                        <SearchFilters />
                    </Box>
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
                        <Button onClick={handleOpenUserMenu}>
                            <Typography
                                sx={{
                                    backgroundColor: "white",
                                    color: "black",
                                    padding: "7px 15px",
                                    borderRadius: "45%",
                                    fontWeight: "bold",
                                }}
                            >
                                {loggedInUser.fullName.charAt(0)}
                            </Typography>
                            <Typography
                                sx={{ color: "white", textTransform: "capitalize", ml: 1 }}
                            >
                                {loggedInUser.fullName}
                            </Typography>
                        </Button>
                    )}

                    <Box sx={{ position: 'relative' }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleShowMiniCart}>
                            <Badge badgeContent={quantity} color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <MiniCart />
                    </Box>

                </Toolbar>

            </AppBar>
            {/*  Sub Menu */}
            <Menu
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                anchorEl={anchorEl}
                open={openUserMenu}
                onClose={handleCloseUserMenu}
                TransitionComponent={Fade}
            >
                <MenuItem
                    sx={{
                        width: 120,
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        p: 0,
                    }}
                    onClick={handleCloseUserMenu}
                >
                    <AccountBoxOutlinedIcon />
                    <Typography> Profile</Typography>
                </MenuItem>
                <MenuItem
                    sx={{
                        width: 120,
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        p: 0,
                        mt: 1,
                    }}
                    onClick={handleLogoutUser}
                >
                    <GppBadOutlinedIcon />
                    <Typography> Logout</Typography>
                </MenuItem>
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
        </Box>
    );
}

export default Header;
