import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2'>
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Lates</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10 bg-base-200 p-2'>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam enim aspernatur, sit ullam similique optio ea nam,
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam enim aspernatur, sit ullam similique optio ea nam,
                </Link>
                <Link to="/news">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae totam enim aspernatur, sit ullam similique optio ea nam,
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;