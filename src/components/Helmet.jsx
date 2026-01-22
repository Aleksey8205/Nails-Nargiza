import React from "react";
import { Helmet } from "react-helmet";
import faviconIco from "../public/favicon/favicon.ico"
import favicon96 from "../public/favicon/favicon-96x96.png"
import appleTouch from "../public/favicon/favicon-96x96.png"

const HomeHelmet = () => {
  return (
    <Helmet>
      <title> Stylish Nails Design</title>
      <meta
        name="description"
        content="Профессиональный мастер маникюра и педикюра в Подольске. Красивый дизайн ногтей, качественное покрытие гель-лаком и уход за стопами. Запишись онлайн!"
      />
      <meta property="og:title" content="Мастер маникюра и педикюра в Подольске" />
      
      {/* <meta
        property="og:image"
        content="https://your-site.com/path-to-your/nail-designs-preview.jpg"
      /> это URL изображения, которое будет отображаться в превью вашей страницы. */} 

      <meta property="og:type" content="stylischnailsdesign" />
      <meta property="og:url" content="https://stylischnailsdesign.ru/" />
      <meta property="og:locale" content="ru_RU" />
      <meta
        name="keywords"
        content="маникюр Подольск, педикюр Подольск, маникюр студия Подольск, профессиональный маникюр, стильный дизайн ногтей"
      />
      <link rel="canonical" href="https://stylischnailsdesign.ru/" />
      <link rel="icon" type="image/png" href={favicon96} sizes="96x96" />
      <link rel="shortcut icon" href={faviconIco} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={appleTouch}
      />
      <meta name="StylischNailsDesign" content="stylischnailsdesign" />
    </Helmet>
  );
};

export default HomeHelmet;