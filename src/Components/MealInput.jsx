import { useState } from "react"

const MealInput = ({ meal = [], setMeal }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleAddMealButton = () => {
        if (inputValue.trim() === "") return
        setMeal([inputValue, ...meal])
        setInputValue("")
    }

    const handleClearList = () => {
        setMeal([])
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddMealButton();
        }
    };

    return (
        <div className="text-center">
            <input
                onChange={(e) => handleInputChange(e)}
                onKeyPress={handleKeyPress}
                placeholder="Write you meal our meals"
                type="text"
                value={inputValue}
            />
            <button
                onClick={(e) => handleAddMealButton(e)}
                className="btn btn-primary btn-sm ms-2 mb-1"
                type="button"
            >
                Add
            </button>
            <button
                onClick={(e) => handleClearList(e)}
                className="btn btn-danger btn-sm ms-2 mb-1"
                type="button"
            >
                Clean
            </button>
        </div>
    )
}

export default MealInput