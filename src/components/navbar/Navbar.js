import React from 'react';
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import {useDispatch, useSelector} from 'react-redux'
import {toggleDarkMode} from "../../features/darkMode";

const Navbar = () => {

    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.darkMode.darkMode)

    return (
        <div className='navbar'>
            <div className="wrapper">

                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchOutlinedIcon />
                </div>

                <div className="items">
                    <div className="item">
                        <GTranslateOutlinedIcon className='icon' />
                        English
                    </div>

                    <div className="item">
                        {
                            darkMode?
                                <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch(toggleDarkMode(!darkMode))} />
                                :
                                <Brightness5OutlinedIcon className='icon' onClick={()=>dispatch(toggleDarkMode(!darkMode))} />
                        }
                    </div>

                    <div className="item">
                        <CropFreeOutlinedIcon className='icon' />
                    </div>

                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>

                    <div className="item">
                        <ForumOutlinedIcon className='icon' />
                        <div className="counter">3</div>
                    </div>

                    <div className="item">
                        <ListOutlinedIcon className='icon' />
                    </div>

                    <div className="item">
                        <img
                            src="https://www.pngitem.com/pimgs/m/137-1370558_mario-avatar-hd-png-download.png"
                            alt="avatar"
                            className='avatar'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
