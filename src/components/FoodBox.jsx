import { Card, Col, Button } from 'antd';

const FoodBox = ({ food, deleteEntry }) => {
  const { image, name, servings, calories } = food;

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 320, margin: 10 }}>
        <img src={image} height={60} alt={name} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary" onClick={deleteEntry} name={name}>
          Delete
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
