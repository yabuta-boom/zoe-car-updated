import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InventoryFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    model: 'All Model',
    year: 'All Year',
    minPrice: '',
    maxPrice: '',
    condition: 'All Conditions',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* Existing Filters */}
      <select
        name="model"
        value={filters.model}
        onChange={handleFilterChange}
        className="p-2 border rounded"
      >
        <option>All Model</option>
        <option>Mercedes-Benz</option>
        <option>BMW</option>
        <option>Audi</option>
      </select>

      <select
        name="year"
        value={filters.year}
        onChange={handleFilterChange}
        className="p-2 border rounded"
      >
        <option>All Year</option>
        <option>2024</option>
        <option>2023</option>
        <option>2022</option>
      </select>

      <input
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleFilterChange}
        placeholder="Min Price"
        className="p-2 border rounded"
      />

      <input
        type="number"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={handleFilterChange}
        placeholder="Max Price"
        className="p-2 border rounded"
      />

      {/* New Condition Filter */}
      <select
        name="condition"
        value={filters.condition}
        onChange={handleFilterChange}
        className="p-2 border rounded"
      >
        <option>All Conditions</option>
        <option>New</option>
        <option>Used</option>
        <option>For Rental</option>
      </select>
    </div>
  );
};

const AdminInventory = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: 89900,
      year: 2024,
      mileage: 12,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
      description: 'A luxury sedan with premium features and exceptional performance.',
      category: 'Luxury Sedan',
      condition: 'New',
    },
    {
      id: 2,
      name: 'BMW 7 Series',
      price: 93400,
      year: 2024,
      mileage: 8,
      image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg',
      description: 'A high-performance luxury car with cutting-edge technology.',
      category: 'Luxury Sedan',
      condition: 'Used',
    },
  ]);

  const [filteredInventory, setFilteredInventory] = useState(inventory);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [imageInputType, setImageInputType] = useState('url'); // 'url' or 'upload'
  const [newCar, setNewCar] = useState({
    name: '',
    price: '',
    year: '',
    mileage: '',
    image: '',
    description: '',
    category: '',
  });

  const toggleDetails = (id) => {
    setExpandedItemId((prev) => (prev === id ? null : id));
  };

  const handleImageInputTypeChange = (type) => {
    setImageInputType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewCar((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCar = () => {
    const newCarData = {
      ...newCar,
      id: inventory.length + 1,
      price: parseFloat(newCar.price),
      mileage: parseInt(newCar.mileage, 10),
    };
    setInventory((prev) => [...prev, newCarData]);
    setNewCar({
      name: '',
      price: '',
      year: '',
      mileage: '',
      image: '',
      description: '',
      category: '',
    });
  };

  const handleFilterChange = (filters) => {
    const filtered = inventory.filter((car) => {
      return (
        (filters.model === 'All Model' || car.name.includes(filters.model)) &&
        (filters.year === 'All Year' || car.year.toString() === filters.year) &&
        (!filters.minPrice || car.price >= parseFloat(filters.minPrice)) &&
        (!filters.maxPrice || car.price <= parseFloat(filters.maxPrice)) &&
        (filters.condition === 'All Conditions' || car.condition === filters.condition)
      );
    });
    setFilteredInventory(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Inventory Management</h1>

      <Link to="/inventory" className="nav-link">
        Our Cars
      </Link>

      {/* Inventory Filters */}
      <InventoryFilters onFilterChange={handleFilterChange} />

      {/* Inventory List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInventory.map((car) => (
          <div key={car.id} className="card border p-4 hover:shadow-lg">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-lg font-bold">{car.name}</h2>
            <p className="text-sm text-gray-600">{car.year} - {car.mileage} miles</p>
            <p className="text-primary-600 font-semibold">${car.price.toLocaleString()}</p>
            <button
              onClick={() => toggleDetails(car.id)}
              className="mt-2 text-blue-500 hover:underline"
            >
              {expandedItemId === car.id ? 'Hide Details' : 'View Details'}
            </button>

            {/* Collapsible Details Section */}
            {expandedItemId === car.id && (
              <div className="mt-4 p-4 border-t">
                <p><strong>Description:</strong> {car.description}</p>
                <p><strong>Category:</strong> {car.category}</p>
                <p><strong>Price:</strong> ${car.price.toLocaleString()}</p>
                <p><strong>Year:</strong> {car.year}</p>
                <p><strong>Mileage:</strong> {car.mileage} miles</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add New Car Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Add New Car</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newCar.name}
            onChange={handleInputChange}
            placeholder="Car Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            value={newCar.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="year"
            value={newCar.year}
            onChange={handleInputChange}
            placeholder="Year"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="mileage"
            value={newCar.mileage}
            onChange={handleInputChange}
            placeholder="Mileage"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="description"
            value={newCar.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="w-full p-2 border rounded col-span-2"
          />
          <input
            type="text"
            name="category"
            value={newCar.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Car Image</h3>
          <div className="flex items-center gap-4 mb-4">
            <label>
              <input
                type="radio"
                name="imageInputType"
                value="url"
                checked={imageInputType === 'url'}
                onChange={() => handleImageInputTypeChange('url')}
              />
              <span className="ml-2">Image URL</span>
            </label>
            <label>
              <input
                type="radio"
                name="imageInputType"
                value="upload"
                checked={imageInputType === 'upload'}
                onChange={() => handleImageInputTypeChange('upload')}
              />
              <span className="ml-2">Upload from Computer</span>
            </label>
          </div>

          {imageInputType === 'url' ? (
            <input
              type="text"
              name="image"
              value={newCar.image}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              className="w-full p-2 border rounded"
            />
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded"
            />
          )}
        </div>

        <button
          onClick={handleAddCar}
          className="mt-4 btn btn-primary"
        >
          Add Car
        </button>
      </div>
    </div>
  );
};

export default AdminInventory;