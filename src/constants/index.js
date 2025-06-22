// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import Apaale from "../assets/projects/Apaale.png";
// import Apaale_Driver from "../assets/projects/Apaale_driver.png";
// import Salaati from "../assets/projects/salaati_logo.jpg";
// import softcodixWHMS from "../assets/projects/Softcodix WHMS.jpg";

// export const HERO_CONTENT = `I am a dedicated Flutter developer specializing in Flutter, with 2 years of hands-on experience building scalable and high-performance mobile and web applications. My expertise spans front-end development using Flutter (with GetX, Provider, and MVC architecture) and back-end technologies including Node.js, Firebase, MongoDB, SQLite, and PostgreSQL. I have a deep understanding of API integration, real-time communication (WebSockets), cloud-based solutions, and AI integration in mobile applications. My goal is to craft seamless, user-centric applications that drive innovation and efficiency.`;
export const HERO_CONTENT = `I am a passionate Flutter developer with 2 years of experience in building scalable and high-performance mobile and web applications. My expertise includes Flutter (GetX, Provider, MVC), back-end technologies (Node.js, Firebase, MongoDB, SQLite, PostgreSQL), and AI integration in mobile apps. I specialize in API integration, real-time communication (WebSockets), and cloud-based solutions to deliver seamless, user-centric experiences.`;


// export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer specializing in Flutter, with a passion for building efficient, high-performance mobile and web applications. With 2 years of professional experience, I have worked extensively with Flutter (using GetX, Provider, and MVC architecture) and back-end technologies like Node.js, Firebase, MongoDB, SQLite, and PostgreSQL. My journey in development started with a curiosity for crafting seamless digital experiences, and it has evolved into a career where I continuously embrace new challenges and innovations.

// I have a strong focus on AI integration in mobile applications, API development, real-time communication (WebSockets), and cloud-based solutions. I thrive in collaborative environments and enjoy problem-solving to deliver high-quality, user-centric applications.

// Outside of coding, I love exploring new technologies, contributing to open-source projects, and staying updated with the latest advancements in AI and mobile development.`;
export const ABOUT_TEXT = `As a dedicated full-stack Flutter developer, I thrive on crafting efficient and user-friendly applications. My journey into development began with a curiosity for digital experiences, which has since evolved into a career focused on solving complex problems and driving innovation.

With 2 years of hands-on experience, I specialize in Flutter (using GetX, Provider, and MVC) and work extensively with back-end technologies like Node.js, Firebase, MongoDB, SQLite, and PostgreSQL. My expertise includes AI integration in mobile apps, real-time communication (WebSockets), and cloud-based solutions.

Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge in AI and mobile development. I thrive in collaborative environments, always aiming to build impactful, high-quality applications.`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Flutter Developer",
    company: "iPlexSoft",
    description: `Led a team in designing, developing, and maintaining high-performance mobile applications using Flutter. Architected scalable solutions with state management (Provider, MVVM) and optimized app performance. Integrated Firebase services, RESTful APIs, and WebSockets for real-time communication.Also integrated AI in mobile apps for enhanced performance. Collaborated with cross-functional teams to define project requirements and deliver user-centric applications.`,
    technologies: ["Dart", "Flutter", "AI Integration", "Firebase", "API Integration", "Provider", "MVVM Architecture"],
  },
  {
    year: "2023 - 2024",
    role: "Mid Level Flutter Developer",
    company: "Softcodix",
    description: `Designed and developed user interfaces for mobile and web applications using Flutter and Dart on the frontend. Worked closely with backend developers to integrate frontend components with Django APIs. Implemented responsive designs and optimized frontend performance. Also deployed several mobile apps on Google Play Store and Apple App Store.`,
    technologies: ["Dart", "Flutter", "Firebase", "API Integration", "GetX", "MVC Architecture"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const SKILLS = [
  { 'Dart': ['OOP', 'Asynchronous Programming', 'Null Safety', 'Type Safety', 'Functional Programming', 'Streams', 'Future', 'Isolates'] },
  { 'Flutter': ['GetX', 'Provider', 'MVC Architecture', 'MVVM Architecture', "Clean Code", 'API Integration', 'Firebase', 'Push Notifications', 'API Integration',] },
  // {'Node.js':['Express','RESTful APIs','WebSockets','Socket.io','MongoDB','SQLite','PostgreSQL']},
  { 'Database': ['SQLite', 'Firestore', 'Realtime Database', 'MongoDB', 'PostgreSQL'] },
  { 'Firebase': ['Authentication', 'Firestore', 'Realtime Database', 'Cloud Functions', 'Cloud Messaging'] },
  // {'AI Integration':['TensorFlow','ML Kit','AI/ML Models','Image Recognition','Natural Language Processing']},
  { 'Third-Party-Integrations': ['Google Maps', 'Live Tracking', 'AI Integration', 'Payment Gateway Integration', 'Chat Integration', 'Qibla Integration',] },
  // {'Web Development':['HTML','CSS','JavaScript','React.js','Svelte','Three.js','Python','Django','Ruby','Rails','PHP']},
  { 'Version Control': ['Git', 'Github',] },
  { 'Dev-Tools': ['VS Code', 'Android Studio', 'Xcode', 'Postman', 'Figma', 'Jira', 'Trello', 'Google Meet'] },
  // {'Testing':['Unit Testing','Integration Testing','UI Testing','Test Driven Development']},
  { 'Deployment': ['Google Play Store', 'Apple App Store', 'Firebase Hosting', 'C-Panel', 'Netlify', 'Vercel',] },
  // {'Others':['Responsive Design','Mobile Responsiveness','SEO Optimization','Performance Optimization','Cross-platform Development']},

];


export const PROJECTS = [
  {
    title: "Salaati – Jamaat Times & Prayer Scheduler",
    image: 'https://play-lh.googleusercontent.com/TWUlGPGUUW45I-VVblg705tk7KIUnmFvmIvcGyXE5wHNT6IWfB3Xg6bnauLkxINFDw=w480-h960-rw',
    description:
      "Built a location-based Islamic utility app that helps users find nearby masjids, view accurate prayer times, get real-time notifications, and determine Qibla direction. Integrated Google Maps, personalized filters, and event alerts for a seamless user experience.",
    technologies: [
      "Flutter", "Dart", "Provider", "MVVM Architecture", "API Integration", "Firebase",
      "Push Notifications", "AI Integration", "Google Maps Integration"
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.softcodix.namaz_app&hl=en',
    appStore: 'https://apps.apple.com/pk/app/salaati/id6743207975',
    webLink: null
  },
   {
    title: "AlfGrowth – Assisted Living Wellness Platform",
    image: 'https://play-lh.googleusercontent.com/WdIOmdpIvgrgX4mhisDXn-vp1N5BXX3bCK6CPPXVjRZlIJMnc-fTQjhyRNTb4xQ_FQ=w480-h960-rw',
    description:
      "A healthcare-focused mobile solution that improves communication, scheduling, and wellness tracking for residents and caregivers in assisted living facilities. Includes chat, medication reminders, therapy sessions, and more.",
    technologies: [
      "Flutter", "Dart", "Provider", "MVVM Architecture", "API Integration", "Firebase",
      "Chat Integration", "Push Notifications", "Agora Video Call Integration"
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.alfgrowth&hl=en',
    appStore: null,
    webLink: null
  },
  {
    title: "Artabia – Online Art Marketplace Platform",
    image: 'https://play-lh.googleusercontent.com/esKzD0N1YsaH8426YDU51eWmEWdSOegFUIvGhhRZaAhhKwfVEFRmpbSrieiEtbxvbA=w480-h960-rw',
    description:
      "A full-featured digital marketplace where artists can upload, showcase, and sell original artwork. Features include user authentication, messaging, and secure payments to support global creators.",
    technologies: [
      "Flutter", "Dart", "Provider", "MVVM Architecture", "API Integration", "Firebase",
      "Chat Integration", "Push Notifications", "Payment Integration"
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.artist.artabia&hl=en',
    appStore: null,
    webLink: null
  },
  {
    title: "Apaale – End-to-End Logistics Platform",
    image: 'https://play-lh.googleusercontent.com/r4YgfR3DcWwFKyHGD1YvC24zFIDbwDBX_NOIou2bVT27kBo4MuSubgpXKDxwfqvOGA=w480-h960-rw',
    description:
      "An all-in-one logistics platform enabling users to track deliveries, manage drivers and fleets, and generate invoices in real-time—designed for simplicity and scalability.",
    technologies: [
      "Flutter", "Dart", "Provider", "MVVM Architecture", "API Integration", "Firebase",
      "Push Notifications", "AI Integration", "Google Maps Integration"
    ],
    playStore: 'https://play.google.com/store/apps/details?id=app.logistics.user',
    appStore: 'https://apps.apple.com/us/app/apaale/id6502597789',
    webLink: null
  },
  {
    title: "Apaale Driver – Delivery Partner Companion App",
    image: 'https://play-lh.googleusercontent.com/JdUQR3-gPQ9iOAWLAxVqMTY25XPidJ83yPod1xR0ghq88hI56RlIbSQoxkntLemwaQM=w480-h960-rw',
    description:
      "Companion driver app for Apaale's logistics platform—built for seamless fleet management, trip updates, and real-time delivery status monitoring with an intuitive UI.",
    technologies: [
      "Flutter", "Dart", "Provider", "MVVM Architecture", "API Integration", "Firebase",
      "Push Notifications", "AI Integration", "Google Maps Integration"
    ],
    playStore: 'https://play.google.com/store/apps/details?id=app.logistics.driver',
    appStore: 'https://apps.apple.com/us/app/logistic-supplier/id6502517359',
    webLink: null
  },
  {
    title: "معکم مستشار – 24/7 Virtual Consulting App",
    image: 'https://play-lh.googleusercontent.com/myj4w0Gy-e7Xe0R7VeVWBxLuFe3twPsIfaxtDebCr9wWZArxBbzgESFCmABP73XQS1k=w480-h960-rw',
    description:
      "An on-demand virtual consultation app connecting users with qualified experts in health, legal, career, and relationships. Offers secure video calls, real-time chat, and seamless appointment booking.",
      technologies: [
      "Flutter", "Dart", "Provider", "MVVM Architecture", "API Integration", "Firebase",
      "Chat Integration", "Push Notifications", "ZegoCloud Video Call Integration", "Payment Integration"
    ],
    playStore: 'https://play.google.com/store/apps/details?id=iplex.consultant.wefaq.com&hl=en',
    appStore: 'https://apps.apple.com/us/app/m3kom/id6460889820',
    webLink: null
  },
  {
    title: "Softcodix WHMS – Hosting & Client Management App",
    image: 'https://media.licdn.com/dms/image/v2/D4D0BAQFE95heoaP6FQ/company-logo_100_100/company-logo_100_100/0/1722404875840/softcodix_logo?e=1756339200&v=beta&t=e1AVNko3IQfLFxehGjL3HYoxcE3YjYXixzIzX79v_DI',
    description:
      "A mobile client for managing hosting and domain services. Helps businesses monitor client subscriptions, service expirations, and automate notifications through a simple admin dashboard.",
    technologies: [
      "Flutter", "Dart", "GetX", "MVC Architecture", "API Integration", "Firebase", "Push Notifications"
    ],
    playStore: null,
    appStore: null,
    webLink: 'https://drive.google.com/drive/folders/1yfAd0mnXCHEDNXcz4az8R0rFzXV0mcXm'
  },
  {
    title: "Softcodix AMS – Attendance Management System",
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      "A responsive web platform for employee management, featuring attendance tracking, shift scheduling, leave management, and payroll processing—designed for simplicity and efficiency.",
    technologies: [
      "Flutter", "Dart", "GetX", "MVC Architecture", "API Integration", "Mobile Responsiveness"
    ],
    playStore: null,
    appStore: null,
    webLink: 'https://demo.softcodix.com/attendance/'
  },
];




export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+92 336 2060714",
  email: "rubasakhter.11@gmail.com",
};
