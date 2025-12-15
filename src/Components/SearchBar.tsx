import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// Remove interface if not using TypeScript, otherwise keep it
// interface Props { onAdd: (task: string) => void; }
interface Props{
    onAdd: (task: string) => void;
}
function SearchBar({ onAdd }:Props) {
    // 1. Local state to track what the user types
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        // 2. Send the value up to the App
        onAdd(inputValue);
        // 3. Clear the input box
        setInputValue("");
    };

    return (
        <div className="SearchBarr">
            <input 
                className="SearchBar" 
                placeholder="Input your ToDos"
                value={inputValue}
                // Update state when user types
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={handleClick} className="btn btn-outline-info"id="SearchButton">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
export default SearchBar