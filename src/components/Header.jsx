import React from "react";
import "../shared/header.css"

const Header = () => {
    return (
        <>
    <div className="header">
        <button className="nav-btn">Главная</button>
        <button className="nav-btn">О себе</button>
        <button className="nav-btn">Потфолио</button>
        <button className="nav-btn">Контакты</button>
    </div>
        </>
    )
}

export default Header;