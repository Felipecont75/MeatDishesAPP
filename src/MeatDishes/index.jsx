import React, { useEffect, useState } from 'react'

const MeatDishes = ({ meal = [], setMeal }) => {
    const [dataList, setDataList] = useState([])

    const getMeals = async (meal) => {
        if (meal.length === 0) {
            setDataList([])
            return
        }

        const responsesList = await Promise.all(meal.map(async (mea) => {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${mea}`
            )
            const apiResponse = await response.json()
            return apiResponse.meals
        }))
        let mealList = []

        responsesList.forEach((data) => {
            data.forEach((item) => {

                let ingredients = []
                for (let i = 1; i <= 15; i++) {
                    const ingredient = item[`strIngredient${i}`];
                    if (ingredient) {
                        ingredients.push(ingredient);
                    } else {
                        break;
                    }
                }

                mealList = [...mealList,
                {
                    id: item.idMeal,
                    alternate: item.strCategory,
                    area: item.strArea,

                    url: item.strMealThumb,
                    name: item.strMeal,
                    instructions: item.strInstructions,
                    ingredients: ingredients
                }
                ]
            })
        })
        setDataList([...mealList])
    }

    useEffect(() => {
        getMeals(meal)
    },
        [meal]
    )

    return (
        <div className="container-fluid">
            <div className="row">
                {dataList.map((data, index) => (
                    <div className="col-md-4 mb-4" key={`${data.name}-${index}`}>
                        <div className="card h-100">
                            <img
                                src={data.url}
                                className="card-img-top"
                                alt={data.name}
                                style={{ height: '250px' }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    <strong>{data.name}</strong>
                                </h5>
                                <h6 className="card-subtitle mb-2">
                                    <strong>Ingredients:</strong>
                                </h6>
                                <ul
                                    className="card-text"
                                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
                                >
                                    {data.ingredients.map((ingredient, ingredientIndex) => (
                                        <li
                                            key={`${data.name}-${ingredientIndex}`}
                                        >
                                            {ingredient}
                                        </li>
                                    ))}
                                </ul>
                                <h6 className="card-subtitle mb-2">
                                    <strong>Instructions:</strong>
                                </h6>
                                <p className="card-text" style={{ textAlign: 'justify' }}>
                                    {data.instructions}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MeatDishes
