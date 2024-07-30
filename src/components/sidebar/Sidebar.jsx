import { useContext } from 'react'
import { darkModeContext } from '../../context/darkModeContext';
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { setDark}=useContext(darkModeContext)
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className='logo'>Dahsbord</span>
        </Link>
        <hr></hr>
      </div>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <Link to='/' style={{ textDecoration: "none" }}>
            <DashboardIcon  className='icon'/>
              <span>dashbord</span>
              </Link>
          </li>
          <p className='title'>LISTS</p>
          <li>
            <Link to='/users' style={{ textDecoration: "none" }}>
            <Person2OutlinedIcon  className='icon'/>
              <span>Users</span>
              </Link>
          </li>
          <li>
            <Link to='/products' style={{ textDecoration: "none" }}>
            <StoreOutlinedIcon  className='icon'/>
              <span>Products</span>
              </Link>
          </li>
          <li>
            <GradingOutlinedIcon  className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon  className='icon'/>
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <QueryStatsIcon  className='icon'/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon  className='icon'/>
            <span>Notificatins</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <HealthAndSafetyIcon  className='icon'/>
            <span>System Health</span>
          </li>
          <li>
          <PsychologyIcon  className='icon'/>
            <span>logs</span>
          </li>
          <li>
            <SettingsIcon className='icon'/>
            <span>Setting</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <PersonOutlineIcon  className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon  className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div onClick={()=>{setDark(false)}} className='colorOption'></div>
        <div onClick={()=>{setDark(true)}} className='colorOption'></div>
      </div>
    </div>
  )
}

export default Sidebar