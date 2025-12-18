import { type ProfileData } from './types';

export const profileData: ProfileData = {
  name: "Szabolcs Kozma",
  title: "Software Engineer & AI Enthusiast",
  profilePicture: "/profil.jpeg",
  shortBio: "BME Engineering student with a focus on Artificial Intelligence and Full-stack development. Passionate about building robust systems and exploring the theoretical foundations of Machine Learning.",
  
  skillGroups: [
    {
      title: "AI & Machine Learning",
      skills: ["Comprehensive ML Theory (BME Specialization + BME VITMAV45 - Grade 5)", "PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face", "Pandas & NumPy", "OpenCV", "Vector Databases", "Transfer Learning", "Feature Engineering"]
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "SASS/SCSS", "Responsive Design", "Vite", "REST API"]
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
      skills: ["Git", "Docker", "GitHub Actions", "Google Cloud Platform", "Linux/Bash", "Ansible", "Grafana", "Git Flow"]
    },
    {
      title: "Soft Skills & Design",
      skills: ["Agile/Scrum", "Problem Solving", "Analytical Thinking", "Figma", "UI/UX Prototyping"]
    }
  ],

  projects: [
    {
      name: "Personal Portfolio",
      desc: "A high-performance portfolio site built with React, TypeScript, and Tailwind CSS, featuring a clean dark-themed UI.",
      link: "https://github.com/koszabi7/"
    }
  ],

  social: {
    github: "https://github.com/koszabi7",
    linkedin: "www.linkedin.com/in/szabolcs-kozma-23b769296",
    email: "koszabi7@gmail.com"
  }
};