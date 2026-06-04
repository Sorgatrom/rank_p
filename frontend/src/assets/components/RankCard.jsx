import './rankcard.css'
import RankProvisor from '@/assets/utils/RankProvisor';
import MedallProvisor from '@/assets/utils/MedallProvisor';


function RankCard({pos, user, medallas, content, sumlikes }) {

    return (
        <>
            <div className="card-ppal">
                <RankProvisor>{pos}</RankProvisor>
                <div className="card-bloque-nombre">
                    <div className="card-bloque-nombre-medalla">
                        <h2 className="">{user}</h2>
                        <MedallProvisor medallas={medallas}></MedallProvisor>
                    </div>
                    <p >{content}</p>
                </div>
                <div className="card-like-num">
                    <p className="">{sumlikes !== undefined ? sumlikes : 0}</p>
                    <div className="card-like-logo"></div>
                </div>
            </div>
        </>
    );
}

export default RankCard;