import UserList from "@/components/user/UserList";
import React from "react";
import { useSelector } from 'react-redux'

const UserListPage =()=>{
    const form = useSelector()
    return(<UserList useEffect={useEffect} form={form}/>)
}

export default UserListPage