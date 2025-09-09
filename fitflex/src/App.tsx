import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HealthCalculators from './components/HealthCalculators';
import ComparisonTools from './components/ComparisonTools';
import NutritionAnalysis from './components/NutritionAnalysis';
import ExerciseComparison from './components/ExerciseComparison';
import ProductComparison from './components/ProductComparison';
import ProgressTracking from './components/ProgressTracking';
import FeatureHighlights from './components/FeatureHighlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HealthCalculators />
      <ComparisonTools />
      <NutritionAnalysis />
      <ExerciseComparison />
      <ProductComparison />
      <ProgressTracking />
      <FeatureHighlights />
      <Footer />
    </div>
  );
}

export default App;