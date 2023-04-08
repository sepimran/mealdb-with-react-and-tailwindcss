import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    const newMeal = meals.slice(0, 18);
    
    return (
        <div>
             <div className="breadcrumb-area bg-[#FAEDE3] p-[120px]">
                <h2 className='text-[80px] font-extrabold text-center'>Meals</h2>
            </div>

            <div className="content-area py-[100px]">
                <div className="container mx-auto text-center">
                   <div className="row grid gap-[20px] grid-cols-4">
                       {
                            newMeal.map(meal => console.log(meal))
                       }

                        {
                            newMeal.map(meal => <Meal 
                                meal={meal}
                                key={meal.id}
                                ></Meal>)
                       }
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Meals;