import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Avatar, IconButton } from '@material-ui/core';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const Header = () => {

    const user = useSelector(selectUser);


    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Facebook logo" />
            </div>

            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder='Search Facebook' />
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize='large' />
                </div>
                <div className="header__option header__optionn ">
                    <FlagIcon fontSize='large' />
                </div>
                <div className="header__option header__optionn ">
                    <SubscriptionsOutlinedIcon fontSize='large' />
                </div>
                <div className="header__option header__optionn ">
                    <StorefrontOutlinedIcon fontSize='large' />
                </div>
                <div className="header__option header__optionn ">
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photo} onClick={() => auth.signOut()} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
