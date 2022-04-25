import axios from "axios"
import { useEffect, useState } from "react"

const Table = ({data}) =>(
    <Table>
        <thead>
            <tr>
                <th>일정</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                {data.length == 0 ? <tr>
                                        <td>할일이 없습니다.</td>
                                    </tr>
                :data.map((todo) => (<tr key={todo_id}>
                    <td>{todo.task}</td>
                    </tr>))
            }
            </tr>
        </tbody>
    </Table>
)

export default function TodoList2(){
    const [data, setData] = useState([])
    const proxy = 'http://localhost:5000'
    useEffect(()=>{
        axios.get(proxy+'/api/todo/list')
        .then(res => {setData(res.data.todos)})
        .catch(err => {})
    }, [])
    return(
        <div><h1>스케줄</h1>
            <Table data={data}/>
        </div>
    )
}