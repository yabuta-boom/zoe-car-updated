import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarDetailsPage from './pages/CarDetailsPage';
import CarMoreDetailsPage from './CarMoreDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/car-details/:id" element={<CarDetailsPage />} />
        <Route path="/car-details/:id/more-details" element={<CarMoreDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
```
import React from 'react';

const CarMoreDetailsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">More Details</h1>
      <p>This is the Car More Details Page.</p>
    </div>
  );
};

export default CarMoreDetailsPage;