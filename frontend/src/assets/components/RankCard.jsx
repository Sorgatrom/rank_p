import './rankcard.css'
import { useState, useEffect } from 'react'
import RankProvisor from '../utils/RankProvisor';


function RankCard({pos, user, medallas, content, sumlikes }) {

    return (
        <React.Fragment>
            <div className="">
                <RankProvisor>{pos}</RankProvisor>
                <div className="">
                    <div className="">
                        <h2 className="">{user}</h2>
                        <div className="">{medallas}</div>
                    </div>
                    <p >{content}</p>
                </div>
                <div className="">
                    <p className="">{sumlikes}</p>
                    <div className=""></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default RankCard;