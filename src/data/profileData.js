/**
 * Profile Data Source of Truth
 * Extracted and strictly verified from Profile.pdf
 * 
 * Centralized data store: Shravya can update or append new certifications,
 * academic milestones, or skills directly in this file.
 */

export const profileData = {
  personal: {
    name: "Shravya M K",
    shortName: "Shravya",
    monogram: "SMK",
    headline: "AI & ML Student | Microsoft Student Ambassador | Aspiring AI Engineer",
    shortBio: "Undergraduate student specializing in Artificial Intelligence and Machine Learning with a passion for building scalable data systems, intelligent software solutions, and active technical community engagement.",
    location: "Mangaluru, Karnataka, India",
    email: "shravyamkshravyamk@gmail.com",
    linkedIn: "https://www.linkedin.com/in/shravya-m-k-394226361/",
    statusBadge: "Microsoft Student Ambassador 2026",
    availability: "Available for AI/ML Internships & Academic Collaborations",
  },

  about: {
    intro: "I am an undergraduate student pursuing Artificial Intelligence and Machine Learning at AJ Institute of Engineering and Technology in Mangaluru. Driven by a deep curiosity for how data and intelligent algorithms can solve complex real-world challenges, I am focused on building a solid engineering foundation in artificial intelligence.",
    points: [
      {
        title: "Academic Focus",
        description: "Pursuing a comprehensive curriculum in Artificial Intelligence and Machine Learning, studying core computational theory, algorithms, and applied intelligence.",
      },
      {
        title: "Community & Leadership",
        description: "Selected as a Microsoft Student Ambassador (2026), dedicated to peer-to-peer knowledge sharing, exploring modern developer tools, and empowering tech communities.",
      },
      {
        title: "Practical Exploration",
        description: "Engaged in hands-on industry simulations including the Tata GenAI Powered Data Analytics program, bridging foundational concepts with practical analytical workflows.",
      },
      {
        title: "Engineering Mindset",
        description: "Committed to clean object-oriented architecture, efficient relational database structures, and clear technical communication.",
      },
    ],
    quickStats: [
      { label: "Current Degree", value: "B.E. in AI & ML", detail: "2024 – 2028" },
      { label: "Ambassador Tenure", value: "Microsoft SA", detail: "Class of 2026" },
      { label: "Core Foundation", value: "DBMS & OOP", detail: "Structured Systems" },
      { label: "Location", value: "Mangaluru", detail: "Karnataka, India" },
    ]
  },

  skills: [
    {
      id: "dbms",
      name: "Database Management Systems (DBMS)",
      category: "Data & Systems",
      iconName: "Database",
      summary: "Understanding the core architecture of relational databases, data integrity, normalization, and efficient data retrieval.",
      pillars: [
        "Relational Schema Design & Architecture",
        "Data Integrity, Normalization & Constraints",
        "Structured Query Formulation & Retrieval",
        "Database Transactions & Reliability Concepts"
      ],
      tag: "Core Technical Skill"
    },
    {
      id: "oop",
      name: "Object-Oriented Languages",
      category: "Software Engineering",
      iconName: "Code2",
      summary: "Designing structured, modular, and maintainable software systems through core object-oriented programming principles.",
      pillars: [
        "Encapsulation, Inheritance & Polymorphism",
        "Modular Software Design & Abstraction",
        "Clean Code & Architectural Principles",
        "Problem Solving & Algorithmic Logic"
      ],
      tag: "Programming Foundation"
    },
    {
      id: "communication",
      name: "Communication",
      category: "Professional & Leadership",
      iconName: "MessageSquare",
      summary: "Articulating complex technical concepts clearly, collaborating effectively in cross-functional groups, and community outreach.",
      pillars: [
        "Technical Articulation & Documentation",
        "Peer Collaboration & Team Synergy",
        "Active Listening & Constructive Feedback",
        "Community Outreach & Event Engagement"
      ],
      tag: "Leadership & Collaboration"
    }
  ],

  education: [
    {
      institution: "AJ Institute of Engineering and Technology, Mangaluru",
      degree: "Artificial Intelligence and Machine Learning",
      period: "September 2024 to May 2028",
      status: "Current / In Progress",
      isCurrent: true,
      description: "Undergraduate engineering degree program focusing on artificial intelligence architectures, machine learning models, computational mathematics, database systems, and software engineering principles.",
      location: "Mangaluru, Karnataka, India"
    },
    {
      institution: "St. Aloysius (Deemed to be University), Mangaluru",
      degree: "Pre-University Course, PCMB",
      period: "June 2022 to March 2024",
      status: "Completed",
      isCurrent: false,
      description: "Pre-University studies focusing on Physics, Chemistry, Mathematics, and Biology (PCMB), building a rigorous quantitative and analytical foundation.",
      location: "Mangaluru, Karnataka, India"
    },
    {
      institution: "Ladyhill English Higher Primary School, India",
      degree: "SSLC, Karnataka State Board",
      period: "June 2012 to March 2022",
      status: "Completed",
      isCurrent: false,
      description: "Foundational secondary school education under the Karnataka Secondary Education Examination Board (SSLC).",
      location: "Mangaluru, Karnataka, India"
    }
  ],

  credentials: [
    {
      title: "Microsoft Student Ambassador",
      year: "2026",
      issuer: "Microsoft",
      type: "Student Leadership & Ambassadorship",
      iconName: "Award",
      badgeColor: "cyan",
      description: "Recognized as a Microsoft Student Ambassador (2026). Actively engaging with student developer communities, fostering peer learning on modern technical platforms, and building community-driven initiatives.",
      highlights: [
        "Global student developer community membership",
        "Exploration of Microsoft developer platforms and AI tools",
        "Leadership in student technical awareness and knowledge sharing"
      ]
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      year: "Completed",
      issuer: "Tata",
      type: "Virtual Experience Program",
      iconName: "Sparkles",
      badgeColor: "violet",
      description: "Hands-on industry simulation with Tata focused on leveraging Generative AI methodologies in data analytics, interpreting complex analytical datasets, and presenting actionable insights.",
      highlights: [
        "Practical application of GenAI within data analytics workflows",
        "Data preparation, analysis, and strategic interpretation",
        "Bridging academic knowledge with real-world enterprise scenarios"
      ]
    }
  ],

  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Credentials", href: "#credentials" },
    { name: "Contact", href: "#contact" },
  ]
};
