import React from 'react'
import WelcomeImage from '@/../public/Assets/scandinavian-cozy-room.png'
import Image from "next/image";
import SectionCategories from './SectionCategories';
import SectionProducts from './SectionProducts';

const HomePage = () => {
    return (
        <div className="flex flex-col gap-20">
            <section>
                <Image
                    src={WelcomeImage}
                    alt='scandinavian cozy room'
                    className='object-cover w-screen sm:max-w-[100%]'
                />
                <div className="bg-primary-foreground w-[30rem] p-5 absolute right-[5rem] top-[20rem]">
                    <h4 className="text-xs">New Arrival</h4>
                    <h2 className="text-4xl font-semibold text-primary tracking-wider">Discover Out<br />New Collection</h2>
                    <h3 className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h3>
                </div>
            </section>
            <SectionCategories />
            <SectionProducts />
        </div>
    )
}

export default HomePage