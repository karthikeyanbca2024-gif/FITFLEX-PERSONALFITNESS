import React, { useState } from 'react';
import { TrendingUp, Calendar, Target, Award } from 'lucide-react';

const ProgressTracking: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState('weight');

  const metrics = [
    { id: 'weight', name: 'Weight Loss', icon: TrendingUp, color: 'blue' },
    { id: 'strength', name: 'Strength Gains', icon: Award, color: 'purple' },
    { id: 'cardio', name: 'Cardio Endurance', icon: Target, color: 'green' }
  ];

  const progressData = {
    weight: {
      current: 72,
      target: 68,
      start: 78,
      unit: 'kg',
      progress: 77,
      chart: [78, 77, 75, 74, 73, 72],
      milestones: [
        { date: 'Week 1', achievement: 'Lost 1kg', status: 'completed' },
        { date: 'Week 3', achievement: 'Lost 3kg', status: 'completed' },
        { date: 'Week 6', achievement: 'Lost 6kg', status: 'current' },
        { date: 'Week 8', achievement: 'Reach goal weight', status: 'upcoming' }
      ]
    },
    strength: {
      current: 85,
      target: 100,
      start: 60,
      unit: 'kg bench press',
      progress: 62,
      chart: [60, 65, 70, 75, 80, 85],
      milestones: [
        { date: 'Month 1', achievement: '70kg bench press', status: 'completed' },
        { date: 'Month 2', achievement: '80kg bench press', status: 'completed' },
        { date: 'Month 3', achievement: '85kg bench press', status: 'current' },
        { date: 'Month 4', achievement: '100kg bench press', status: 'upcoming' }
      ]
    },
    cardio: {
      current: 42,
      target: 30,
      start: 50,
      unit: 'min 5K time',
      progress: 67,
      chart: [50, 48, 46, 44, 43, 42],
      milestones: [
        { date: 'Week 2', achievement: 'Sub 45 min 5K', status: 'completed' },
        { date: 'Week 4', achievement: 'Sub 40 min 5K', status: 'completed' },
        { date: 'Week 6', achievement: 'Sub 35 min 5K', status: 'current' },
        { date: 'Week 8', achievement: 'Sub 30 min 5K', status: 'upcoming' }
      ]
    }
  };

  const currentData = progressData[activeMetric as keyof typeof progressData];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'current': return 'bg-blue-100 text-blue-800';
      case 'upcoming': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Progress Tracking</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your health and fitness progress with detailed analytics and milestone tracking.
          </p>
        </div>

        {/* Metric Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-200 inline-flex">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setActiveMetric(metric.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeMetric === metric.id
                    ? `bg-${metric.color}-600 text-white shadow-sm`
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <metric.icon className="h-5 w-5" />
                <span>{metric.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Progress Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{metrics.find(m => m.id === activeMetric)?.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: Today</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{currentData.start}</div>
                  <div className="text-sm text-gray-600">Starting</div>
                  <div className="text-xs text-gray-500">{currentData.unit}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{currentData.current}</div>
                  <div className="text-sm text-gray-600">Current</div>
                  <div className="text-xs text-gray-500">{currentData.unit}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">{currentData.target}</div>
                  <div className="text-sm text-gray-600">Target</div>
                  <div className="text-xs text-gray-500">{currentData.unit}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress towards goal</span>
                  <span>{currentData.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${currentData.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Simple Chart Visualization */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Progress Chart</h4>
                <div className="flex items-end space-x-2 h-32">
                  {currentData.chart.map((value, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-md w-full transition-all duration-500"
                        style={{ 
                          height: `${(value - Math.min(...currentData.chart)) / (Math.max(...currentData.chart) - Math.min(...currentData.chart)) * 100}%`,
                          minHeight: '10px'
                        }}
                      ></div>
                      <div className="text-xs text-gray-600 mt-2">W{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievement Gallery */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Achievement Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'First Week', image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { name: 'Month 1', image: 'https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { name: 'Halfway Point', image: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=300' },
                  { name: 'Current', image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=300' }
                ].map((achievement, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <img
                      src={achievement.image}
                      alt={achievement.name}
                      className="w-full h-24 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all duration-200 flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {achievement.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones Sidebar */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Milestones</h3>
            <div className="space-y-4">
              {currentData.milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-3 h-3 rounded-full mt-2 ${
                    milestone.status === 'completed' ? 'bg-green-500' :
                    milestone.status === 'current' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}></div>
                  <div className="flex-1">
                    <div className={`px-3 py-2 rounded-lg ${getStatusColor(milestone.status)}`}>
                      <div className="font-medium">{milestone.date}</div>
                      <div className="text-sm">{milestone.achievement}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">Next Reward</span>
              </div>
              <p className="text-sm text-green-700">
                Complete your next milestone to unlock a premium workout plan!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracking;