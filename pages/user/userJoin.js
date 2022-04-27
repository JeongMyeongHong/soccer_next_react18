import UserJoin from '@/components/user/UserJoin'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userJoin } from '@/modules'

const UserJoinPage = () =>{
    const dispatch = useDispatch()
    const { form, auth, user} = useSelector( ({auth, user}) => ({
        auth: auth.auth,
        user: user.user, 
        authError: auth.authError, 
        form: auth.userJoin}) )
    const onSubmit = e =>{
        e.preventDefault()
        const { userid, password, email, name, phone, birth, address } = form
        alert(`1단계 : ${JSON.stringify(form)}`)
        dispatch( userJoin({ userid, password, email, name, phone, birth, address }))
    }

    const onChange = e =>{
        e.preventDefault()
    }

    return(<UserJoin onSubmit={onSubmit} onChange={onChange} form={form}/>)
}

export default UserJoinPage