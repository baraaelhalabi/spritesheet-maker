import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ icon, title, content, className}: { icon: IconProp, title: string, content: string, className?: string }) => {
    return <div className={`text-center ${className}`}>
        <FontAwesomeIcon className="text-3xl" icon={icon} />
        <br />
        <br />
        <h3 className='font-bold'>{title}</h3>
        <br />
        <p className='text-sm'>{content}</p>
    </div>
}

{/* <FontAwesomeIcon icon="fa-solid fa-image" /> */}
{/* <FontAwesomeIcon icon="fa-solid fa-bolt-lightning" /> */}
{/* <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> */}
{/* <FontAwesomeIcon icon="fa-solid fa-shield" /> */}
{/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
export default Card;