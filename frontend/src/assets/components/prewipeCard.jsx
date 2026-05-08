import { useState } from 'react'
import './prewipeCard.css'

function PreWipeCard({number,fakename, content}) {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="prewipe-card">
            <div className="prewipe-card-number">
                <h3>{number}</h3>
            </div>
            <div className="prewipe-card-fakenameandcontent">
                <h2>{fakename}</h2>
                <p>{content}</p>
            </div>
            <div className="prewipe-card-like">
                <button onClick={() => setCount(count + 1)}>Like</button>
            </div>
        </div>
    </>
)};

export default PreWipeCard;
