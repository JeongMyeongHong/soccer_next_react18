import tableStyles from '@/styles/Table.module.css'

export default function UserList({ useEffect, form}) {

    const columns = [
        "사용자ID",
        "이름",
        "이메일",
        "전화번호",
        "생년월일",
        "주소"
    ];

    return <form>
                <table className={tableStyles.table}>
                    <thead>
                        <tr>
                            <th colSpan={6}><h1>회원목록</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {columns.map((column, index) => ( <td key={index} >{column}</td> ))}
                        </tr>
                        { data.length == 0  ?
                            <tr>
                                <td colSpan={6} >데이터가 없습니다</td>
                            </tr>
                        :data.map((form) => (
                            <tr key={form.userid}>
                                <td>
                                    <Link href={{pathname:`/user/[userid]`,
                                    query:{selectedUser: 'test'}}} as={`/user/${form.userid}`}>
                                    <a>{form.userid}</a>
                                    </Link>
                                </td>
                                <td>{form.name}</td>
                                <td>{form.email}</td>
                                <td>{form.phone}</td>
                                <td>{form.birth}</td>
                                <td>{form.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
}
