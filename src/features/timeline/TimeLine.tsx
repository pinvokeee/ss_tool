import { useEditData } from "../../hooks/useEditData"

export const TimeLine = () =>
{
    const editData = useEditData();

    return <>
        {editData.title}
    </>
}