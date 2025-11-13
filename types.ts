
export interface TextElement {
  type: 'text';
  content: string;
}

export interface QuillElement {
  type: 'quill';
  id: string;
  question: string;
}

export type PageElement = TextElement | QuillElement;

export interface Page {
  id: string;
  title: string;
  helpText?: string;
  elements: PageElement[];
}

export interface Assignment {
  assignmentId: string;
  assignmentTitle: string;
  pages: Page[];
}
