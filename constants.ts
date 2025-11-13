
import { Assignment } from './types';

export const mockAssignmentData: Assignment = {
  assignmentId: "komplexe-ausbildungsaufgabe-v2",
  assignmentTitle: "Komplexe Ausbildungsaufgabe",
  pages: [
    {
      id: "aufgabe-und-ziele",
      title: "Aufgabe und Ziele",
      helpText: "<p>Hier finden Sie zusätzliche Informationen zur Beschreibung der Aufgabe und der damit verbundenen Ziele. Lesen Sie diese sorgfältig durch, um die Erwartungen vollständig zu verstehen.</p>",
      elements: [
        { 
          type: "text", 
          content: "<h2 class='text-2xl font-bold text-text-primary mb-4'>Aufgabenbeschreibung</h2><p class='text-text-secondary'>In diesem ersten Schritt geht es darum, die übergeordnete Aufgabe und ihre spezifischen Ziele klar zu definieren. Eine gute Beschreibung ist die Grundlage für den gesamten Lösungsprozess.</p>" 
        },
        { 
          type: "quill", 
          id: "q1_beschreibung", 
          question: "Beschreiben Sie das Ziel der Aufgabe in Ihren eigenen Worten." 
        }
      ]
    },
    {
      id: "schritt-1",
      title: "Schritt 1: Lösungswege",
      elements: [
        {
           type: "text",
           content: "<h2 class='text-2xl font-bold text-text-primary mb-4'>Analyse möglicher Lösungswege</h2><p class='text-text-secondary'>Brainstormen und bewerten Sie verschiedene Ansätze, um die in der ersten Phase definierte Aufgabe zu lösen. Berücksichtigen Sie Vor- und Nachteile jedes Weges.</p>"
        },
        { 
          type: "quill", 
          id: "q2_loesungswege", 
          question: "Welche möglichen Lösungswege gibt es, um das Ziel zu erreichen? Skizzieren Sie mindestens zwei Alternativen." 
        },
        { 
          type: "quill", 
          id: "q3_entscheidung", 
          question: "Für welchen Lösungsweg entscheiden Sie sich und warum? Begründen Sie Ihre Wahl." 
        }
      ]
    },
    {
      id: "schritt-2",
      title: "Schritt 2: Planung",
       helpText: "<p>Eine detaillierte Planung ist entscheidend für den Erfolg. Definieren Sie konkrete Arbeitspakete, schätzen Sie Aufwände und erstellen Sie einen Zeitplan.</p>",
      elements: [
        {
            type: "text",
            content: "<h2 class='text-2xl font-bold text-text-primary mb-4'>Detaillierte Projektplanung</h2><p class='text-text-secondary'>Basierend auf dem gewählten Lösungsweg, erstellen Sie nun einen detaillierten Plan für die Umsetzung.</p>"
        },
        { 
          type: "quill", 
          id: "q4_planung", 
          question: "Gliedern Sie die Umsetzung in konkrete Arbeitsschritte. Was muss wann und von wem erledigt werden?" 
        }
      ]
    },
    {
      id: "abschluss",
      title: "Abschluss & Reflexion",
      elements: [
        {
            type: "text",
            content: "<h2 class='text-2xl font-bold text-text-primary mb-4'>Projektabschluss</h2><p class='text-text-secondary'>Fassen Sie die Ergebnisse zusammen und reflektieren Sie den Prozess. Was lief gut? Was könnte beim nächsten Mal verbessert werden?</p>"
        },
        { 
          type: "quill", 
          id: "q5_reflexion", 
          question: "Reflektieren Sie den gesamten Prozess. Was haben Sie gelernt und was sind die wichtigsten Ergebnisse?" 
        }
      ]
    }
  ]
};
