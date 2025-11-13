
import React from 'react';
import type { Page } from '../types';

interface SidebarProps {
  pages: Page[];
  assignmentTitle: string;
  currentPageId: string;
  onNavigate: (index: number) => void;
}

const CircleCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.06-1.06L11.25 12.94l-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l3.75-3.75Z" clipRule="evenodd" />
    </svg>
);


export const Sidebar: React.FC<SidebarProps> = ({ pages, assignmentTitle, currentPageId, onNavigate }) => {
  return (
    <aside id="stepper-sidebar" className="w-64 lg:w-72 bg-sidebar-bg border-r border-border-color flex flex-col flex-shrink-0 h-full">
      <div className="p-6 border-b border-border-color">
        <h1 className="text-xl font-bold text-text-primary">{assignmentTitle}</h1>
        <p className="text-sm text-text-secondary mt-1">Fortschritt</p>
      </div>
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul>
          {pages.map((page, index) => {
            const isActive = page.id === currentPageId;
            const isCompleted = index < pages.findIndex(p => p.id === currentPageId);

            return (
              <li key={page.id} className="mb-1">
                <button
                  onClick={() => onNavigate(index)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-200 flex items-center text-sm font-medium ${
                    isActive
                      ? 'bg-sidebar-active text-primary'
                      : 'text-text-secondary hover:bg-gray-100 hover:text-text-primary'
                  }`}
                >
                  {isCompleted ? (
                     <CircleCheckIcon className="w-5 h-5 mr-3 text-secondary"/>
                  ) : (
                     <div className={`w-5 h-5 mr-3 flex items-center justify-center rounded-full border-2 ${isActive ? 'border-primary' : 'border-gray-300'}`}>
                       <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-primary' : 'bg-transparent'}`}></span>
                     </div>
                  )}

                  <span className="flex-1">{page.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
       <div className="p-4 border-t border-border-color">
         <p className="text-xs text-gray-500">&copy; 2024 Assignment Corp.</p>
       </div>
    </aside>
  );
};
