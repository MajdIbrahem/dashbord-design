import { useContext } from 'react'
import { darkModeContext } from '../../context/darkModeContext';
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const Navbar = () => {
  const { dark,setDark}=useContext(darkModeContext)
  return (
    <div className='navbar'>
      <div className='wrraper'>
        <div className='search'>
          <input type='text' placeholder='Serach...'></input>
          <SearchOutlinedIcon/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className='item' onClick={()=>{setDark(!dark)}}>
            <DarkModeOutlinedIcon  className='icon'/>
          </div>
          <div className='item'>
            <FullscreenOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <FormatListBulletedOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s'
              className='avatar'
              alt=''
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar