
import React from 'react';

interface NavigationControlsProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
}

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

export const NavigationControls: React.FC<NavigationControlsProps> = ({ currentStep, totalSteps, onPrev, onNext }) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div id="stepper-navigation-controls" className="flex justify-between items-center">
      <button
        onClick={onPrev}
        disabled={isFirstStep}
        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ArrowLeftIcon />
        Zurück
      </button>
      
      <span className="text-sm font-medium text-text-secondary">
        Schritt {currentStep + 1} von {totalSteps}
      </span>

      <button
        onClick={onNext}
        disabled={isLastStep}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-focus disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Weiter
        <ArrowRightIcon />
      </button>
    </div>
  );
};
