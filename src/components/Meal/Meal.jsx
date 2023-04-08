import React from 'react';

const Meal = ({meal}) => {
    const {title, thumbnailUrl} = meal;
    return (
        <div className='single-meal-item border-2 border-[rgb(252,221,198)] rounded-md text-center p-[20px]'>
            <img className='w-full mb-[20px]' src={thumbnailUrl} alt="" />
            <h2 className='text-2xl font-bold leading-[1]'>{title}</h2>
            <button className='px-[30px] py-[10px] bg-[#df9862] text-white rounded-[30px] mt-[20px] hover:bg-[#e57f31]'>More</button>
        </div>
    );
};

export default Meal;