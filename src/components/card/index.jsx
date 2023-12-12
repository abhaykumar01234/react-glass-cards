import React from 'react';
import s from './card.module.scss';

const Card = ({ name, role, imageUrl }) => {
    return (
        <div className={s.card}>
            <div className={s.imgBx}>
                <img src={imageUrl} alt="profile" />
            </div>
            <div className={s.content}>
                <div className={s.details}>
                    <h2>{name}<br/> <span>{role}</span></h2>
                </div>
                <ul className={s.sci}>
                    <li><a href="!#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="!#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="!#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="!#"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Card);
