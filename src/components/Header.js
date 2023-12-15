import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
    // return an AppBar with a Toolbar that displays the title
    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6">Contact Management System</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;