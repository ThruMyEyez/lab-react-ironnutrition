import { useState } from 'react';
import { Divider, Input } from 'antd';

const AddFoodForm = ({ addEntry }) => {
  const formObj = {
      name: '',
      image: '',
      calories: '',
      servings: '',
    },
    [form, setForm] = useState(formObj);

  const handleChange = (e) => {
    const name = e.target.name;
    const input = e.target.value;
    setForm({ ...form, [name]: input });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>
      <label>
        Name
        <Input
          placeholder="Input Food Name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Image
        <Input
          placeholder="Input Food Image Url"
          name="image"
          type="text"
          value={form.image}
          onChange={handleChange}
        />
      </label>

      <label>
        Calories
        <Input
          placeholder="Input Calories x Serving"
          name="calories"
          type="number"
          value={form.calories}
          onChange={handleChange}
        />
      </label>

      <label>
        Servings
        <Input
          placeholder="Input amount of servings"
          name="servings"
          type="number"
          value={form.servings}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Create</button>
    </form>
  );
};

export default AddFoodForm;
