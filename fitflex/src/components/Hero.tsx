import React from 'react';
import { Calculator, BarChart3, Users, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const features = [
    { icon: Calculator, title: 'Health Calculators', desc: 'BMI, BMR, Body Fat' },
    { icon: BarChart3, title: 'Progress Tracking', desc: 'Visual Analytics' },
    { icon: Users, title: 'Compare Plans', desc: 'Diet & Exercise' },
    { icon: Target, title: 'Goal Setting', desc: 'Personalized Targets' }
  ];

  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Your Health
                <span className="text-blue-600"> Comparison</span>
                <br />
                Platform
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Compare diet plans, exercise routines, supplements, and track your health metrics with our comprehensive comparison tools and calculators.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Comparing
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                View Calculators
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Health and fitness tracking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">2,847</p>
                  <p className="text-sm text-gray-600">Health Comparisons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;