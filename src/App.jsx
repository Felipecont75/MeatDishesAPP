import { useState } from "react"
import Meals from "./Components"
import MeatDishes from "./MeatDishes"

function App() {
  const [meal, setMeal] = useState(["Bistek"])
  return (
    <div className="m-5"
    >
      <h3 className="text-center" 
      >
        RECIPE MEAT DISHES APP
      </h3>
      <br />
      <Meals
         meal={meal}
         setMeal={setMeal}
      />
      <br />
      <MeatDishes
         meal={meal}
         setMeal={setMeal}
      />
      {
        meal.length === 0 && (
          <div className="text-center">
            <h3>Your list is empty</h3>
            ADD A NEW DISH.
          </div>
        )
      }
      
      {
        meal.length >= 2 && (
          <div >
            <br />
            <Meals
               meal={meal}
               setMeal={setMeal}
            />
          </div>
        )
      }

    </div>
  )
}

export default App