import React, { useState } from 'react';
import courses from '../../fakeData';
import SingleCourse from '../SingleCourse/SingleCourse';
import Cart from '../Cart/Cart';

const Courses = () => {
    const first15 = courses.slice(0,15);
    const [course, setCourse] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    
    return (
        <div className="container">

            <div className="row">
                <div className="col-10">
                    
                    {
                        course.map(cs => <SingleCourse
                            handleAddProduct = {handleAddProduct}
                            course = {cs}
                            ></SingleCourse>)
                    }
                    
                </div>
                <div className="col-2">
                    <Cart cart = {cart}></Cart>
                </div>
            </div>
            

        </div>
    );
};

export default Courses;