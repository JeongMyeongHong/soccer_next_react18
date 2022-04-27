import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from '@/store/actions';
import { userActions } from '@/redux/reducers/userReducer.ts';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import {purple} from '@mui/material/colors';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});
const ColorButton = styled(Button)(({theme}) => ({
    color: theme
        .palette
        .getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700]
    }
}));

export default function Login() {

    const [loginInfo, setLoginInfo] =useState({ userid:'', password:'' })
    const dispatch = useDispatch()

    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setLoginInfo({...loginInfo,[name]: value})
    }

    const onHandleSubmit = e => {
        e.preventDefault();
        alert(`1. 로그인 눌렀음 ${JSON.stringify(loginInfo)}`);
        dispatch(login(loginInfo));
        // dispatch(userActions.loginRequest(loginInfo));
        // setLoginInfo({ userid:'', password:'' })
    }

    const onHandleCancle = e => {
        e.preventDefault();
        alert(`취소 눌렀음`);
        setLoginInfo({ userid:'', password:'' })
    }

  return (
    <form>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
            <TextField id="userid" name="userid" label="userid" variant="outlined" onChange={handleChange} />
            <TextField id="password" name="password" label="password" variant="outlined" onChange={handleChange} />
            </Stack>

            <Stack spacing={2} direction="row" style={{marginTop:"20px", float: "right"}}>
            <ColorButton variant="contained" style={{width:"200px"}} onClick={onHandleSubmit}>로그인</ColorButton>
            <BootstrapButton variant="contained" disableRipple="disableRipple" style={{width:"200px"}} onClick={onHandleCancle}> 취소 </BootstrapButton>
            </Stack>
        </LocalizationProvider>
    </form>
  );
}