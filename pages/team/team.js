import style from "../board/styles/board-form.module.css"
import { useState } from "react";

export default function Team(){
    const [inputs, setInputs] = useState({})
    const {passengerId, name, teamId, subject} = inputs

    const onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const request = {passengerId, name, teamId, subject}
        alert(`등록할 게시글 : ${JSON.stringify(request)}`)
    }
    return (<>
        <h1>팀 등록</h1>
        <div className={style.container}>
            <form action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">게시글 작성자 ID</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="passengerId" name="passengerId" onChange={onChange} placeholder="게시글 작성자 ID 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={onChange} placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col75}>
                <select onChange={onChange} id="teamId" name="teamId">
                    <option value="">응원팀 선택</option>
                    <option value="K09" defaultValue>Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <textarea  id="subject" name="subject" onChange={onChange} style={{height:200 + "px"}}></textarea>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" onClick={handleSubmit} className={style.inputSubmit}
                value="Submit"/>
            </div>
            </form>
            </div>
    </>)
}