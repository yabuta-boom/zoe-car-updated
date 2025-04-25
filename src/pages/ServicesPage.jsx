import React from 'react';
import { Check } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Car Maintenance',
      description: 'Keep your car in top condition with our comprehensive maintenance services.',
      icon: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      title: 'Car Financing',
      description: 'Flexible financing options to help you drive your dream car.',
      icon: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      title: 'Insurance Assistance',
      description: 'Get the best insurance deals with our expert assistance.',
      icon: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      title: 'Trade-In Services',
      description: 'Trade in your old car for a new one with ease.',
      icon: 'https://via.placeholder.com/100'
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto">
            Discover the wide range of services we offer to make your car ownership experience seamless.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;