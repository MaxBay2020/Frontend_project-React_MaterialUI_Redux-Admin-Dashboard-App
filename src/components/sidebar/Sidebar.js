import React from 'react';
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {toggleDarkMode} from '../../features/darkMode'

const Sidebar = () => {

    const dispatch = useDispatch()

    return (
        <div className='sidebar'>
            <Link to='/'>
                <div className="top">
                    <span className="logo">Max admin</span>
                </div>
            </Link>
            <hr/>

            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/'>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className="title">LISTS</p>
                    <Link to='/users'>
                        <li>
                            <SupervisedUserCircleOutlinedIcon className='icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products'>
                        <li>
                            <CategoryOutlinedIcon className='icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to='/orders'>
                        <li>
                            <SummarizeOutlinedIcon className='icon' />
                            <span>Orders</span>
                        </li>
                    </Link>
                    <Link to='/deliveries'>
                        <li>
                            <LocalShippingOutlinedIcon className='icon' />
                            <span>Delivery</span>
                        </li>
                    </Link>

                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentOutlinedIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafetyOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li>
                        <StickyNote2OutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <ManageAccountsOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch(toggleDarkMode(false))} />
                <div className="colorOption" onClick={()=>dispatch(toggleDarkMode(true))} />
            </div>
        </div>
    );
};

export default Sidebar;
