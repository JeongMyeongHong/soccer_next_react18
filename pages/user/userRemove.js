import UserRemove from "@/components/user/UserRemove";
import React from "react";
import { useSelector } from "react-redux";

const UserRemovePage =()=>{
    const form = useSelector()
    return(<UserRemove onSubmit={onSubmit} onChange={onChange} form={form}/>)
}

export default UserRemovePage