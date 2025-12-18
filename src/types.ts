export interface Project {
  name: string;
  desc: string;
  link: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  profilePicture: string;
  shortBio: string;
  skillGroups: SkillCategory[]; // Skillek csoportosítva
  projects: Project[];
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}