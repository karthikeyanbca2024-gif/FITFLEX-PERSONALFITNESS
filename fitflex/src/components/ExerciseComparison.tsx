import React, { useState } from 'react';
import { Dumbbell, Clock, Flame, BarChart3 } from 'lucide-react';

const ExerciseComparison: React.FC = () => {
  const [selectedExercises, setSelectedExercises] = useState<string[]>([]);

  const exercises = [
    {
      id: 'running',
      name: 'Running',
      type: 'Cardio',
      calories: 600,
      duration: 60,
      difficulty: 'Medium',
      equipment: 'None',
      muscles: ['Legs', 'Core', 'Cardiovascular'],
      image: 'https://images.pexels.com/photos/2402537/pexels-photo-2402537.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'deadlift',
      name: 'Deadlift',
      type: 'Strength',
      calories: 300,
      duration: 30,
      difficulty: 'Hard',
      equipment: 'Barbell',
      muscles: ['Back', 'Legs', 'Core'],
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'yoga',
      name: 'Yoga Flow',
      type: 'Flexibility',
      calories: 200,
      duration: 45,
      difficulty: 'Easy',
      equipment: 'Yoga Mat',
      muscles: ['Full Body', 'Core', 'Flexibility'],
      image: 'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'swimming',
      name: 'Swimming',
      type: 'Cardio',
      calories: 500,
      duration: 45,
      difficulty: 'Medium',
      equipment: 'Pool',
      muscles: ['Full Body', 'Cardiovascular'],
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'cycling',
      name: 'Cycling',
      type: 'Cardio',
      calories: 400,
      duration: 60,
      difficulty: 'Easy',
      equipment: 'Bicycle',
      muscles: ['Legs', 'Core', 'Cardiovascular'],
      image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'squats',
      name: 'Squats',
      type: 'Strength',
      calories: 250,
      duration: 20,
      difficulty: 'Medium',
      equipment: 'Bodyweight',
      muscles: ['Legs', 'Glutes', 'Core'],
      image: 'https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const toggleExerciseSelection = (exerciseId: string) => {
    setSelectedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const selectedExerciseData = exercises.filter(ex => selectedExercises.includes(ex.id));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Cardio': return 'text-blue-600 bg-blue-100';
      case 'Strength': return 'text-purple-600 bg-purple-100';
      case 'Flexibility': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="exercise" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Exercise Comparison</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare different exercises and workouts to find the perfect routine for your fitness goals.
          </p>
        </div>

        {/* Exercise Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Select exercises to compare:</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <div
                key={exercise.id}
                onClick={() => toggleExerciseSelection(exercise.id)}
                className={`cursor-pointer border-2 rounded-xl overflow-hidden transition-all duration-200 ${
                  selectedExercises.includes(exercise.id)
                    ? 'border-blue-500 shadow-lg transform scale-105'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={exercise.image}
                    alt={exercise.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedExercises.includes(exercise.id) && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                      ✓
                    </div>
                  )}
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-semibold text-gray-900 mb-1">{exercise.name}</h4>
                  <div className="flex space-x-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exercise.type)}`}>
                      {exercise.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {exercise.calories} cal • {exercise.duration} min
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Results */}
        {selectedExercises.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Exercise Comparison Results</h3>
              <p className="text-blue-100">Comparing {selectedExercises.length} selected exercises</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Exercise</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Calories/Hour</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Duration</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Difficulty</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Equipment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {selectedExerciseData.map((exercise, index) => (
                    <tr key={exercise.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={exercise.image}
                            alt={exercise.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{exercise.name}</div>
                            <div className="text-sm text-gray-600">{exercise.muscles.join(', ')}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exercise.type)}`}>
                          {exercise.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Flame className="h-4 w-4 text-orange-500" />
                          <span className="font-medium">{Math.round(exercise.calories * 60 / exercise.duration)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span>{exercise.duration} min</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                          {exercise.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-600">
                        {exercise.equipment}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExerciseComparison;