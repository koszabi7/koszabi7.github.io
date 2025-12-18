import { type ProfileData } from './types';

export const profileData: ProfileData = {
  name: "Szabolcs Kozma",
  title: "Software Engineer & AI Enthusiast",
  profilePicture: "/profil.jpeg",
  shortBio: "BME Engineering student with a focus on Artificial Intelligence and Full-stack development. Passionate about building robust systems and exploring the theoretical foundations of Machine Learning.",
  
  skillGroups: [
    {
      title: "AI & Machine Learning",
      skills: ["Comprehensive ML Theory (BME Specialization + BME VITMAV45 - Grade 5)", "Pandas & NumPy", "Scikit-learn", "PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers", "OpenCV", "Vector Databases", "Transfer Learning", "Data Augmentation",  "Data Cleaning",  "Feature Engineering", "..."]
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "SASS/SCSS", "Responsive Design", "Vite"," Chrome DevTools", "REST API", "Axios"]
    },
    {
      title: "Backend & Database",
      skills: ["Python (Django, Flask)", "Java", "C# (.NET)", "PostgreSQL", "Database Theory (BME VITMAB04)"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C / C++", "Kotlin", "SQL"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Docker", "GitHub", "GitLab", "Google Cloud Platform", "Linux/Bash", "Ansible", "Grafana", "Git Flow","VS Code", "JetBrains IDEs", "Nagios"]
    },
    {
      title: "Soft Skills",
      skills: ["Effective Communication", "Teamwork", "Active Listening", "Remote Work Proficiency", "Analytical Thinking", "Problem Solving", "Growth Mindset", "Time Management", "Agile / Scrum Methodology", "Adaptability", "Self-Management", "Emotional Intelligence"]
    },
    {
      title: "Design",
      skills: ["Figma", "Canva", "Grid Systems & Layout", "User Flows", "Prototyping", "UML"]
    }
  ],

  projects: [
  {
    name: "Ship Detection (Kaggle)",
    desc: "A deep learning solution for the Airbus Ship Detection Challenge. Built with computer vision techniques to locate ships in satellite imagery, handling complex backgrounds and varying scales.",
    link: "https://github.com/99ProblemsButABatchAint1/Ship_Detection"
  },
  {
    name: "Gym Card App",
    desc: "An annual gym attendance summary application. Guests scan a QR code to generate a custom PNG report featuring their yearly performance statistics and the gym's branding.",
    link: "https://api.proudly.hu"
  }
  ],

  social: {
    github: "https://github.com/koszabi7",
    linkedin: "www.linkedin.com/in/szabolcs-kozma-23b769296",
    email: "koszabi7@gmail.com"
  }
};