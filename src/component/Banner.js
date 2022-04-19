import React from 'react';

const Banner = () => {
    return (
        <div className="main-banner ">
            <div className="container d-flex justify-content-between">
                <div className="main-banner-title">
                    <h1 className="font-acrom-medium">Кредиты для бизнеса
                        на любые цели</h1>
                    <p className="font-acrom-regular">На недвижимость, транспорт, модернизацию производства или пополнение оборотных средств</p>
                    <a href="#!" className="font-acrom-medium">Подать заявку онлайн</a>
                </div>
                <div className="banner-img">
                    <img src="./img/man.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;