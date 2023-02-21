import { styled } from "@mui/material"
import { useEditData } from "../../hooks/useEditData";
import { jobDataLoader } from "../../loader/jobDataLoader";
import { AppHeader } from "../apptoolbar/AppHeader";
import { TimeLine } from "../timeline/TimeLine";
import { EditContainer } from "./EditContainer";

const Content = styled("div")(({theme}) =>
(
    {
        display: "grid",
        width: "100vw",
        height: "100vh",
        gridTemplateRows: "auto 1fr",
    }
));

const Container = styled("div")(({theme}) =>
(
    {
        display: "grid",
        width: "100%",
        gridTemplateColumns: "auto minmax(0, 1fr)",
    }
));

export const MainContainer = () =>
{

    // const j = jobDataLoader();
    
    return <>
    <Content>
        <AppHeader></AppHeader>
        <Container>
            {/* <TimeLine></TimeLine> */}
            <EditContainer></EditContainer>
        </Container>
    </Content>
    </>
}