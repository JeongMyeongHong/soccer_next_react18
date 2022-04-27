import UserProfile from "@/components/user/UserProfile";
import React from "react";
import { useSelector } from "react-redux";

const UserProfilePage =()=>{
    const form = useSelector()
    return(<UserProfile onSubmit={onSubmit} onChange={onChange} form={form}/>)
}

export default UserProfilePage