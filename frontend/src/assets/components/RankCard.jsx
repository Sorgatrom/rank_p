import './rankcard.css'
import RankProvisor from '../utils/RankProvisor';
import MedallProvisor from '../utils/MedallProvisor';


function RankCard({pos, user, medallas, content, sumlikes }) {

    return (
        <>
            <div className="">
                <RankProvisor>{pos}</RankProvisor>
                <div className="">
                    <div className="">
                        <h2 className="">{user}</h2>
                        <MedallProvisor medallas={medallas}></MedallProvisor>
                    </div>
                    <p >{content}</p>
                </div>
                <div className="">
                    <p className="">{sumlikes !== undefined ? sumlikes : 0}</p>
                    <div className=""></div>
                </div>
            </div>
        </>
    );
}

export default RankCard;