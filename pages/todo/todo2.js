import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import{ todoActions } from '../../redux/reducers/todoReducer.ts'

export default function AppTasks() {
  const [values, setValues] = useState({userid:'', task:'', complete: 'not completed'})
  const dispatch = useDispatch()
  const handleChange = e =>{
    e.preventDefault()
    const{name, value} = e.target;
    setValues({...values,[name]: value})
}
  return (
     <div className="todoapp stack-large">
      <h1>일정 등록</h1>
      <form onSubmit={e => {
        e.preventDefault()
        alert('진행 1 : 일정 등록'+JSON.stringify(values))
        dispatch(todoActions.addRequest(values))
        setValues({ userid:'', task:'', complete: 'not completed' })
      }}>
      <label htmlFor=""><b>아이디 </b></label>
      <input type="text" name='userid' onChange={handleChange}/><br />

      <label htmlFor=""><b>할 일 </b></label>
      <input type="text" name='task
      ' onChange={handleChange} autoComplete="off"/><br />

      <label htmlFor=""><b>완료여부</b></label>
      <input type="checkbox" name='complete' value="completed" onChange={handleChange}/>

        <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      {/** 
    <h2 id="list-heading">
        3 tasks remaining
      </h2>
    
      
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input  id="todo-0" type="checkbox" defaultChecked={false} onChange={()=>{
              setCheck(!check)
            }}/>
            <label className="todo-label" htmlFor="todo-0">
              운동 24시간 하기
            </label>
            { check ? <Image class="rotate-center"
            style={{ visibility: "visible", float: "right" }}
            src="/vercel.svg" width="64" height="64"  />
            :<Image
            style={{ width: '6%', visibility: "hidden", float: "right" }}
            src="/vercel.svg" width="64" height="64"  />}
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>
      </ul>
    */}
    </div>
  );
}