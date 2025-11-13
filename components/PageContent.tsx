
import React from 'react';
import type { Page, PageElement, TextElement, QuillElement } from '../types';

const TextBlock: React.FC<{ element: TextElement }> = ({ element }) => (
  <div dangerouslySetInnerHTML={{ __html: element.content }} />
);

const QuillEditor: React.FC<{ element: QuillElement }> = ({ element }) => (
  <div className="mt-8">
    <label className="block text-md font-semibold text-text-primary mb-2">{element.question}</label>
    <div 
      className="bg-white rounded-lg border border-border-color min-h-[200px] p-4 text-text-secondary shadow-sm"
      aria-label={`Editor for question: ${element.question}`}
    >
      {/* Quill editor will be mounted here */}
      Hier kommt Ihre Antwort...
    </div>
  </div>
);

const HelpSection: React.FC<{ helpText: string }> = ({ helpText }) => (
    <details className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <summary className="font-semibold text-blue-800 cursor-pointer">Mehr Informationen</summary>
        <div className="mt-2 text-blue-700 prose" dangerouslySetInnerHTML={{ __html: helpText }} />
    </details>
);

interface PageContentProps {
  page: Page;
}

export const PageContent: React.FC<PageContentProps> = ({ page }) => {
  return (
    <div className="animate-fade-in">
      <header className="mb-8 pb-4 border-b border-border-color">
          <h1 className="text-4xl font-extrabold text-text-primary tracking-tight">{page.title}</h1>
      </header>
      
      {page.helpText && <HelpSection helpText={page.helpText} />}

      {page.elements.map((element, index) => {
        const key = `${page.id}-element-${index}`;
        switch (element.type) {
          case 'text':
            return <TextBlock key={key} element={element as TextElement} />;
          case 'quill':
            return <QuillEditor key={key} element={element as QuillElement} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
