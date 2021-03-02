import React from 'react';
import './Item.css';

export default function Item(props) {
    const {dataElement} = props;


    return (
        <div className="box_item" >
            <div className="item_title">{dataElement.title}</div> 
            <div className="item_custumer">
                <div className="person">
                    <div className="person-photo">
                        <img src={dataElement.image_a} alt="personA"/>
                    </div>
                    <div className="person-info">
                        <div className="person-info-name">{dataElement.personne_a}</div>
                        <div className="person-info-emploi">{dataElement.emploi_a}</div>
                    </div>
                </div>
                <div className="person">
                    <div className="person-photo">
                        <img src={dataElement.image_b} alt="personB"/>
                    </div>
                    <div className="person-info">
                        <div className="person-info-name">{dataElement.personne_b}</div>
                        <div className="person-info-emploi">{dataElement.emploi_b}</div>
                    </div>
                </div>
            </div>
            <div className="item-content">
                <div className="item-content-title">Revenu mensuel moyen</div>
                <div className="item-main-content">
                    <div className="main-content-box">
                        <div className="content-box-title">Candidats</div>
                        <div className="content-box-argent">{dataElement.argent_candidats} &euro;</div>
                    </div>
                    <div className="main-content-box">
                        <div className="content-box-title">Garants</div>
                        <div className="content-box-argent">{dataElement.argent_garants} &euro;</div>
                    </div>
                </div>
            </div>
            <div className="item-button">
                <button className="btn">Voir plus</button>
            </div>
            <div className="item-date">Visite du {dataElement.date_visite} à {dataElement.time_visite}</div>
        </div>
    )
}
