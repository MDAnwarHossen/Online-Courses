import React from 'react';

const SingleCourse = (props) => {
    return (
        <div className = "m-3 p-3 row border course">
            
            <div className="col-md-4">
                <img src={props.course.img} alt=""/>
            </div>
            <div className="col-md-8 ">
                    <div>
                        <h3>{props.course.title}</h3>
                    </div>
                    <div className = "d-flex">
                        <div>
                        <h6>{props.course.instructors_name}</h6>
                        </div>
                        <div className = "ml-auto">
                        <h6>{'$'+props.course.course_price}</h6>
                        </div>
                    </div>
                    <button onClick = {() => props.handleAddProduct(props.course)} className = "btn-primary">Enroll Now</button>



            </div>
        </div>
    );
};

export default SingleCourse;