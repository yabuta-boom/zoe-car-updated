import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Check, Star, ArrowRight, Phone } from 'lucide-react';

const HomePage = () => {
  // Sample featured cars
  const featuredCars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: 89900,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 12,
      features: ['Premium Package', 'Executive Rear Seat', 'Burmester 3D Sound']
    },
    {
      id: 2,
      name: 'BMW 7 Series',
      price: 93400,
      image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 8,
      features: ['M Sport Package', 'Executive Lounge', 'Bowers & Wilkins Sound']
    },
    {
      id: 3,
      name: 'Audi RS e-tron GT',
      price: 104900,
      image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      year: 2024,
      mileage: 5,
      features: ['Carbon Fiber Package', 'Bang & Olufsen Sound', 'Sport Chrono Package']
    }
  ];
  
  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 text-white relative"
        style={{
          backgroundImage: 'url("/public/banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Discover Your Perfect Luxury Driving Experience
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 mb-8">
              Prestige Auto offers exceptional vehicles and unparalleled service for discerning drivers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/inventory" className="btn btn-secondary">
                Browse Inventory
              </Link>
              <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Vehicles</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium vehicles, each representing the pinnacle of automotive excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="card group overflow-hidden">
                {/* Car Image */}
                <div className="h-56 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Car Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <p className="text-lg font-semibold text-primary-600">{formatPrice(car.price)}</p>
                  </div>
                  
                  <div className="flex text-sm text-neutral-500 mb-4">
                    <span className="mr-4">{car.year}</span>
                    <span>{car.mileage.toLocaleString()} miles</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/inventory" className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors">
                    <span>View Details</span>
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/inventory" className="btn btn-primary">
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Prestige Auto</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We've built our reputation on exceptional service and a commitment to quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Car,
                title: 'Premium Selection',
                description: 'Handpicked luxury vehicles representing the finest automotive craftsmanship.'
              },
              {
                icon: Star,
                title: 'Expert Service',
                description: 'Factory-trained technicians providing unparalleled maintenance and support.'
              },
              {
                icon: Check,
                title: 'Verified Quality',
                description: 'Every vehicle undergoes a comprehensive 150-point inspection process.'
              },
              {
                icon: Phone,
                title: 'Dedicated Support',
                description: 'Personal concierge service for all your automotive needs.'
              }
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 px-4 bg-primary-800 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready for Your Luxury Driving Experience?
          </h2>
          <p className="text-neutral-200 text-lg mb-8">
            Contact our team to schedule a personalized consultation or test drive today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
            <a href="tel:5551234567" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;