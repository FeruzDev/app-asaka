import React, {useEffect, useState} from 'react';

const Navbar = () => {
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    const [open, setOpen] = useState(false)
    return (
        <div className={"main-navbar " + ( open ? " open" : "")}>
            <div id="myLinks"  className={open ? " d-block" : "d-none"}>
                <div className="menus">
                    <a href="#!" className="menus-item font-acrom-medium active">Преимущества</a>
                    <a href="#!" className="menus-item font-acrom-medium">Наши кредиты</a>
                    <a href="#!" className="menus-item font-acrom-medium">Контакты</a>
                </div>
                <div className="lang d-flex">
                    <button className="lang-change-btn font-acrom-medium">
                        <img src="./img/icons/Globus.svg" alt=""/>
                        <span>Ру</span>
                    </button>
                    <a className="tel-number font-acrom-medium" href="tel: 1152">Контакт-центр 24/7 : <span className="font-acrom-medium">1152</span></a>
                </div>
            </div>
            <div className="container d-flex justify-content-between align-items-center h-100">
                <div className="logo">
                    <img src="./img/logo.svg" alt="logo"/>
                </div>
                <div className="menus  del-swicht">
                    <a href="#!" className="menus-item font-acrom-medium active">Преимущества</a>
                    <a href="#!" className="menus-item font-acrom-medium">Наши кредиты</a>
                    <a href="#!" className="menus-item font-acrom-medium">Контакты</a>
                </div>
                <div className="lang d-flex del-swicht">
                    <button className="lang-change-btn font-acrom-medium">
                        <img src="./img/icons/Globus.svg" alt=""/>
                        <span>Ру</span>
                    </button>
                    <a className="tel-number font-acrom-medium" href="tel: 1152">Контакт-центр 24/7 : <span className="font-acrom-medium">1152</span></a>
                </div>


                <button   className="hamburger" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none"
                         stroke="#D70C17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="primary-text d-block pointer feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>


            </div>

        </div>
    );
};

export default Navbar;