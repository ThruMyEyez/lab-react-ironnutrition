// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
const AddFoodForm = ({ addEntry }) => {
  const formObj = {
      name: '',
      image: '',
      calories: '',
      servings: '',
    },
    [form, setForm] = useState(formObj);

  const handleChange = (e) => {
    setForm((prev) => {
      const input = e.target.value;
      return { ...prev, [e.target.name]: input };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const entry = {
      name: form.name,
      image: form.image,
      calories: form.calories,
      servings: form.servings,
    };
    addEntry(entry);
    setForm(formObj);
  };
  return (
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label>Image</label>
      {/* render antd <Input /> type="text" here */}

      <Input
        name="image"
        type="text"
        value={form.image}
        onChange={handleChange}
      />
      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}

      <Input
        name="calories"
        type="number"
        value={form.calories}
        onChange={handleChange}
      />
      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}

      <Input
        name="servings"
        type="number"
        value={form.servings}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">
        Create
      </button>
    </form>
  );
};

export default AddFoodForm;
