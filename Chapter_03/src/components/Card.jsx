import { Bookmark } from 'lucide-react'
import "./card.css"
const Card = (props) => {

    return (
        <div className="card">
            <div>
                <div className="top">
                    <img src={props.brand} alt="logo" />
                    <button>Save <Bookmark size={10} /> </button>
                </div>
                <div className="center">
                    <h3> {props.company} <span>{props.datepost}</span></h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}r</h4>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card