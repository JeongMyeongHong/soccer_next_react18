import * as UserType from '../types'

export const addUser = (user) => {
    return {
        type: UserType.USER_ADD_REQUEST,
        payload: user
    }
}
export const fetchUsers = () => {
    return {
        type: UserType.USER_FETCH_REQUEST
    }
}
export const updateUser = (user) => {
    return {
        type: UserType.USER_UPDATE_REQUEST,
        payload: user
    }
}
export const delUser = (userid) => {
    return {
        type: UserType.USER_DELETE_REQUEST,
        payload: user
    }
}