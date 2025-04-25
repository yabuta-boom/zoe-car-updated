import React, { useState } from 'react';

const AdminInventoryPage = ({ onAddCar }) => {
  const [newCar, setNewCar] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    year: '',
    mileage: '',
    features: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleAddCar = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!newCar.name || !newCar.price || !newCar.image || !newCar.year || !newCar.mileage || !newCar.description) {
      alert('Please fill in all required fields.');
      return;
    }

    // Convert features to an array
    const carToAdd = {
      ...newCar,
      id: Date.now(), // Generate a unique ID
      price: parseFloat(newCar.price),
      year: parseInt(newCar.year),
      mileage: parseInt(newCar.mileage),
      features: newCar.features.split(',').map((feature) => feature.trim())
    };

    onAddCar(carToAdd); // Call the function to add the car to the main inventory
    setNewCar({
      id: '',
      name: '',
      price: '',
      image: '',
      year: '',
      mileage: '',
      features: '',
      description: ''
    });
    alert('Car added successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Inventory</h1>
      <form onSubmit={handleAddCar} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Car Name</label>
          <input
            type="text"
            name="name"
            value={newCar.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={newCar.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={newCar.image}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Year</label>
          <input
            type="number"
            name="year"
            value={newCar.year}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Mileage</label>
          <input
            type="number"
            name="mileage"
            value={newCar.mileage}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Features (comma-separated)</label>
          <input
            type="text"
            name="features"
            value={newCar.features}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={newCar.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AdminInventoryPage;