import React, {useState, useEffect} from 'react'
import tableStyles from '../common/styles/table.module.css'
import axios from "axios"


export default function GetTodo() {
    const columns = ['아이디', '일정']
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/get').then(res=>{
          setData(res.data.todos)
        }).catch(err=>{})
      },[])

  return (
    <table className={tableStyles.table}>
    <thead>
        <tr>
            <th colSpan={columns.length}><h2>Todo List</h2></th>
        </tr>
        
    </thead>
    <tbody>
         <tr>
            {columns.map((column, index) => <th key={index} className={tableStyles.td}>{column}</th>)}
        </tr>
        {data.length == 0  ? 
            <tr>
                <td colSpan={columns.length}>일정이 없습니다</td>
            </tr>
        :data.map((todo) => (
            <tr key={todo._id} >
                <td>{todo.userid}</td>
                <td>{todo.task}</td>
            </tr>))}
    </tbody>
    </table>
  );
}