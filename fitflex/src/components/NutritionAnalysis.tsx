import React, { useState } from 'react';
import { Apple, Utensils, TrendingUp, Award } from 'lucide-react';

const NutritionAnalysis: React.FC = () => {
  const [activeFood, setActiveFood] = useState('chicken');

  const nutritionData = {
    chicken: {
      name: 'Chicken Breast',
      image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600',
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      sodium: 74,
      vitamins: ['B6', 'Niacin', 'Phosphorus'],
      benefits: ['High protein', 'Low fat', 'Muscle building', 'Weight loss friendly']
    },
    salmon: {
      name: 'Atlantic Salmon',
      image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600',
      calories: 208,
      protein: 25,
      carbs: 0,
      fat: 12,
      fiber: 0,
      sodium: 82,
      vitamins: ['Omega-3', 'B12', 'Vitamin D'],
      benefits: ['Heart healthy', 'Brain function', 'Anti-inflammatory', 'High protein']
    },
    avocado: {
      name: 'Avocado',
      image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=600',
      calories: 234,
      protein: 4,
      carbs: 17,
      fat: 21,
      fiber: 13,
      sodium: 11,
      vitamins: ['Vitamin K', 'Folate', 'Vitamin E'],
      benefits: ['Healthy fats', 'High fiber', 'Nutrient dense', 'Heart healthy']
    },
    quinoa: {
      name: 'Quinoa',
      image: 'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?auto=compress&cs=tinysrgb&w=600',
      calories: 222,
      protein: 8,
      carbs: 39,
      fat: 6,
      fiber: 5,
      sodium: 13,
      vitamins: ['Magnesium', 'Iron', 'Vitamin B6'],
      benefits: ['Complete protein', 'Gluten-free', 'High fiber', 'Complex carbs']
    }
  };

  const foods = Object.keys(nutritionData);
  const currentFood = nutritionData[activeFood as keyof typeof nutritionData];

  const mealPlans = [
    {
      name: 'High Protein Plan',
      meals: 5,
      calories: 2200,
      protein: 180,
      carbs: 165,
      fat: 73,
      price: '$12/day',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Balanced Nutrition',
      meals: 3,
      calories: 1800,
      protein: 135,
      carbs: 202,
      fat: 60,
      price: '$9/day',
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Low Carb Plan',
      meals: 4,
      calories: 1600,
      protein: 120,
      carbs: 80,
      fat: 89,
      price: '$10/day',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="nutrition" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nutrition Analysis & Comparison</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze food nutrition profiles and compare meal plans to optimize your dietary choices.
          </p>
        </div>

        {/* Food Nutrition Comparison */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Food Nutrition Profile</h3>
          
          {/* Food Selection */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              {foods.map((food) => (
                <button
                  key={food}
                  onClick={() => setActiveFood(food)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                    activeFood === food
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {nutritionData[food as keyof typeof nutritionData].name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h4 className="text-3xl font-bold text-gray-900 mb-2">{currentFood.name}</h4>
                <p className="text-gray-600">Per 100g serving</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{currentFood.calories}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{currentFood.protein}g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-600">{currentFood.carbs}g</div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">{currentFood.fat}g</div>
                  <div className="text-sm text-gray-600">Fat</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Key Vitamins & Minerals</h5>
                  <div className="flex flex-wrap gap-2">
                    {currentFood.vitamins.map((vitamin, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {vitamin}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Health Benefits</h5>
                  <div className="space-y-2">
                    {currentFood.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={currentFood.image}
                  alt={currentFood.name}
                  className="rounded-2xl shadow-xl w-full max-w-md"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-800">Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meal Plan Comparison */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meal Plan Comparison</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {mealPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center bg-gray-50 p-3 rounded-lg">
                      <div className="font-bold text-blue-600">{plan.calories}</div>
                      <div className="text-gray-600">Calories</div>
                    </div>
                    <div className="text-center bg-gray-50 p-3 rounded-lg">
                      <div className="font-bold text-green-600">{plan.protein}g</div>
                      <div className="text-gray-600">Protein</div>
                    </div>
                    <div className="text-center bg-gray-50 p-3 rounded-lg">
                      <div className="font-bold text-yellow-600">{plan.carbs}g</div>
                      <div className="text-gray-600">Carbs</div>
                    </div>
                    <div className="text-center bg-gray-50 p-3 rounded-lg">
                      <div className="font-bold text-purple-600">{plan.fat}g</div>
                      <div className="text-gray-600">Fat</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Daily meals:</span>
                    <span className="font-medium">{plan.meals}</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-gray-900">{plan.price}</span>
                      <span className="text-sm text-gray-600">per day</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionAnalysis;