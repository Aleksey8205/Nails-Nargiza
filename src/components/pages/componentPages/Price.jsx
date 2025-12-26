import React from "react";
import "./component-style/priceHome.css";

const Price = () => {
  return (
    <>
      <section>
    <h2 className="caption-portfolio">Прайс</h2>
    <div className="price-box">
    <div className="service-box">
        <h3 className="caption-price">Маникюр</h3>
        <p class="service-item">Маникюр без покрытия <span class="price">800</span></p>
        <p class="service-item">Маникюр с покрытием <span class="price">1500</span></p>
        <p class="service-item">Укрепление твердым материалом(гель, полигель) <span class="price">500</span></p>
        <p class="service-item">Френч <span class="price">200</span></p>
        <p class="service-item">Втирка, блёстки, фольга, стемпинг <span class="price">50</span> <span class="price">(ноготь)</span></p>
        <p class="service-item">Снятие без покрытия <span class="price">300</span></p>
        <p class="service-item">Снятие нарощенных ногтей <span class="price">400</span></p>
    </div>



    <div className="service-box service-end">
        <h3 className="caption-price">Педикюр</h3>
        <p class="service-item">Аппаратный педикюр <span class="price">900</span></p>
        <p class="service-item">Аппаратный педикюр с покрытием <span class="price">1800</span></p>
        <p class="service-item">Аппаратный педикюр с обработкой стоп и покрытие <span class="price">2100</span></p>
        <p class="service-item">Наращивание и покрытие <span class="price">1800</span></p>
        <p class="service-item">Ремонт / донаращивание <span class="price">100 / 50</span></p>
        <p class="service-item">Коррекция нарощенных ногтей <span class="price">1800</span></p>
    </div>

    <div className="service-box">
        <h3 className="caption-price">Покрытие</h3>
        <p class="service-item">Скраб для рук <span class="price">150</span></p>
        <p class="service-item">Парафин <span class="price">399</span></p>
        <p class="service-item">Массаж для рук <span class="price">200</span></p>
        <p class="service-item">Эпиляция рук <span class="price">200</span></p>
    </div>
    </div>
</section>
    </>
  );
};

export default Price;
