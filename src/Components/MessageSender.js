import { Avatar, Input } from '@material-ui/core';
import React, { useState } from 'react';

import './MessageSender.css';

import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'


function MessageSender() {

    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        console.log('submit');
    }

    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src='https://p73.f4.n0.cdn.getcloudapp.com/items/eDuPn4lR/rn.png?v=535d68bdc4b042532f723ede82dfbffb' />

                <form>
                    <input
                        type="text"
                        className='messageSender__input'
                        placeholder="What's on your mind? ${user.displayName}"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Input
                        type="file"
                        className='messageSender__fileSelector'
                        onChange={handleChange}
                    />
                    <button
                        onClick={handleSubmit}
                        type='submit' >Hidden Submit</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender