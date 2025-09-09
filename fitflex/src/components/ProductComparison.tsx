import React, { useState } from 'react';
import { Star, ShoppingCart, CheckCircle, XCircle, Filter } from 'lucide-react';

const ProductComparison: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('protein');
  const [sortBy, setSortBy] = useState('rating');

  const products = {
    protein: [
      {
        id: 1,
        name: 'Premium Whey Isolate',
        brand: 'FitLab',
        rating: 4.8,
        price: 49.99,
        servings: 30,
        protein: 25,
        calories: 110,
        image: 'https://images.pexels.com/photos/4163799/pexels-photo-4163799.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Fast absorption', 'Low lactose', '90% protein'],
        verified: true
      },
      {
        id: 2,
        name: 'Plant-Based Protein',
        brand: 'GreenFit',
        rating: 4.6,
        price: 54.99,
        servings: 28,
        protein: 22,
        calories: 120,
        image: 'https://images.pexels.com/photos/7262347/pexels-photo-7262347.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Vegan', 'Organic', 'No artificial flavors'],
        verified: true
      },
      {
        id: 3,
        name: 'Casein Protein',
        brand: 'NightFuel',
        rating: 4.4,
        price: 45.99,
        servings: 32,
        protein: 24,
        calories: 130,
        image: 'https://images.pexels.com/photos/4164527/pexels-photo-4164527.jpeg?auto=compress&cs=tinysrgb&w=400',
        features: ['Slow release', 'Night time', 'Muscle recovery'],
        verified: false
      }
    ],
    equipment: [
      {
        id: 4,
        name: 'Smart Treadmill Pro',
        brand: 'RunTech',
        rating: 4.7,
        price: 1299.99,
        warranty: '5 years',
        features: ['Touch screen', 'AI coaching', 'Incline training'],
        image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=400',
        verified: true
      },
      {
        id: 5,
        name: 'Adjustable Dumbbells',
        brand: 'FlexWeight',
        rating: 4.9,
        price: 299.99,
        warranty: '2 years',
        features: ['5-50 lbs range', 'Space saving', 'Quick adjust'],
        image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
        verified: true
      },
      {
        id: 6,
        name: 'Resistance Bands Set',
        brand: 'FlexBand',
        rating: 4.3,
        price: 29.99,
        warranty: '1 year',
        features: ['Multiple resistance', 'Portable', 'Full body workout'],
        image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=400',
        verified: true
      }
    ]
  };

  const categories = [
    { id: 'protein', name: 'Protein Supplements' },
    { id: 'equipment', name: 'Fitness Equipment' }
  ];

  const currentProducts = products[activeCategory as keyof typeof products];

  const sortedProducts = [...currentProducts].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

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
    <section id="products" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Comparison</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare fitness products, supplements, and equipment to find the best options for your health journey.
          </p>
        </div>

        {/* Category and Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Product Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.verified && (
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                    <CheckCircle className="h-3 w-3" />
                    <span>Verified</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-md">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600">{product.brand}</p>
                </div>

                {activeCategory === 'protein' && (
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="font-bold text-blue-600">{product.protein}g</div>
                      <div className="text-gray-600">Protein</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="font-bold text-green-600">{product.calories}</div>
                      <div className="text-gray-600">Calories</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="font-bold text-purple-600">{product.servings}</div>
                      <div className="text-gray-600">Servings</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="font-bold text-yellow-600">${(product.price / product.servings).toFixed(2)}</div>
                      <div className="text-gray-600">Per serving</div>
                    </div>
                  </div>
                )}

                {activeCategory === 'equipment' && (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Warranty:</span>
                      <span className="font-medium">{product.warranty}</span>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <div className="text-right text-sm text-gray-600">
                      {activeCategory === 'protein' && (
                        <div>${(product.price / product.servings).toFixed(2)} per serving</div>
                      )}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Summary */}
        {sortedProducts.length > 1 && (
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Comparison Summary</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Highest Rated</h4>
                <p className="text-blue-600 font-medium">
                  {sortedProducts.reduce((prev, current) => (prev.rating > current.rating) ? prev : current).name}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Best Value</h4>
                <p className="text-blue-600 font-medium">
                  {sortedProducts.reduce((prev, current) => (prev.price < current.price) ? prev : current).name}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Editor's Choice</h4>
                <p className="text-blue-600 font-medium">
                  {sortedProducts.find(p => p.verified)?.name || sortedProducts[0].name}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductComparison;