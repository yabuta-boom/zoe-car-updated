import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-primary-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Us</h1>
          <p className="text-lg text-neutral-200 max-w-2xl mx-auto">
            Learn more about our mission, values, and the team behind Zoe Car.
          </p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Text Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg text-neutral-600 mb-6">
                At Zoe Car, we are passionate about providing luxury vehicles and exceptional customer service. Our mission is to make your car-buying experience seamless and enjoyable.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  Customer Satisfaction
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  Integrity and Transparency
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  Innovation and Excellence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-sm text-neutral-500">CEO & Founder</p>
            </div>
            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-sm text-neutral-500">Head of Sales</p>
            </div>
            {/* Team Member */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Emily Johnson</h3>
              <p className="text-sm text-neutral-500">Customer Support Lead</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;