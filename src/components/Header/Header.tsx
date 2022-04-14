import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    Technical task
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;