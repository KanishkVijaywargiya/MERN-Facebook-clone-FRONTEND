import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel' >
            <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc='https://p73.f4.n0.cdn.getcloudapp.com/items/eDuPn4lR/rn.png?v=535d68bdc4b042532f723ede82dfbffb'
                title='Kanishk Vijaywargiya'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc='https://avatars3.githubusercontent.com/u/43421834?s=400&u=3d8164efe186a5248c2cb68b6f5e5c6806c87a76&v=4'
                title='Manas Vijaywargiya'
            />
            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc='https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg'
                title='Dr. MERN'
            />
        </div>
    )
}

export default StoryReel