import React from 'react'

const MealList = ({ meal = [], setMeal }) => {

    const deleteMeal = (meals) => {
        const index = meal.indexOf(meals);
        if (index !== -1) {
            const newList = [...meal];
            newList.splice(index, 1);
            setMeal(newList);
        }
    }

    return (
        <ol>
            {
                meal.map((meals, index) => (
                    <li onClick={() => deleteMeal(meals)}
                        key={`${meals}-${index}`}
                        style={{ fontWeight: 'bold'}}
                    >
                        {meals}
                    </li>
                ))
            }
        </ol>
    )
}

export default MealList