import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";


function App() {
  return (
    <>
    <section>
      <MealsProvider>
        <MealsList/>
        <Counter/>
      </MealsProvider>
      </section>
    </>

  );
}

export default App;
