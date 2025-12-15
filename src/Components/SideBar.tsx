
interface Props{
  count1: number;
  count2: number;
  setShowFinished: (v: boolean) => void;
}

function SideBar({count1, count2, setShowFinished}:Props){
    return (
        <div className="SideBar">
            <h1 className="Side">2DoList</h1>
           
            {/* <div className="List">
                <p id="Task">{Task}</p>
            </div> */}
            <div className="SidePro">
                <h1 id="Finished" onClick={() => setShowFinished(true)}>Finished({count1})</h1>
                <h1 id="SideGoing" onClick={() => setShowFinished(false)}>Ongoing({count2})</h1>
            </div>
        </div>
    )
}

export default SideBar