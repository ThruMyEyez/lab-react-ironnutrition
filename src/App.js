import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
// To start using the pre-made Ant Design components we must first import them:
import { Row, Divider, Button } from 'antd';

import foods from './foods.json';

const App = () => {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  const addFood = (newFoodItem) => {
    setFoodList((prev) => [...prev, newFoodItem]);
  };

  const deleteFoodEntry = (e) => {
    const filteredFood = foodList.filter((food) => {
      return food.name !== e.currentTarget.name;
    });
    console.log(foodList.length);
    setFoodList(filteredFood);
  };

  const filterFood = (str) => {
    let filteredProducts;
    if (str === '') {
      filteredProducts = foods;
    } else {
      filteredProducts = foodList.filter((item) =>
        item.name.toLowerCase().includes(str.toLowerCase())
      );
    }
    setFoodList(filteredProducts);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button onClick={handleShowForm}> Hide Form / Add New Food </Button>

      {showForm && <AddFoodForm addEntry={addFood} />}
      {/* Display Search component here */}
      <Search filterSearch={filterFood} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}

        {(foodList.length && (
          <div className="food-box">
            {foodList.map((food) => {
              const { name, image, calories, servings } = food;
              return (
                <FoodBox
                  deleteEntry={deleteFoodEntry}
                  key={name}
                  food={{
                    name: name,
                    calories: calories,
                    image: image,
                    servings: servings,
                  }}
                />
              );
            })}
          </div>
        )) || <h1>NO Food Entries</h1>}
      </Row>
    </div>
  );
};

export default App;
