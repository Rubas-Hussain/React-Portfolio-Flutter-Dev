// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import Apaale from "../assets/projects/Apaale.png";
// import Apaale_Driver from "../assets/projects/Apaale_driver.png";
// import Salaati from "../assets/projects/salaati_logo.jpg";
// import softcodixWHMS from "../assets/projects/Softcodix WHMS.jpg";

export const HERO_CONTENT = `I am a Senior Mobile Engineer with 4+ years of experience building scalable, user-centric iOS and cross-platform applications. I started my career in native iOS development with Swift and SwiftUI, then transitioned to Flutter to deliver high-performance apps for both Android and iOS. I have contributed to 15+ production apps—including platforms serving 15,000+ daily active users—with a strong focus on clean architecture, performance, and reliability.`;


export const ABOUT_TEXT = `My journey into mobile development began with native iOS, where I built a foundation in Swift, SwiftUI, UIKit, and modern architectural patterns like MVVM and MVC. Over time, I expanded into Flutter to ship cross-platform products faster without compromising quality.

With 4+ years of hands-on experience, I specialize in end-to-end mobile development—from UI/UX implementation and REST API integration to Firebase services, real-time tracking, background services, and push notifications. I follow clean architecture principles to write maintainable, testable code and have mentored juniors and interns along the way.

Beyond coding, I enjoy optimizing app performance, modernizing legacy codebases, and continuously expanding my skills across the iOS and Flutter ecosystems. I thrive in collaborative environments, always aiming to build impactful, production-grade applications.`;


export const EXPERIENCES = [
  {
    year: "August 2025 - Present",
    role: "Senior Mobile Engineer (iOS & Flutter)",
    company: "DevDefy",
    description: `Managed the development of multiple applications across diverse domains, delivering scalable and high-performance solutions while maintaining code quality and timely releases. Designed robust architectures for thousands of users, focusing on scalability, performance optimization, memory leak prevention, debugging, and modernization of legacy codebases.`,
    technologies: ["Swift", "SwiftUI", "UIKit", "Dart", "Flutter", "Clean Architecture", "Performance Optimization",
      "Real-Time Live Tracking", "Firebase", "WebSockets",
    ],
  },
  {
    year: "December 2023 - July 2025",
    role: "Mid-Level Mobile Application Developer (iOS & Flutter)",
    company: "Aman Albilad Systems | أنظمة أمان البلاد",
    description: `Worked on multiple production applications with an existing user base, contributing to ongoing maintenance, feature enhancements, and continuous performance optimization. Mentored interns in designing, developing, and debugging applications. Implemented WebSockets for real-time tracking in a logistics delivery app with background location syncing, and actively participated in debugging and code reviews to optimize performance and maintain clean architecture.`,
    technologies: ["Swift", "Flutter", "Dart", "WebSockets", "Google Maps", "Background Location Sync",
      "Firebase Push Notifications", "MVVM", "MVC Architecture"],
  },
  {
    year: "January 2023 - December 2023",
    role: "Mid-Level Mobile Application Developer (iOS)",
    company: "iPlexSoft",
    description: `Built scalable, high-performance iOS apps aligned with client needs. Collaborated with Django backend and design teams to integrate APIs and deliver smooth user experiences. Optimized frontend performance and deployed multiple apps to the Apple App Store.`,
    technologies: ["Swift", "SwiftUI", "UIKit", "MVVM", "MVC Architecture", "API Integration",
      "Firebase", "Google Maps Live Tracking", "Zego Cloud SDK"],
  },
  {
    year: "January 2022 - February 2023",
    role: "Junior iOS Developer",
    company: "Softcodix",
    description: `Designed and developed native iOS applications using Swift and UIKit. Worked closely with backend developers to integrate frontend components with Django APIs. Implemented responsive designs, optimized app performance, and deployed multiple mobile apps to the Apple App Store.`,
    technologies: ["Swift", "UIKit", "SwiftUI", "Firebase", "API Integration", "MVVM", "MVC Architecture"],
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
  { 'Swift & iOS': ['Swift', 'SwiftUI', 'UIKit', 'OOP', 'Protocol-Oriented Programming', 'Async/Await', 'GCD', 'Closures', 'Optionals', 'Error Handling', 'Codable', 'URLSession', 'MVVM', 'MVC', 'Clean Architecture'] },
  { 'iOS State Management': ['MVVM', 'MVC', 'Dependency Injection', 'ObservableObject', '@State', '@Binding', 'Combine'] },
  { 'Dart & Flutter': ['OOP', 'Asynchronous Programming', 'Null Safety', 'Type Safety', 'Functional Programming', 'Streams', 'Futures', 'Isolates', 'GetX', 'Provider', 'Bloc', 'Clean Code', 'API Integration'] },
  { 'Database': ['Core Data', 'UserDefaults', 'SQLite', 'Firestore', 'Realtime Database'] },
  { 'Firebase': ['Authentication', 'Firestore', 'Cloud Functions', 'Cloud Messaging (FCM)'] },
  { 'Third-Party-Integrations': ['Google Maps', 'Live Location Tracking', 'AI Integration', 'Payment Gateway Integration', 'Chat Integration', 'Audio/Video Calling', 'HealthKit / Health Connect Integration'] },
  { 'Version Control': ['Git', 'GitHub'] },
  { 'Dev-Tools': ['Xcode', 'VS Code', 'Android Studio', 'Postman', 'Figma', 'Jira', 'Microsoft Teams', 'Google Meet'] },
  { 'Deployment': ['Apple App Store Connect', 'TestFlight', 'Google Play Console'] },
];


export const PROJECTS = [
  {
    title: "Load Secure",
    image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/61/1e/40/611e408e-33c0-53ba-339e-894ed4df1419/89819212-afe6-4c79-a698-8eabf9d51a04_iPhone_6.5__-_1.0.png/460x996bb.webp',
    backgroundColor: '#FDFAFD',
    description:
      `Architected and delivered a cross-platform real-time shipment tracking system using foreground services and background location synchronization, ensuring uninterrupted live tracking of drivers, accurate delivery predictions, and optimized battery usage with automatic privacy-safe tracking termination upon delivery. Currently used by 10,000+ users/drivers daily.`,

    technologies: [
      "Swift", "Flutter", "Dart", "Clean Architecture", "Background Location Sync",
      "API Integration", "Push Notifications", "Google Maps Integration",
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.cinnova.loadsecure',
    appStore: 'https://apps.apple.com/us/app/load-secure/id1526466951',
    webLink: null
  },
  {
    title: "Motiv Teams",
    image: 'https://static.wixstatic.com/media/214de5_5d5bd6a7274346b9ad652cddea1d25c1~mv2.png/v1/fill/w_1200,h_990,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Motiv%203D%20phone%20April%202026_edited_edited_.png',
    backgroundColor: '#424242',
    description:
      `Motiv Teams is a mobile platform designed to simplify high school sports team management. It centralizes communication, scheduling, and coordination to reduce administrative workload for coaches and staff. Currently with 3,500+ daily active users.`,

    technologies: [
      "Swift", "Flutter", "Dart", "Clean Architecture", "One to One and Group Chat Integration",
      "Scheduling and Calendar Integration", "Event Management", "Multi Roles Based Authentication",
      "Multi Language Support", "Multi Theme Support",
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.motive.sports',
    appStore: 'https://apps.apple.com/us/app/motiv-teams/id6738299992',
    webLink: null
  },
  {
    title: "Hyrise",
    // image: 'https://play-lh.googleusercontent.com/FLEc6tvVNv_61CSkhOAreuGQUy4nTqac52zSkUHJVUAOjEJRMGC4tn3cWpfQvmDJcDU87PQEElk6bfUpzQV3=w480-h960-rw',
    image: 'https://hyrise.app/wp-content/uploads/2025/10/Frame-1597880347-1-scaled.png',
    backgroundColor: '#F0F6F9',
    description:
      `Hyrise is a community housing app designed to guide buyers and sellers step by step through the home buying process. Whether you’re a first-time buyer or planning your next investment, Hyrise gives you all the tools, resources, and connections you need all in one place.`,
    //  Owning a home is one of life’s biggest achievements and with Hyrise, your path to homeownership just became easier, smarter, and more connected.,
    technologies: [
      "Flutter", "Dart", "Provider", "MVVM", "API Integration",
      "Push Notifications", "Web Socket Chat Integration"
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.hyrise.app',
    appStore: 'https://apps.apple.com/us/app/hyrise/id6748963590',
    webLink: null
  },
  {
    title: "Rellax Tinnitus",
    // image: 'https://play-lh.googleusercontent.com/_psWZ3BqVVm6LIcUoSm43D_u54TSRDDnPazUK097fl9y2BUcoTMGIXK76XzxS0R2Qw=w480-h960-rw',
    image: 'https://rellax.co/wp-content/uploads/2026/02/Group-1597880398-2-scaled.png',
    backgroundColor: '#FDFAFD',
    description:
      `Personalized Sound Therapy for Lasting Relief:
      Rellax Tinnitus is designed to help you manage and reduce the impact of tinnitus on your daily life through advanced sound therapy and interactive progress tracking.
     Whether you’re looking for immediate relief or long-term management, Rellax offers tailored soundscapes and innovative auditory solutions that cater to your unique hearing needs.`,

    technologies: [
      "Flutter", "Dart", "GetX", "MVC", "Audio Player Integration", "Mp3 sound encoding",
      "API Integration", "Push Notifications",
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.ohd.rellax&hl=en',
    appStore: 'https://apps.apple.com/us/app/rellax-tinnitus/id6502765969',
    webLink: null
  },

  {
    title: "Salaati – Jamaat Times & Prayer Scheduler",
    image: 'https://softcodix.com/wp-content/uploads/2025/09/Salaati-scaled.webp',
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
    title: "Digi Host - Manage Domains, Hostings and Clients",
    image: 'https://softcodix.com/wp-content/uploads/2025/09/Digihost-scaled.webp',
    description:
      "Developed a scalable domain and hosting management application for businesses, IT teams, and freelancers to efficiently track and manage multiple client services within a centralized platform.",
    technologies: [
      "Flutter", "Dart", "GetX", "MVC Architecture", "API Integration", "Firebase", "Push Notifications"
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.softcodix.digihost",
    appStore: 'https://apps.apple.com/us/app/digi-host/id6746712593',
  },
  {
    title: "Apaale – End-to-End Logistics Platform",
    image: 'https://play-lh.googleusercontent.com/r4YgfR3DcWwFKyHGD1YvC24zFIDbwDBX_NOIou2bVT27kBo4MuSubgpXKDxwfqvOGA=w480-h960-rw',
    description:
      "Developed a cargo shipment logistics app enabling real-time trip tracking with Google Maps live navigation and WebSockets, with multiple payment options for smooth logistics operations.",
    technologies: [
      "Flutter", "Dart", "Provider", "MVVM Architecture", "API Integration", "Firebase",
      "Push Notifications", "AI Integration", "Google Maps Integration"
    ],
    playStore: 'https://play.google.com/store/apps/details?id=app.logistics.user',
    appStore: 'https://apps.apple.com/us/app/apaale/id6502597789',
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
    appStore: 'https://apps.apple.com/us/app/alfgrowth/id6471911177',
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
    appStore: 'https://apps.apple.com/us/app/artabia-mobile-app/id6759154122',
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
    title: "Track My Work: HRMS Tracker",
    backgroundColor: '#FDFAFD',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d2/fd/a5/d2fda54a-622e-39e5-2a6e-bb2c099cf1c4/unnamed__U00282_U0029.png/460x996bb.webp',
    description:
      "Track My Work is a smart HRMS app that simplifies attendance, time tracking, and leave management for employees and HR teams through a single intuitive dashboard.",
    technologies: [
      "Swift", "Flutter", "Dart", "GetX", "MVC Architecture", "API Integration",
    ],
    playStore: null,
    appStore: 'https://apps.apple.com/us/app/track-my-work-hrms-tracker/id6749223345',
    webLink: null
  },
  {
    title: "Smarty Pay Desk",
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      "A responsive web platform for employee management, featuring attendance tracking, shift scheduling, leave management, and payroll processing—designed for simplicity and efficiency.",
    technologies: [
      "Flutter", "Dart", "GetX", "MVC Architecture", "API Integration", "Mobile Responsiveness"
    ],
    playStore: null,
    appStore: null,
    // webLink: 'https://demo.softcodix.com/attendance/'
    webLink: null
  },
];




export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153",
  phoneNo: "+92 336 2060714",
  email: "rubasakhter.11@gmail.com",
  github: "https://github.com/Rubas-Hussain",
  linkedin: "https://www.linkedin.com/in/rubas-hussain-31a685246/",
  instagram: "https://www.instagram.com/rubas_sheikh2019/",
  // twitter: "https://x.com/rubas_sheikh2019",
};
