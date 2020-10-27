import React, { useEffect, useState } from 'react'
import './Feed.css'

import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

const Feed = () => {

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            <Post
                profilePic='https://p73.f4.n0.cdn.getcloudapp.com/items/eDuPn4lR/rn.png?v=535d68bdc4b042532f723ede82dfbffb'
                message='Hello People!'
                timestamp='time'
                imgName='imgName'
                username='Nameless Order'
            />

            {/* {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            } */}
        </div>
    )
}

export default Feed