import React from 'react';
import { useLoaderData } from 'react-router-dom';
const MealDetails = () => {
    const meal = useLoaderData();
    const {id , title, thumbnailUrl} = meal;
    const dummyImg = 'https://thumbs.dreamstime.com/b/wooden-table-food-top-view-cafe-102532611.jpg';


    return (
        <div>
            <div className="breadcrumb-area bg-[#FAEDE3] p-[120px]">
                <h2 className='text-[80px] font-extrabold text-center'>Details</h2>
            </div>

            <div className="content-area py-[100px]">
                <div className="container mx-auto text-center">
                    <img className='w-full h-[350px] rounded-xl object-cover mb-[30px]' src={dummyImg} alt="" />
                    <h2 className='text-xl font-bold'>Post id : {id}</h2>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptatibus quisquam aliquam, ipsam officiis ea delectus quidem ut explicabo ratione animi facilis ipsa tempora voluptate eos debitis doloremque iure nostrum rerum obcaecati tenetur inventore magni quod dolor! In quibusdam eligendi doloremque eius sapiente expedita doloribus laborum, velit cupiditate rem quia.</p>

                    <button className='px-[30px] py-[10px] bg-[#3B82F6] font-bold text-white mt-7 rounded-md'>Back</button>
                </div>
            </div>

        </div>
    );
};

export default MealDetails;