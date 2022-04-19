import React from 'react';

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="container">
                <div className="ads-items row">
                    <div className="col-md-3  col-sm-6">
                        <div className="img-border">
                            <img src="./img/icons/percent.svg" alt=""/>
                        </div>
                        <h4 className="font-acrom-bold">От 18%</h4>
                        <p className="font-acrom-regular">ставка</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="img-border">
                            <img src="./img/icons/calendar.svg" alt=""/>
                        </div>
                        <h4 className="font-acrom-bold">От 1 до 5 лет</h4>
                        <p className="font-acrom-regular">срок</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="img-border">
                            <img src="./img/icons/summa.svg" alt=""/>
                        </div>
                        <h4 className="font-acrom-bold">До 3 млрд. сумов </h4>
                        <p className="font-acrom-regular">сумма</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="img-border">
                            <img src="./img/icons/people.svg" alt=""/>
                        </div>
                        <h4 className="font-acrom-bold">Для ЮЛ и ИП</h4>
                        <p className="font-acrom-regular">кредит на расчетный счёт компании</p>
                    </div>
                </div>
                <div className="choose row">
                   <div className="col-md-6">
                       <h1 className="font-acrom-bold">Выбирайте, сколько взять</h1>
                       <p className="font-acrom-regular">Получайте деньги одной суммой или в пределах <br/>
                           одобренного лимита</p>
                   </div>
                   <div className="col-md-6">
                           <img className="mobile" src="./img/mobile.png" alt="mobile"/>
                           <img className="laptop" src="./img/Laptop.png" alt="mobile"/>
                   </div>
                </div>
                <div className="conveniently row">
                    <div className="col-md-6">
                        <div className="box row">
                            <div className="col-md-8">
                                <h1 className="font-acrom-bold">Без скрытых комиссий</h1>
                                <p className="font-acrom-regular">
                                    Нет комиссий за выдачу и сопровождение
                                    кредита
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src="./img/con1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box row">
                            <div className="col-md-8">
                                <h1 className="font-acrom-bold">Возвращайте, как удобно</h1>
                                <p className="font-acrom-regular">
                                    Выбирайте график и погашайте кредит
                                    любым доступным способом
                                </p>
                            </div>
                            <div className="col-md-4">
                                <img src="./img/con2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Advantages;