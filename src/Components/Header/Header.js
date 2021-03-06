import React from 'react';


const Header = () => {
    return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#home"><h3>ONLINE COURSES</h3> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

            <div className=" collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/courses">Courses</a>
                    </li>
                </ul>
        
            </div>
        </nav>
    </div>
    );
};
export default Header;