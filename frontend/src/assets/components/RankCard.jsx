import './rankcard.css'
import { useState, useEffect } from 'react'


function RankCard({pos, user, medallas, content, sumlikes }) {

    return (
        <React.Fragment>
            <div className="">
                <p className="">{pos}</p>
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