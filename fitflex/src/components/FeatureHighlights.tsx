import React from 'react';
import { Shield, Users, Clock, TrendingUp, Award, Heart } from 'lucide-react';

const FeatureHighlights: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Science-Based',
      description: 'All our recommendations are backed by peer-reviewed research and medical expertise.',
      image: 'https://images.pexels.com/photos/3825328/pexels-photo-3825328.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '500+ Studies'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of users sharing their health journeys and success stories.',
      image: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '50K+ Users'
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Get instant updates on your progress with live data synchronization.',
      image: 'https://images.pexels.com/photos/4473790/pexels-photo-4473790.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '24/7 Sync'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Detailed insights and trends to help you optimize your health decisions.',
      image: 'https://images.pexels.com/photos/3825333/pexels-photo-3825333.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '15+ Metrics'
    },
    {
      icon: Award,
      title: 'Expert Verified',
      description: 'All content reviewed by certified nutritionists and fitness professionals.',
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: '100+ Experts'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Customized recommendations based on your unique health profile and goals.',
      image: 'https://images.pexels.com/photos/3825521/pexels-photo-3825521.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: 'Your Journey'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FitFlex?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes our health comparison platform the trusted choice for thousands of users worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-blue-600">{feature.stats}</div>
                    <div className="text-xs text-gray-500">and counting</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>

                <div className="pt-2">
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1">
                    <span>Learn More</span>
                    <TrendingUp className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Comparisons Made</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Diet Plans</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;