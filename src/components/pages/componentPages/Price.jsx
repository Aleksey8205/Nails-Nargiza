import React from "react";
import "./component-style/priceHome.css";

const Price = () => {
  return (
    <>
      <section className="price-list">
    <h2 className="caption-price-main">Прайс</h2>
    <div className="price-box">
      <div className="nullBox"></div>
    <div className="service-box">
        <h3 className="caption-price">Маникюр</h3>
        <p className="service-item">Маникюр без покрытия <span className="price">800</span></p>
        <p className="service-item">Маникюр с покрытием <span className="price">1500</span></p>
        <p className="service-item">Укрепление твердым материалом(гель, полигель) <span className="price">500</span></p>
        <p className="service-item">Френч <span className="price">200</span></p>
        <p className="service-item">Втирка, блёстки, фольга, стемпинг <span className="price">50</span></p>
        <p className="service-item">Снятие без покрытия <span className="price">300</span></p>
        <p className="service-item">Снятие нарощенных ногтей <span className="price">400</span></p>
    </div>

    <div className="service-box">
        <h3 className="caption-price">Педикюр</h3>
        <p className="service-item">Аппаратный педикюр <span className="price">900</span></p>
        <p className="service-item">Аппаратный педикюр с покрытием <span className="price">1800</span></p>
        <p className="service-item">Аппаратный педикюр с обработкой стоп и покрытие <span className="price">2100</span></p>
        <p className="service-item">Наращивание и покрытие <span className="price">1800</span></p>
        <p className="service-item">Ремонт / донаращивание <span className="price">100 / 50</span></p>
        <p className="service-item">Коррекция нарощенных ногтей <span className="price">1800</span></p>
    </div>

    <div className="service-box box-2">
        <h3 className="caption-price">Спа услуги</h3>
        <p className="service-item">Скраб для рук <span className="price">150</span></p>
        <p className="service-item">Парафин <span className="price">399</span></p>
        <p className="service-item">Массаж для рук <span className="price">200</span></p>
        <p className="service-item">Эпиляция рук <span className="price">200</span></p>
    </div>
    </div>
</section>
    </>
  );
};

export default Price;
