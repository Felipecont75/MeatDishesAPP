import MealInput from './MealInput'
import MealList from './MealList'

const Meals = ({meal = [], setMeal}) => {
  return (
    <div>
        <MealInput
        meal={meal}
        setMeal={setMeal}
        />
        <MealList
         meal={meal}
         setMeal={setMeal}
        />
    </div>
  )
}

export default Meals