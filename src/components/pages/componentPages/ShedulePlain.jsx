import React from "react";
import "./component-style/shedulePlain.css"

const ShedulePlain = () => {
  return (
    <>
      <section>
        <h2 className="caption-portfolio">Условия работы</h2>
        <div className="back-pint"></div>
        <div className="shedule">

            <section className="schedule-item">
              <h3 className="caption-price">График</h3>
              <div className="chart">
              <p>Пн-Пт с 9.00-21.00</p>
                <p>Сб-Вс с 11.00-22.00</p>
              </div>
            </section>

            <section className="schedule-item">
              <h3 className="caption-price">Важно</h3>
              <div className="chart">
               <p>Если вы опоздали на запись, по предварительной записи можно на другое свободное окно</p>
                {/* <p>Для некоторых клиентов, на первое посещение действует скидка 20%</p>  */}
            </div>
            </section>
        </div>
      </section>
    </>
  );
};

export default ShedulePlain;
