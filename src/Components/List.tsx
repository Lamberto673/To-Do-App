import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
interface Props{
    Task: string;
    Delete: () => void;
    Finish: () => void;
}
function List({Task, Delete, Finish}:Props){

    return (
        <div className="List">
            <p id="Task">
                {Task}
            </p>
            <div className='Buttons'>
                <button className="ListButton" onClick={Delete}>
                    <FontAwesomeIcon icon={faDeleteLeft}/>
                </button>
                <button className="ListButton" onClick={Finish}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            </div>
        </div>
    )
}

export default List;