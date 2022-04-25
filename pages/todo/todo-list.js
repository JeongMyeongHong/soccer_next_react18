import tableStyle from "../common/styles/table.module.css"
import {useState, useEffect} from 'react'
import axios from "axios"

const Table = ({ columns, data }) =>(
    <div>
        <table className={tableStyle.table}>
            <thead>
                <tr className={tableStyle.tr}>
                    {columns.map((column, index) => <th key={index} className={tableStyle.td}>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                    { data.length == 0  ?<tr className={tableStyle.tr}>
                                      <td className={tableStyle.td} colSpan={columns.length}>일정이 없습니다</td>
                                      </tr>
                        :data.map((todo) => (
                        <tr className={tableStyle.tr}  key={todo.task} >
                        <td className={tableStyle.td}>{todo.task}</td>
                        </tr>))
                    }
            </tbody>
        </table>
    </div>)

export default function TodoList(){
    const columns = ['아이디', '일정']
    const [data, setData] = useState([])
    const proxy = 'http://localhost:5000'

    useEffect( () => {
        axios.get(proxy+'/api/todo/list')
        .then(res => {setData(res.data.todos)})
        .catch(err => {})
    } , [] )
    return(<div>
        <h1>스케줄목록</h1> 
        {data.length !=0 && <h3>해야할일 : {data.length} 개</h3>}
        <div className={tableStyle.td}>
        <Table columns={columns} data={data}/>
        </div>
    </div>)
}


