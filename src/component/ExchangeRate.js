import React, {useEffect, useState} from 'react';
import axios from "axios";

const ExchangeRate = () => {
    const [rate, setRate] = useState([])
    const [rateSB, setRateSB] = useState([])
    const [select, setSelect] = useState(0)
    const [firstSelect, setFirstSelect] = useState(false)
    const [secondSelect, setSecondSelect] = useState(null)

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const [currencyItem, setCurrencyItem] =useState(0)
    useEffect(() =>{
        axios.get("https://back.asakabank.uz/1/currency/?type=asaka&currency_type=individual&page_size=6")
            .then(res =>{
                setRate(res.data.results)
            })
    axios.get("https://back.asakabank.uz/1/currency/?type=cbu&page_size=6")
            .then(res =>{
                setRateSB(res.data.results)
            })



    }, [])

    let total = 0

    const convert = (value) => {
        setSecondSelect(value)
       let curr = document.getElementById('firstInput').value
        total = curr * value
        console.log(total)
       document.getElementById('secondInput').innerText = total
        setFirstSelect(false)
    }
    const convertInput = (value) => {
        let curr = document.getElementById('firstInput').value


        if(secondSelect == null && curr.length <0 ){

        }
        else {
            total = curr * secondSelect
            console.log(total)
            document.getElementById('secondInput').innerText = total
        }

    }
    return (
        <div className="exchange-rate">
            <div className="container">
                <div className="row ex-rate">
                    <div className="col-md-4">
                        <h1 className="font-acrom-medium">Валютный курс</h1>
                        <div className="face">
                            <button className={"font-acrom-regular " + (select == 0 ? "active" : "") }  onClick={() => setSelect(0)}>Для физических лиц</button>
                            <button className={"font-acrom-regular " + (select == 1 ? "active" : "" )} onClick={() => setSelect(1)}>Для юридических лиц</button>
                            <button className={"font-acrom-regular " + (select == 2 ? "active" : "" )} onClick={() => setSelect(2)}>Курс Центрального банка</button>
                        </div>
                        <div className="face-content">
                            <div className="face-content-title">
                                <div className="row">
                                    <div className="col-md-4"><span className="font-acrom-medium">Валюта</span></div>
                                    <div className="col-md-4 d-flex justify-content-end"><span className="font-acrom-medium">{select === 2 ? "" : "Купить"}</span></div>
                                    <div className="col-md-4 d-flex justify-content-end"><span className="font-acrom-medium">Продажа</span></div>
                                </div>

                                {
                                    select === 0
                                        ?
                                    rate?.map(item =>(
                                        <div className="row summa">
                                            <div className="col-md-4"><span className="font-acrom-medium summa">{item.name}</span></div>
                                            <div className="col-md-4 d-flex justify-content-end"><span className="font-acrom-regular summa">{item.buy.toString().slice(0, 2) + "," + item.buy.toString().slice(2, 5) + (item.buy.length > 5 ? "." : "") + item.buy.toString().slice(5, 8)}</span></div>
                                            <div className="col-md-4 d-flex justify-content-end"><span className="font-acrom-regular summa">{item.sell.toString().slice(0, 2) + "," + item.sell.toString().slice(2, 5) + (item.sell.length > 5 ? "." : "") + item.sell.toString().slice(5, 8)}</span></div>
                                        </div>
                                    ))
                                        :
                                        select === 1
                                            ?
                                            rate?.map(item =>(
                                                <div className="row summa">
                                                    <div className="col-md-4"><span className="font-acrom-medium summa">{item.name}</span></div>
                                                    <div className="col-md-4 d-flex justify-content-end"><span className="font-acrom-regular summa">0</span></div>
                                                    <div className="col-md-4 d-flex justify-content-end"><span className="font-acrom-regular summa">0</span></div>
                                                </div>
                                            ))
                                            :
                                            select === 2
                                                ?
                                                rateSB?.map(item =>(
                                                    <div className="row summa">
                                                        <div className="col-md-4"><span className="font-acrom-medium summa">{item.name}</span></div>
                                                        <div className="col-md-4"><span className="font-acrom-medium summa"></span></div>
                                                        <div className="col-md-4 d-flex justify-content-end"><span className="font-acrom-regular summa">{item.rate}</span></div>
                                                    </div>
                                                ))
                                                :
                                                ""
                                }
                            </div>
                        </div>

                        <div className="bottom-line"></div>


                        <h6 className="font-acrom-medium data">Данные : {date}.{month < 10 ? "0" + month  : month }.{"." + year}</h6>

                        <a href="#!" className="dinamic-data">Обменный курс онлайн</a>
                    </div>
                    <div className="col-md-8">
                        <div className="conver">
                            <h1 className="font-acrom-medium"><img src="./img/icons/conversation.png" alt="png"/> Конвертер валют</h1>
                            <div className="row">
                                <div className="col-md-6 d-flex">
                                    <input className="font-acrom-bold w-100" type="number" id="firstInput" onChange={() => convertInput()}/>
                                    <button className="main-select font-acrom-bold" onClick={() => setFirstSelect(!firstSelect)}>USD</button>
                                    {
                                        firstSelect
                                            ?
                                            <div className="cur-con">
                                                {rate.map((item, index) =>(
                                                    <button className="font-acrom-medium" onClick={() => convert(item.sell)}>{item.name}</button>
                                                ))}
                                            </div>
                                            :
                                            ""
                                    }
                                </div>
                                <div className="col-md-6 d-flex">
                                    <span id="secondInput" className="position-absolute second-input font-acrom-bold"></span>
                                    <input type="text" disabled className="w-100 font-acrom-bold"/>
                                    <button className="main-select font-acrom-bold" disabled>UZS</button>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.8850758067197!2d69.27609303819624!3d41.28960559585126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ac88326852d%3A0xb085bf256624d2ce!2sAsaka%20Bank!5e0!3m2!1sen!2s!4v1650260856675!5m2!1sen!2s"
                                allowFullScreen="" loading="lazy"
                                style={{width: "100%", height: "300px", border: "0"}}
                                referrerPolicy="no-referrer-when-downgrade" />
                            
                            <h1 className="font-acrom-medium"><img src="./img/icons/geo2.png" alt=""/> Офисы и банкоматы</h1>
                            <div className="row justify-content-between">
                                <p className="font-acrom-regular">Адреса отделений и банкоматов «Асакабанк» на карте, а также график работы, телефоны.</p>
                                <a href="#!">Перейти</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExchangeRate;