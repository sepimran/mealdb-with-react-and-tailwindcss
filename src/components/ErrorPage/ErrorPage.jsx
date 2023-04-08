import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="breadcrumb-area bg-[#FAEDE3] p-[120px]">
                <h2 className='text-[80px] font-extrabold text-center'>404</h2>
            </div>
            <div className="content-area py-[100px]">
                <div className="container mx-auto text-center">
                   <div className="row">
                        <h2 className='text-[40px]' >Page Not Found</h2>
                        <p>Please Go back to Home page </p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;