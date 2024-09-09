import React from 'react';
import WhiteCircle from '../../../public/white-circle.png';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs mx-4 mb-8">
            <Image src={WhiteCircle} alt="Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customized Solutions for Unique Business Needs            </h3>
            <p className="text-gray-600">Explanation of feature 1.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs mx-4 mb-8">
            <Image src={WhiteCircle} alt="Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p className="text-gray-600">Explanation of feature 2.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs mx-4 mb-8">
            <Image src={WhiteCircle} alt="Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p className="text-gray-600">Explanation of feature 3.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
