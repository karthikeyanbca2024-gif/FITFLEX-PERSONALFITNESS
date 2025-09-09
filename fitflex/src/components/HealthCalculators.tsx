import React, { useState } from 'react';
import { Calculator, Activity, Heart, Zap } from 'lucide-react';

const HealthCalculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState('bmi');
  const [bmiData, setBmiData] = useState({ height: '', weight: '', result: null as number | null });
  const [bmrData, setBmrData] = useState({ age: '', gender: 'male', height: '', weight: '', result: null as number | null });
  const [bodyFatData, setBodyFatData] = useState({ waist: '', neck: '', height: '', gender: 'male', result: null as number | null });

  const calculateBMI = () => {
    const height = parseFloat(bmiData.height) / 100; // Convert cm to m
    const weight = parseFloat(bmiData.weight);
    if (height && weight) {
      const bmi = weight / (height * height);
      setBmiData({ ...bmiData, result: Math.round(bmi * 10) / 10 });
    }
  };

  const calculateBMR = () => {
    const age = parseFloat(bmrData.age);
    const height = parseFloat(bmrData.height);
    const weight = parseFloat(bmrData.weight);
    
    if (age && height && weight) {
      let bmr;
      if (bmrData.gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      setBmrData({ ...bmrData, result: Math.round(bmr) });
    }
  };

  const calculateBodyFat = () => {
    const waist = parseFloat(bodyFatData.waist);
    const neck = parseFloat(bodyFatData.neck);
    const height = parseFloat(bodyFatData.height);
    
    if (waist && neck && height) {
      let bodyFat;
      if (bodyFatData.gender === 'male') {
        bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
      } else {
        const hip = waist; // Simplified for demo
        bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(height)) - 450;
      }
      setBodyFatData({ ...bodyFatData, result: Math.max(0, Math.round(bodyFat * 10) / 10) });
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-600' };
    if (bmi < 25) return { category: 'Normal weight', color: 'text-green-600' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-600' };
    return { category: 'Obese', color: 'text-red-600' };
  };

  const tabs = [
    { id: 'bmi', name: 'BMI Calculator', icon: Calculator },
    { id: 'bmr', name: 'BMR Calculator', icon: Zap },
    { id: 'bodyfat', name: 'Body Fat Calculator', icon: Activity }
  ];

  return (
    <section id="calculators" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Calculators</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your health metrics with our professional-grade calculators and get personalized insights.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* BMI Calculator */}
            {activeTab === 'bmi' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Body Mass Index</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                      <input
                        type="number"
                        value={bmiData.height}
                        onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="175"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                      <input
                        type="number"
                        value={bmiData.weight}
                        onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="70"
                      />
                    </div>
                    <button
                      onClick={calculateBMI}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      Calculate BMI
                    </button>
                  </div>

                  {bmiData.result && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Your BMI Result</h4>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{bmiData.result}</div>
                      <div className={`font-medium ${getBMICategory(bmiData.result).color}`}>
                        {getBMICategory(bmiData.result).category}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3768593/pexels-photo-3768593.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Health measurement"
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                </div>
              </div>
            )}

            {/* BMR Calculator */}
            {activeTab === 'bmr' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Basal Metabolic Rate</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                        <input
                          type="number"
                          value={bmrData.age}
                          onChange={(e) => setBmrData({ ...bmrData, age: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="25"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                        <select
                          value={bmrData.gender}
                          onChange={(e) => setBmrData({ ...bmrData, gender: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                      <input
                        type="number"
                        value={bmrData.height}
                        onChange={(e) => setBmrData({ ...bmrData, height: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="175"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                      <input
                        type="number"
                        value={bmrData.weight}
                        onChange={(e) => setBmrData({ ...bmrData, weight: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="70"
                      />
                    </div>
                    <button
                      onClick={calculateBMR}
                      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                    >
                      Calculate BMR
                    </button>
                  </div>

                  {bmrData.result && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Your BMR Result</h4>
                      <div className="text-3xl font-bold text-green-600 mb-2">{bmrData.result}</div>
                      <div className="text-gray-600">calories per day</div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Metabolic rate measurement"
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                </div>
              </div>
            )}

            {/* Body Fat Calculator */}
            {activeTab === 'bodyfat' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Body Fat Percentage</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                      <select
                        value={bodyFatData.gender}
                        onChange={(e) => setBodyFatData({ ...bodyFatData, gender: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                      <input
                        type="number"
                        value={bodyFatData.height}
                        onChange={(e) => setBodyFatData({ ...bodyFatData, height: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="175"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Waist (cm)</label>
                      <input
                        type="number"
                        value={bodyFatData.waist}
                        onChange={(e) => setBodyFatData({ ...bodyFatData, waist: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="85"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Neck (cm)</label>
                      <input
                        type="number"
                        value={bodyFatData.neck}
                        onChange={(e) => setBodyFatData({ ...bodyFatData, neck: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="37"
                      />
                    </div>
                    <button
                      onClick={calculateBodyFat}
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                    >
                      Calculate Body Fat
                    </button>
                  </div>

                  {bodyFatData.result && (
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Your Body Fat Result</h4>
                      <div className="text-3xl font-bold text-purple-600 mb-2">{bodyFatData.result}%</div>
                      <div className="text-gray-600">body fat percentage</div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Body composition measurement"
                    className="rounded-lg shadow-lg w-full max-w-md"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCalculators;