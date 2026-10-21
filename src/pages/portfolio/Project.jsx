import nookAndPour from "/images/Nook-and-Pour.png";
import timerApp from "/images/Timer-App.png";
import taskBoard from "/images/Task-Board.png";
import weatherapp from "/images/weather-app-image.png";
import vintageVault from "/images/Vintage-Vault.png";
import faceDetection from "/images/Face-Detection.png";
import weddingBudgetTracker from "/images/Wedding-Budget-Tracker.png";
import ComingSoon from "/images/Coming-Soon.png";
// import aiPersonalTrainer from '/images/Ai-Personal-Trainer.png';

export const projects = [
  {
    projectTitle: "Nook & Pour",
    featured: true,
    description:
      "A cocktail-making app for finding and building drinks. Deployed as a public MVP, with user accounts and an AI bartender planned next.",
    imageLink: nookAndPour,
    imageAtl: "Screenshot of the Nook & Pour cocktail app",
    liveLink: "https://nook-pour.vercel.app/",
    gitHub: "https://github.com/Drew-Andersen/Nook-Pour",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    projectTitle: "Wedding Budget Tracker",
    featured: true,
    description:
      "A full-stack budget planner for couples planning a wedding - tracks expenses, vendor payments, and running totals in one place. Deployed and in active daily use for my own wedding.",
    imageLink: weddingBudgetTracker,
    imageAtl: "Screenshot of the Wedding Budget Tracker dashboard",
    liveLink: "https://wedding-budget-app-two.vercel.app/",
    gitHub: "https://github.com/Drew-Andersen/Wedding-Budget-App",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
  },
//   {
//     projectTitle: "AI Personal Trainer",
//     featured: false,
//     description:
//       "An AI-assisted training app with workout tracking, RIR-based progression, and a form-check video review feature — built on both my development background and my experience as a certified personal trainer.",
//     // imageLink: aiPersonalTrainer,
//     imageLink: ComingSoon,
//     imageAtl: "Screenshot of the AI Personal Trainer dashboard",
//     // liveLink: "",
//     gitHub: "https://github.com/Drew-Andersen/AI-Personal-Trainer", // update to the real repo URL
//     techStack: ["React", "Node.js", "PostgreSQL", "Python", "FastAPI"],
//   },
  {
    projectTitle: "Facial Detection",
    featured: false,
    description:
      "A full-stack MERN app that detects and highlights every face in an image from a submitted URL, using a face-recognition API and a Node/Express backend.",
    imageLink: faceDetection,
    imageAtl: "Screenshot of the Facial Detection app",
    liveLink: "https://face-detection-la42.onrender.com/login",
    gitHub: "https://github.com/Drew-Andersen/Face-Detection",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    projectTitle: "Vintage Vault",
    featured: false,
    description:
      "An e-commerce marketplace for browsing and buying items by the era they were made in, with category filtering and a full checkout flow.",
    imageLink: vintageVault,
    imageAtl: "Screenshot of the Vintage Vault marketplace",
    liveLink: "https://vintage-vault.onrender.com/",
    gitHub: "https://github.com/Drew-Andersen/Vintage-Vault",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  //   {
  //     projectTitle: "Fitness Buddy",
  //     featured: false,
  //     description:
  //       "A workout-tracking app for logging exercises, sets, and reps over time, with a clean dashboard for reviewing progress.",
  //     imageLink: fitnessBuddy,
  //     imageAtl: "Screenshot of the Fitness Buddy dashboard",
  //     liveLink: "https://fitness-buddy-2.onrender.com/",
  //     gitHub: "https://github.com/Drew-Andersen/Fitness-Buddy",
  //     techStack: ["React", "Node.js", "Express", "MongoDB"],
  //   },
  {
    projectTitle: "Weather App",
    featured: false,
    description:
      "A Django and Python web app that pulls current conditions for any city in the United States from a weather API.",
    imageLink: weatherapp,
    imageAtl: "Screenshot of the Weather App",
    liveLink: "https://weather-app-c7fd.onrender.com/",
    gitHub: "https://github.com/Drew-Andersen/Python-Weather-App",
    techStack: ["Python", "Django"],
  },
  {
    projectTitle: "Task Board",
    featured: false,
    description:
      "A drag-and-drop Kanban board for moving tasks between 'To-Do,' 'In Progress,' and 'Done' columns.",
    imageLink: taskBoard,
    imageAtl: "Screenshot of the Task Board",
    liveLink: "https://drew-andersen.github.io/Task-Board/",
    gitHub: "https://github.com/Drew-Andersen/Task-Board",
    techStack: ["JavaScript", "HTML", "CSS"],
  },
  {
    projectTitle: "Timer App",
    featured: false,
    description:
      "A combined timer and stopwatch app built to practice state management and interval logic in React.",
    imageLink: timerApp,
    imageAtl: "Screenshot of the Timer App",
    liveLink: "https://timer-app-6ke0.onrender.com/",
    gitHub: "https://github.com/Drew-Andersen/Timer-App",
    techStack: ["React", "JavaScript"],
  },
];
