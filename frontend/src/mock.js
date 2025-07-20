// Mock-Daten für die GENVEX Team Website

export const mockData = {
  // Firmeninformationen
  company: {
    name: "GENVEX Team",
    location: "Hamburg, Deutschland",
    type: "Offizieller Amazon DSP",
    description: "Hamburgs führender Amazon Delivery Service Partner, der sich der Exzellenz in Lieferdienstleistungen und Mitarbeiterzufriedenheit verschrieben hat."
  },

  // Kontaktinformationen
  contact: {
    address: "Unterm Heilbrunnen 8, 21029 Hamburg, Deutschland",
    email: "genvexteam@gmail.com",
    phone: "+49 176 400 99823"
  },

  // FAQ-Daten
  faqs: [
    {
      id: 1,
      question: "Wie sind die Arbeitszeiten für Zustellfahrer?",
      answer: "Unsere Zustellfahrer arbeiten normalerweise in 8-Stunden-Schichten, die gegen 10:30 Uhr beginnen. Sie laden um 10:50 Uhr und fahren um 11:00 Uhr los. Die Rückkehr ist um 18:00 Uhr. Wir bieten Vollzeitstellen mit etwa 40 Stunden pro Woche an."
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
      question: "Wie hoch ist das Startgehalt?",
      answer: "Das Startgehalt beträgt €15,50 pro Stunde plus €10 netto täglich für Verpflegung. Das bedeutet eine Gesamtvergütung von über €2.700 pro Monat bei Vollzeitbeschäftigung."
    },
    {
      id: 5,
      question: "Stellen Sie Uniformen und Ausrüstung zur Verfügung?",
      answer: "Ja, wir stellen Uniformen, Sicherheitsausrüstung, Smartphones mit vorinstallierter Lieferapp und alle notwendigen Werkzeuge zur Verfügung. Sie müssen sich um nichts kümmern."
    },
    {
      id: 6,
      question: "Welche körperlichen Anforderungen gibt es?",
      answer: "Fahrer sollten körperlich fit sein für das Pakethandling. 90% der Pakete wiegen maximal 5kg, nur sehr selten sind schwerere Pakete bis 23kg dabei. Wir bieten Schulungen zu ordnungsgemäßen Hebetechniken und Sicherheitsverfahren."
    },
    {
      id: 7,
      question: "Wie bewerbe ich mich und wie läuft der Einstellungsprozess ab?",
      answer: "Reichen Sie Ihre Bewerbung über unser Kontaktformular oder per E-Mail ein. Der Prozess umfasst Bewerbungsüberprüfung, Telefoninterview, persönliches Interview und Hintergrundüberprüfung. Der gesamte Prozess dauert normalerweise 1-2 Wochen."
    },
    {
      id: 8,
      question: "Bieten Sie Vorteile und Karriereentwicklung an?",
      answer: "Wir bieten Krankenversicherung und weitere Sozialleistungen. Es gibt Möglichkeiten, zum Fahrtrainer, Dispatcher oder zu Führungsrollen in unserem wachsenden Netzwerk aufzusteigen."
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