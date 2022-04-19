import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ChooseCredit = () => {
    return (
        <div className="choose-credit">
            <div className="container">

            <h1>Выберите цель кредита</h1>
            <Tabs>
                <TabList>
                    <Tab ><span className="font-acrom-regular">Все кредиты</span></Tab>
                    <Tab ><span className="font-acrom-regular">Любые бизнес-цели без залога</span></Tab>
                    <Tab ><span className="font-acrom-regular">Транспорт и оборудование</span></Tab>
                    <Tab ><span className="font-acrom-regular">Участие в тендере, реализация госконтракта</span></Tab>
                </TabList>

                <TabPanel>
                    <div className="all-credit">
                       <div className="row ">
                           <div className="img-pair">
                               <img src="./img/chc1.png" alt="user"/>
                           </div>
                           <div className="all-credit-content">
                               <h1>Кредит Оборотный</h1>
                               <p className="st-title font-acrom-regular font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Пополнение оборотных средств </span></p>
                               <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Осуществление текущих расходов </span></p>
                               <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Исполнение текущих, государственных и экспортных <br/>
                                   контрактов </span></p>
                               <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Финансирование любых целей без подтверждения целевого <br/>
                                   использования </span></p>
                               <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Рефинансирование оборотных кредитов других банков </span></p>
                               <div className="ads-status">
                                  <div className="row">
                                      <div>
                                          <h2 className="font-acrom-bold">до 36 месяцев</h2>
                                          <p className="font-acrom-regular">срок кредита</p>
                                      </div>
                                      <div>
                                          <h2 className="font-acrom-bold">18%</h2>
                                          <p className="font-acrom-regular">минимальная ставка</p>
                                      </div>
                                      <div>
                                          <h2 className="font-acrom-bold">от 25 000 000 сумов</h2>
                                          <p className="font-acrom-regular">минимальная сумма</p>
                                      </div>
                                  </div>
                               </div>
                               <div className="btn-group-main">
                                   <a className="font-acrom-bold" href="#!">Подать заявку онлайн</a>
                                   <a className="font-acrom-regular" href="#!">Подробнее</a>
                               </div>
                           </div>
                       </div>
                        <div className="bottom-line"></div>
                    </div>
                    <div className="all-credit">
                        <div className="row ">
                            <div className="img-pair">
                                <img src="./img/chc2.png" alt="user"/>
                            </div>
                            <div className="all-credit-content">
                                <h1>Кредит Инвестиционный</h1>
                                <h5>Инвестирование в недвижимость, строительство
                                    и другое имущество</h5>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Рефинансирование задолженности перед банками <br/>
                                    и лизинговыми компаниями </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Приобретение жилой или коммерческой недвижимости <br/>
                                    под залог приобретаемых объектов </span>
                                </p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Покупка транспорта и оборудования для хозяйственной <br/>
                                    деятельности</span></p>

                                <div className="ads-status">
                                    <div className="row">
                                        <div>
                                            <h2 className="font-acrom-bold">до 36 месяцев</h2>
                                            <p className="font-acrom-regular">срок кредита</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">18%</h2>
                                            <p className="font-acrom-regular">минимальная ставка</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">от 25 000 000 сумов</h2>
                                            <p className="font-acrom-regular">минимальная сумма</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group-main">
                                    <a className="font-acrom-bold" href="#!">Подать заявку онлайн</a>
                                    <a className="font-acrom-regular" href="#!">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="all-credit">
                        <div className="row ">
                            <div className="img-pair">
                                <img src="./img/chc2.png" alt="user"/>
                            </div>
                            <div className="all-credit-content">
                                <h1>Кредит Инвестиционный</h1>
                                <h5>Инвестирование в недвижимость, строительство
                                    и другое имущество</h5>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Рефинансирование задолженности перед банками <br/>
                                    и лизинговыми компаниями </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Приобретение жилой или коммерческой недвижимости <br/>
                                    под залог приобретаемых объектов </span>
                                </p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Покупка транспорта и оборудования для хозяйственной <br/>
                                    деятельности</span></p>

                                <div className="ads-status">
                                    <div className="row">
                                        <div>
                                            <h2 className="font-acrom-bold">до 36 месяцев</h2>
                                            <p className="font-acrom-regular">срок кредита</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">18%</h2>
                                            <p className="font-acrom-regular">минимальная ставка</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">от 25 000 000 сумов</h2>
                                            <p className="font-acrom-regular">минимальная сумма</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group-main">
                                    <a className="font-acrom-bold" href="#!">Подать заявку онлайн</a>
                                    <a className="font-acrom-regular" href="#!">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="all-credit">
                        <div className="row ">
                            <div className="img-pair">
                                <img src="./img/chc1.png" alt="user"/>
                            </div>
                            <div className="all-credit-content">
                                <h1>Кредит Оборотный</h1>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Пополнение оборотных средств </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Осуществление текущих расходов </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Исполнение текущих, государственных и экспортных <br/>
                                   контрактов </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Финансирование любых целей без подтверждения целевого <br/>
                                   использования </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Рефинансирование оборотных кредитов других банков </span></p>
                                <div className="ads-status">
                                    <div className="row">
                                        <div>
                                            <h2 className="font-acrom-bold">до 36 месяцев</h2>
                                            <p className="font-acrom-regular">срок кредита</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">18%</h2>
                                            <p className="font-acrom-regular">минимальная ставка</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">от 25 000 000 сумов</h2>
                                            <p className="font-acrom-regular">минимальная сумма</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group-main">
                                    <a className="font-acrom-bold" href="#!">Подать заявку онлайн</a>
                                    <a className="font-acrom-regular" href="#!">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="all-credit">
                        <div className="row ">
                            <div className="img-pair">
                                <img src="./img/chc2.png" alt="user"/>
                            </div>
                            <div className="all-credit-content">
                                <h1>Кредит Инвестиционный</h1>
                                <h5>Инвестирование в недвижимость, строительство
                                    и другое имущество</h5>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Рефинансирование задолженности перед банками <br/>
                                    и лизинговыми компаниями </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Приобретение жилой или коммерческой недвижимости <br/>
                                    под залог приобретаемых объектов </span>
                                </p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Покупка транспорта и оборудования для хозяйственной <br/>
                                    деятельности</span></p>

                                <div className="ads-status">
                                    <div className="row">
                                        <div>
                                            <h2 className="font-acrom-bold">до 36 месяцев</h2>
                                            <p className="font-acrom-regular">срок кредита</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">18%</h2>
                                            <p className="font-acrom-regular">минимальная ставка</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">от 25 000 000 сумов</h2>
                                            <p className="font-acrom-regular">минимальная сумма</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group-main">
                                    <a className="font-acrom-bold" href="#!">Подать заявку онлайн</a>
                                    <a className="font-acrom-regular" href="#!">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-line"></div>
                    </div>
                    <div className="all-credit">
                        <div className="row ">
                            <div className="img-pair">
                                <img src="./img/chc1.png" alt="user"/>
                            </div>
                            <div className="all-credit-content">
                                <h1>Кредит Оборотный</h1>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Пополнение оборотных средств </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Осуществление текущих расходов </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Исполнение текущих, государственных и экспортных <br/>
                                   контрактов </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Финансирование любых целей без подтверждения целевого <br/>
                                   использования </span></p>
                                <p className="st-title font-acrom-regular"><img src="./img/icons/dots.svg" alt="..."/><span>Рефинансирование оборотных кредитов других банков </span></p>
                                <div className="ads-status">
                                    <div className="row">
                                        <div>
                                            <h2 className="font-acrom-bold">до 36 месяцев</h2>
                                            <p className="font-acrom-regular">срок кредита</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">18%</h2>
                                            <p className="font-acrom-regular">минимальная ставка</p>
                                        </div>
                                        <div>
                                            <h2 className="font-acrom-bold">от 25 000 000 сумов</h2>
                                            <p className="font-acrom-regular">минимальная сумма</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group-main">
                                    <a className="font-acrom-bold" href="#!">Подать заявку онлайн</a>
                                    <a className="font-acrom-regular" href="#!">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
            </div>

        </div>
    );
};

export default ChooseCredit;