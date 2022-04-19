import React, {useState} from 'react';
import "react-input-range/lib/css/index.css"
import InputRange from "react-input-range";

const CreditCalc = () => {
    const [value, setVAlue] = useState(1000000)
    const [valueM, setVAlueM] = useState(1000000)
    const [money, setMoney] = useState(10000000)
    const [srok, setSrok] = useState(10)
    const [summa,setSumma] = useState(1234567891)

   let summaT = summa.toString()
   let moneyT = money.toString()

    return (
        <div className="credit-calc">
            <div className="container">
             <div className="row">
                 <div className="col-md-4">
                     <h2 className="font-acrom-bold">Сколько вам нужно</h2>
                     <div className="range">
                         <h3 className="font-acrom-extra-bold">{ moneyT.length === 7 ?
                             moneyT?.slice(0, 1) + " " + moneyT?.slice(1, 4) + " " + moneyT?.slice(4, 7) + " "
                             :
                             moneyT.length === 8 ?
                                 moneyT?.slice(0, 2) + " " + moneyT?.slice(2, 5) + " " + moneyT?.slice(5, 8)
                                 :
                                 moneyT.length === 9 ?
                                     moneyT?.slice(0, 3) + " " + moneyT?.slice(3, 6) + " " + moneyT?.slice(6, 9)
                                     :
                                     moneyT.length === 10 ?
                                         moneyT?.slice(0, 1) + " " + moneyT?.slice(1, 4) + " " + moneyT?.slice(4, 7) + " " +  moneyT?.slice(7, 10)
                                         :
                                         ""
                         }</h3>
                         <form className="form">
                             <InputRange
                                 // maxValue={500000000}
                                 // minValue={1000000}
                                 // value={valueM}
                                 onChange={(e) => console.log(value)}
                                 // onChangeComplete={value => console.log(value)}
                             />
                         </form>
                     </div>

                     <p  className="font-acrom-regular">Предварительный расчет. Не является публичной офертой.</p>
                 </div>
                 <div className="col-md-4">
                     <h2 className="font-acrom-bold">Срок кредита</h2>
                     <div className="range">
                         <h3 className="font-acrom-extra-bold">4 года</h3>
                         <form className="form">
                             <InputRange
                                 maxValue={10}
                                 minValue={1}
                                 value={5}
                                 onChange={value => setVAlue({ value })}
                                 // onChangeComplete={value => console.log(value)}
                             />
                         </form>
                     </div>
                 </div>
                 <div className="col-md-4">
                     <h2 className="font-acrom-bold">Ежемесячный платеж</h2>
                     <h1 className="font-acrom-extra-bold">{ summaT.length === 7 ?
                         summaT?.slice(0, 1) + " " + summaT?.slice(1, 4) + " " + summaT?.slice(4, 7) + " "
                         :
                         summaT.length === 8 ?
                             summaT?.slice(0, 2) + " " + summaT?.slice(2, 5) + " " + summaT?.slice(5, 8)
                             :
                             summaT.length === 9 ?
                                 summaT?.slice(0, 3) + " " + summaT?.slice(3, 6) + " " + summaT?.slice(6, 9)
                                 :
                                 summaT.length === 10 ?
                                     summaT?.slice(0, 1) + " " + summaT?.slice(1, 4) + " " + summaT?.slice(4, 7) + " " +  summaT?.slice(7, 10)
                                     :
                             ""
                     } <span className="font-acrom-medium">сум.</span></h1>
                     <a  className="font-acrom-bold" href="#!">Оставить заявку</a>
                 </div>
             </div>
            </div>
        </div>
    );
};

export default CreditCalc;