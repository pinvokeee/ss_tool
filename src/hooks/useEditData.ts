import { useRecoilState } from "recoil";
import { atomTitle } from "../atom/atom";

type UseEditData =
{
    title: string, 
    setTitle: (value: string) => void,
}

export const useEditData = () : UseEditData =>
{
    const [title, setTitle] = useRecoilState(atomTitle);

    return {
        title, setTitle,
    }
}