// SEO Configuration for different pages/sections
export const seoConfig = {
  home: {
    title: "Sheikh Abdullah Ahmed - Web Developer & Designer Portfolio",
    description: "Explore my professional portfolio showcasing web development projects, skills, and expertise. Hire me for React, JavaScript, and full-stack web development.",
    keywords: "web developer, react developer, javascript, portfolio, web design",
  },
  about: {
    title: "About Me - Sheikh Abdullah Ahmed | Web Developer",
    description: "Learn more about my background, experience, and passion for web development.",
    keywords: "about, web developer, experience, skills",
  },
  projects: {
    title: "Projects - Sheikh Abdullah Ahmed | Web Developer",
    description: "Explore my latest web development projects including Foodie Hub, Doctor Management System, and more.",
    keywords: "projects, web development, portfolio projects, react projects",
  },
  skills: {
    title: "Skills - Sheikh Abdullah Ahmed | Web Developer",
    description: "Discover my technical skills in React, JavaScript, Tailwind CSS, and more.",
    keywords: "skills, react, javascript, web development skills, technical skills",
  },
  contact: {
    title: "Contact Me - Sheikh Abdullah Ahmed | Web Developer",
    description: "Get in touch with me for web development projects, collaborations, or inquiries.",
    keywords: "contact, email, web developer contact, hire developer",
  },
};

// Structured data for Person
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sheikh Abdullah Ahmed",
  "url": "https://portfolio.example.com",
  "jobTitle": "Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "sameAs": [
    "https://www.linkedin.com/in/yourusername",
    "https://github.com/yourusername",
    "https://twitter.com/yourusername"
  ],
};

// Structured data for projects
export const getProjectSchema = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "url": project.link,
    "image": project.image,
    "category": project.category,
  };
};
