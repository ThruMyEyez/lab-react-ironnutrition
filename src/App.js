import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
// To start using the pre-made Ant Design components we must first import them:
//import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { Row, Divider, Button } from 'antd';

import foods from './foods.json';

const App = () => {
  const [foodList, setFoodList] = useState(foods);

  const addFood = (newFoodItem) => {
    setFoodList((prev) => [...prev, newFoodItem]);
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

  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>
      <AddFoodForm addEntry={addFood} />
      {/* Display Search component here */}
      <Search filterSearch={filterFood} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        <div className="food-box">
          {foodList.map((food) => {
            const { name, image, calories, servings } = food;
            return (
              <FoodBox
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
      </Row>
    </div>
    /* <div className="App">
      <h2>Food List</h2>

      {foods.map((food) => {
        const { name, image, calories, servings } = food;
        return (
          <FoodBox
            food={{
              name: name,
              calories: calories,
              image: image,
              servings: servings,
            }}
          />
        );
      })}
    </div> */
  );
};

export default App;
/* 
            <img src={image} alt={name} width={120} />
*/
