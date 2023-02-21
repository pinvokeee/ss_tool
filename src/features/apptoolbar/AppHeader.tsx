import { AppBar, Box, styled, Toolbar } from "@mui/material";

const AppToolBar = styled(AppBar)(({theme}) =>
(
    {
        width: "100vw",
        position: "static",
    }
));

export const AppHeader = () =>
{
    
    return <>
        <Box>
            <AppToolBar elevation={0}>
                <Toolbar>
                    adawdwa
                </Toolbar>
            </AppToolBar>
        </Box>
     </>;
}