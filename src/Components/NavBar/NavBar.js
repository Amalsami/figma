import { AppBar, Box, Container, InputBase, Toolbar } from "@mui/material";
import React from "react";
import logo from "../../Assets/Images/SHOP.CO.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
import styled from "@emotion/styled";
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
export default function NavBar() {
    return (
        <AppBar className="nav" position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters >
                    <img src={logo} alt="logo" />
                    <Box className="links">
                        <Link to="onSale">On Sale</Link>
                        <Link to="newArrival">new Arrival</Link>
                        <Link to="Brands">Brands</Link>
                    </Box>
                    <Box >
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
