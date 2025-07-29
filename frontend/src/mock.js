// Mock-Daten für die GENVEX Team Website

export const mockData = {
  // Firmeninformationen
  company: {
    name: "GENVEX Team",
    location: "Hamburg, Deutschland",
    type: "Offizieller Amazon Partner",
    description: "Hamburgs führender Amazon Delivery Service Partner, der sich der Exzellenz in Lieferdienstleistungen und Mitarbeiterzufriedenheit verschrieben hat."
  },

  // Kontaktinformationen
  contact: {
    address: "Peutestrasse 32, 20539 Hamburg, Deutschland",
    email: "genvexteam@gmail.com",
    phone: "+49 176 400 99823"
  },

  // FAQ-Daten
  faqs: [
    {
      id: 1,
      question: "Wie sind die Arbeitszeiten für Zustellfahrer?",
      answer: "Unsere Zustellfahrer arbeiten in Schichten, die um 10:40 Uhr morgens im Depot beginnen. Das Beladen erfolgt um 10:50 Uhr, die Abfahrt um 11:10 Uhr und die Rückkehr um 19:10 Uhr. Wir bieten Vollzeitstellen mit etwa 40 Stunden pro Woche an. (Der Arbeitsplan kann flexibel und individuell abgestimmt werden.)"
    },
    {
      id: 2,
      question: "Brauche ich ein eigenes Fahrzeug?",
      answer: "Nein, Sie benötigen kein eigenes Fahrzeug. GENVEX Team stellt alle Lieferfahrzeuge zur Verfügung, die moderne, gut gewartete Transporter mit GPS und Liefertechnologie sind."
    },
    {
      id: 3,
      question: "Welche Schulung bieten Sie an?",
      answer: "Wir bieten eine umfassende bezahlte Schulung an, die Fahrzeugbedienung, Lieferverfahren, Kundenservice, Sicherheitsprotokolle und die Verwendung von Amazons Liefertechnologie abdeckt. Die Schulung dauert normalerweise 3-5 Tage."
    },
    {
      id: 4,
      question: "Wie hoch ist das Startgehalt und gibt es Prämien?",
      answer: "Das Startgehalt beträgt €15,50 brutto pro Stunde plus €10 netto täglich für Verpflegung. Das bedeutet eine Gesamtvergütung von über €2.700 brutto pro Monat bei Vollzeitbeschäftigung, ohne Berücksichtigung von Boni."
    },
    {
      id: 5,
      question: "Stellen Sie Uniformen und Ausrüstung zur Verfügung?",
      answer: "Ja, wir stellen Uniformen, Sicherheitsausrüstung, Smartphones mit vorinstallierter Lieferapp und alle notwendigen Werkzeuge zur Verfügung. Sie müssen sich um nichts kümmern."
    },
    {
      id: 6,
      question: "Welche körperlichen Anforderungen gibt es?",
      answer: "Fahrer sollten körperlich gesund sein für das Pakethandling. 90% der Pakete wiegen maximal 2 kg, nur sehr selten sind schwerere Pakete bis 23 kg dabei. Wir bieten Schulungen zu ordnungsgemäßen Hebetechniken und Sicherheitsverfahren sowie Hilfsmittel."
    },
    {
      id: 8,
      question: "Bieten Sie Vorteile und Karriereentwicklung an?",
      answer: "Es gibt Möglichkeiten, zum Fahrtrainer, Dispatcher oder zu Führungsrollen in unserem wachsenden Netzwerk aufzusteigen."
    }
  ],

  // Bewerbungsdaten (für Mock-Formulareinreichungen)
  applications: []
};

// Mock-API-Funktionen
export const mockAPI = {
  // Bewerbung einreichen
  submitApplication: async (applicationData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const application = {
          id: Date.now(),
          ...applicationData,
          submittedAt: new Date().toISOString(),
          status: 'pending'
        };
        mockData.applications.push(application);
        resolve({
          success: true,
          message: "Bewerbung erfolgreich eingereicht! Wir werden Sie innerhalb von 2-3 Werktagen kontaktieren.",
          applicationId: application.id
        });
      }, 1000);
    });
  },

  // FAQ-Daten abrufen
  getFAQs: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: mockData.faqs
        });
      }, 300);
    });
  },

  // Kontaktformular einreichen
  submitContact: async (contactData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Vielen Dank für Ihre Nachricht! Wir werden Ihnen innerhalb von 24 Stunden antworten."
        });
      }, 800);
    });
  }
};