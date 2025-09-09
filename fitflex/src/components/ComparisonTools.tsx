import React, { useState } from 'react';
import { Scale, Clock, Target, Star } from 'lucide-react';

const ComparisonTools: React.FC = () => {
  const [activeComparison, setActiveComparison] = useState('diets');

  const dietPlans = [
    {
      name: 'Mediterranean Diet',
      rating: 4.8,
      duration: '12 weeks',
      calories: '1800-2200',
      difficulty: 'Easy',
      price: '$89/month',
      pros: ['Heart healthy', 'Sustainable', 'Diverse foods'],
      cons: ['Higher cost', 'Prep time'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Keto Diet',
      rating: 4.5,
      duration: '8 weeks',
      calories: '1500-1800',
      difficulty: 'Hard',
      price: '$67/month',
      pros: ['Fast weight loss', 'Mental clarity', 'Appetite control'],
      cons: ['Restrictive', 'Keto flu', 'Social limits'],
      image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Intermittent Fasting',
      rating: 4.6,
      duration: 'Ongoing',
      calories: '1600-2000',
      difficulty: 'Medium',
      price: 'Free',
      pros: ['Simple', 'Flexible', 'No food restrictions'],
      cons: ['Hunger periods', 'Social challenges'],
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const workoutPlans = [
    {
      name: 'HIIT Training',
      rating: 4.7,
      duration: '30 minutes',
      frequency: '4x/week',
      equipment: 'Minimal',
      level: 'Intermediate',
      calories: '400-600/session',
      pros: ['Time efficient', 'Burns fat', 'Improves cardio'],
      cons: ['High intensity', 'Recovery needed'],
      image: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Strength Training',
      rating: 4.9,
      duration: '60 minutes',
      frequency: '3x/week',
      equipment: 'Gym/Weights',
      level: 'Beginner-Advanced',
      calories: '300-500/session',
      pros: ['Builds muscle', 'Bone health', 'Metabolism boost'],
      cons: ['Equipment needed', 'Learning curve'],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Yoga Flow',
      rating: 4.4,
      duration: '45 minutes',
      frequency: '5x/week',
      equipment: 'Yoga mat',
      level: 'All levels',
      calories: '200-400/session',
      pros: ['Flexibility', 'Stress relief', 'Low impact'],
      cons: ['Slower results', 'Less cardio'],
      image: 'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const supplements = [
    {
      name: 'Whey Protein',
      rating: 4.6,
      price: '$45',
      serving: '30g',
      protein: '25g',
      calories: '120',
      flavors: '8 options',
      pros: ['Complete amino profile', 'Fast absorption', 'Proven results'],
      cons: ['Dairy based', 'Artificial flavors'],
      image: 'https://images.pexels.com/photos/4163799/pexels-photo-4163799.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Plant Protein',
      rating: 4.3,
      price: '$52',
      serving: '32g',
      protein: '22g',
      calories: '130',
      flavors: '5 options',
      pros: ['Vegan friendly', 'Easy digestion', 'Sustainable'],
      cons: ['Incomplete amino profile', 'Gritty texture'],
      image: 'https://images.pexels.com/photos/7262347/pexels-photo-7262347.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Creatine Monohydrate',
      rating: 4.8,
      price: '$28',
      serving: '5g',
      protein: '0g',
      calories: '0',
      flavors: 'Unflavored',
      pros: ['Strength gains', 'Proven research', 'Affordable'],
      cons: ['Water retention', 'Loading phase'],
      image: 'https://images.pexels.com/photos/4164527/pexels-photo-4164527.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const comparisonTypes = [
    { id: 'diets', name: 'Diet Plans', data: dietPlans, icon: Scale },
    { id: 'workouts', name: 'Workout Plans', data: workoutPlans, icon: Target },
    { id: 'supplements', name: 'Supplements', data: supplements, icon: Star }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="compare" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Health Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Side-by-side comparisons of popular diet plans, workout routines, and supplements to help you make informed decisions.
          </p>
        </div>

        {/* Comparison Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-200 inline-flex">
            {comparisonTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveComparison(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeComparison === type.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <type.icon className="h-5 w-5" />
                <span>{type.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {comparisonTypes.find(type => type.id === activeComparison)?.data.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    {renderStars(item.rating)}
                    <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  {'duration' in item && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{item.duration}</span>
                    </div>
                  )}
                  {'frequency' in item && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium">{item.frequency}</span>
                    </div>
                  )}
                  {'calories' in item && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Calories:</span>
                      <span className="font-medium">{item.calories}</span>
                    </div>
                  )}
                  {'price' in item && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Pros:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Cons:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {item.cons.map((con, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTools;