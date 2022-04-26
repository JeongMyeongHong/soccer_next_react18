import React,{useState, useEffect} from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Router from "next/router";

import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createSvgIcon } from '@mui/material/utils';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

const preSettings = {subTitles: ['회원가입', '로그인'], urls: ["/user/join","/user/login"]};
const postSettings = {subTitles: ["프로필", "정보수정", "로그아웃" , "회원탈퇴"], urls: ["/user/profile", "/user/modifyUser", "/user/logout", "/user/delUser"]};
const basicSettings = {subTitles: ['카운터', '계산기', 'BMI', '게시판'], urls: ["/basic/counter","/basic/calc","/basic/bmi", '/board/list']};
export function Nav(){
  const [userUrls, setUserUrls] = useState([])
  const [userSubTitle, setUserSubTitle] = useState([])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  

  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser")
    if (loginUser === null) {
      setUserUrls(["/user/join","/user/login"])
      setUserSubTitle(["회원가입","로그인"])
    } else {
      setUserUrls(["/user/logout","/user/profile","/user/modifyUser","/user/delUser","user/getUsers"])
      setUserSubTitle(["로그아웃","프로필","회원수정","회원탈퇴","회원목록"])
    }
  }, [])

  const basicUrls = ["/basic/counter","/basic/calc","/basic/bmi"]
  const basicSubTitle = ["카운터","계산기","BMI"]
  // const userUrls = ["/user/join","/user/login","/user/logout","/user/profile","/user/updUser","/user/withdrawUser","user/getUsers"]
  // const userSubTitle = ["회원가입","로그인","로그아웃","프로필","회원수정","회원탈퇴","회원목록"]
  const todoUrls = ["/todo/addTodo","/todo/getTodos","/todo/modifyTodo","/todo/removeTodo"]
  const todoSubTitle = ["할일등록","할일목록","할일수정","할일삭제"]
  const gameUrls = ["/game/addGame","/game/getGames","/game/modifyGame","/game/removeGame"]
  const gameSubTitle = ["게임등록","게임목록","게임수정","게임삭제"]
  const teamUrls = ["/team/addTeam","/team/getTeams","/team/modifyTeam","/team/removeTeam"]
  const teamSubTitle = ["팀등록","팀목록","팀수정","팀삭제"]
  const boardUrls = ["/board/writeArticle","/board/getArticles","/board/modifyArticle","/board/removeArticle"]
  const boardSubTitle = ["글등록","글목록","글수정","글삭제"]


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <Box
          sx={{
            '& > :not(style)': {
              m: 2,
            },
          }}
        >
          <a href='/'><HomeIcon /><HomeIcon color="primary" /></a>
        </Box>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {basicSettings.urls.map((urls, i) => (
              <MenuItem key={i} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center"><Link href={urls}>{basicSettings.subTitles[i]}</Link></Typography>
                </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="sign">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://as2.ftcdn.net/v2/jpg/01/85/61/65/1000_F_185616556_uCc1J5d5GNfRH6ErgP1G8x8ORLeG25en.jpg"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {preSettings.urls.map((urls, i) => (
                <MenuItem key={i} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link href={urls}>{preSettings.subTitles[i]}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="users">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar.png"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {postSettings.urls.map((urls, i) => (
                <MenuItem key={i} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"><Link href={urls}>{postSettings.subTitles[i]}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
              </Box>*/}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
// const SubMenu = (props) => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return <>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}>
//         {props.title}
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//          {props.urls.map(function(url, i){
//             return <MenuItem onClick={handleClose} key={i}><Link href={url} >{props.subTitles[i]}</Link></MenuItem>
//           })}
//       </Menu></>
// }