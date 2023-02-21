import { Box, styled, TextField } from "@mui/material";
import { useEditData } from "../../hooks/useEditData";


const SplitBox = styled("div")(({theme})=> 
(
    {
        display: "flex",
        justifyContent: "stretch",
        width: "100%",
    }
));

const Case = styled("div")(({theme})=> 
(
    {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        justifyContent: "space-between",
        width: "100%",
        padding: "6px",
    }
));

const FormLabel = styled("div")(({theme})=> 
(
    {
        textAlign: "left",
        fontWeight: "bold",
        backgroundColor: "#e3f2fd",
        padding: "6px",
        borderLeft: "solid 6px #90caf9",
        userSelect: "none",
    }
));

export const EditContainer = () =>
{
    const editData = useEditData();

    return <Box>
        <SplitBox>
            <Case>
                <FormLabel>1.タイトル</FormLabel>
                <TextField fullWidth value={editData.title} onChange={(e) => editData.setTitle(e.target.value) }></TextField>
            </Case>
        </SplitBox>
        
        <SplitBox>
            <Case>
                <FormLabel>2.職種</FormLabel>

            </Case>
            <Case>
                <FormLabel>TIPS</FormLabel>
            </Case>
        </SplitBox>

        <SplitBox>
            <Case>
                <FormLabel>3.内容</FormLabel>
            </Case>
            <Case>
                <FormLabel>4.フリー入力</FormLabel>
                <TextField placeholder="Enterで改行" multiline fullWidth></TextField>
            </Case>
        </SplitBox>

        <SplitBox>
            <Case>
                <FormLabel>5.退職理由</FormLabel>
                <TextField placeholder="Enterで改行" multiline fullWidth></TextField>
            </Case>
        </SplitBox>

    </Box>
}