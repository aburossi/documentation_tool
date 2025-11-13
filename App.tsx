
import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { PageContent } from './components/PageContent';
import { NavigationControls } from './components/NavigationControls';
import type { Assignment } from './types';
import { mockAssignmentData } from './constants';

const App: React.FC = () => {
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching assignment data
    const loadAssignment = () => {
      try {
        setAssignment(mockAssignmentData);
      } catch (error) {
        console.error("Failed to load assignment data", error);
      } finally {
        setLoading(false);
      }
    };
    loadAssignment();
  }, []);

  const navigateToStep = useCallback((index: number) => {
    if (assignment && index >= 0 && index < assignment.pages.length) {
      setCurrentStepIndex(index);
    }
  }, [assignment]);

  const handleNext = useCallback(() => {
    navigateToStep(currentStepIndex + 1);
  }, [currentStepIndex, navigateToStep]);

  const handlePrev = useCallback(() => {
    navigateToStep(currentStepIndex - 1);
  }, [currentStepIndex, navigateToStep]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-xl font-semibold text-gray-700">Loading Assignment...</div>
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-xl font-semibold text-red-500">Failed to load assignment.</div>
      </div>
    );
  }

  const currentPage = assignment.pages[currentStepIndex];

  return (
    <div className="flex h-screen bg-background text-text-primary font-sans">
      <Sidebar 
        pages={assignment.pages}
        assignmentTitle={assignment.assignmentTitle}
        currentPageId={currentPage.id}
        onNavigate={navigateToStep}
      />
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
             <PageContent key={currentPage.id} page={currentPage} />
          </div>
        </main>
        <footer className="border-t border-border-color bg-white p-4">
          <div className="max-w-4xl mx-auto">
            <NavigationControls
              currentStep={currentStepIndex}
              totalSteps={assignment.pages.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
