import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export interface BoardType{
    title: string;
    name: string;  
    subject: string;
    contents: string;  
}

export const postBoard = async (payload: 
    { title: string;
        name: string;  
        subject: string;
        contents: string; })=> {
        try{
            const response:  AxiosResponse<unknown, BoardType[]> = await axios.post(`${SERVER}/board/write`,payload, { headers})
            alert(` 진행 5 : 응답 성공 ${JSON.stringify(response.data)}`)
            return response.data
        }catch(error){

        }}
                    