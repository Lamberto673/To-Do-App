
interface Props{
    Task: string;
}
function ListFinished({Task}:Props){
    return (
        <div className="List">
            <p id="Task">
                {Task}
            </p>
            <div className='Buttons'>
            </div>
        </div>
    )
}

export default ListFinished;