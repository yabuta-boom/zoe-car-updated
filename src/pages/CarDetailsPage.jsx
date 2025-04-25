import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const mockInventory = [
  {
    id: 1,
    name: 'Tesla Model S',
    price: 79990,
    year: 2023,
    mileage: 1200,
    description: 'The Tesla Model S sets an industry standard for performance and range.',
  },
  // Add more mock cars here
];

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const selectedCar = mockInventory.find((item) => item.id === parseInt(id));
    setCar(selectedCar || null);
  }, [id]);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{car.name}</h1>
      <p>Price: ${car.price}</p>
      <p>Year: {car.year}</p>
      <p>Mileage: {car.mileage} miles</p>
      <p>{car.description}</p>
    </div>
  );
};

export default CarDetailsPage;