import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="footer-menus">
                                <a href="#!" className="font-acrom-medium">Офисы и банкоматы</a>
                                <a href="#!" className="font-acrom-medium">Пресс-центр</a>
                                <a href="#!" className="font-acrom-medium">Обмен валюты</a>
                            </div>
                            <div className="footer-menus">
                                <a href="#!" className="font-acrom-medium">Информационный центр</a>
                                <a href="#!" className="font-acrom-medium">Тарифы</a>
                                <a href="#!" className="font-acrom-medium">Документы</a>
                                <a href="#!" className="font-acrom-medium">Карьера</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-5">
                                <h5>Мы в социальных сетях</h5>

                                <ul>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
                                             fill="none" stroke="#A7A9BA" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" className="main-grey feather feather-facebook">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                             viewBox="0 0 24 24" fill="none" stroke="#A7A9BA" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="main-grey feather feather-instagram">
                                            <rect x="2" y="2" width={20} height={20} rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                             viewBox="0 0 24 24" fill="none" stroke="#A7A9BA" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="main-grey feather feather-send">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="robot"
                                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                                             className="main-grey" style={{width:" 1.7rem", height: "1.7rem"}}>
                                            <path 
                                                fill="#A7A9BA"
                                                  d="M192,416h64V384H192ZM576,224H544V192a95.99975,95.99975,0,0,0-96-96H336V16a16,16,0,0,0-32,0V96H192a95.99975,95.99975,0,0,0-96,96v32H64a31.99908,31.99908,0,0,0-32,32V384a32.00033,32.00033,0,0,0,32,32H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a32.00033,32.00033,0,0,0,32-32V256A31.99908,31.99908,0,0,0,576,224ZM96,384H64V256H96Zm416,32a64.18916,64.18916,0,0,1-64,64H192a64.18916,64.18916,0,0,1-64-64V192a63.99942,63.99942,0,0,1,64-64H448a63.99942,63.99942,0,0,1,64,64Zm64-32H544V256h32ZM416,192a64,64,0,1,0,64,64A64.07333,64.07333,0,0,0,416,192Zm0,96a32,32,0,1,1,32-32A31.97162,31.97162,0,0,1,416,288ZM384,416h64V384H384Zm-96,0h64V384H288ZM224,192a64,64,0,1,0,64,64A64.07333,64.07333,0,0,0,224,192Zm0,96a32,32,0,1,1,32-32A31.97162,31.97162,0,0,1,224,288Z"></path>
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                <p className="font-acrom-medium">Круглосуточный контактный центр</p>
                                <h3 className="font-acrom-regular mb-3">1152</h3>
                                <p className="font-acrom-medium">Телефон доверия</p>
                                <h3 className="font-acrom-regular">(+998 71) 200-55-22</h3>
                                <p className="font-acrom-medium">С 9.00 до 18.00 (Обед 13.00-14.00) <br/> понедельник-пятница</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-footer ">
                <div className="container">
                    <p className="font-acrom-regular mb-0">Все права защищены. Услуги лицензионные</p>
                    <p className="mt-3 mb-0 font-acrom-regular"><span>При использовании материалов сайта "Асакабанк",</span><a
                        href="https://asakabank.uz" target="_blank" rel="noopener noreferrer"> www.asakabank.uz </a><span>ссылка на сайт обязательна.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;