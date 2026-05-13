// SEO Configuration for different pages/sections
export const seoConfig = {
  home: {
    title: "Sheikh Abdullah Ahmed - MERN Stack Developer | Portfolio",
    description: "Explore my professional portfolio showcasing MERN stack development projects, skills, and expertise. Hire me for React, Node.js, Express, and MongoDB development.",
    keywords: "mern stack developer, react developer, node.js developer, mongodb developer, portfolio, web design",
  },
  about: {
    title: "About Me - Sheikh Abdullah Ahmed | MERN Stack Developer",
    description: "Learn more about my background, experience, and passion for web development.",
    keywords: "about, web developer, experience, skills",
  },
  projects: {
    title: "Projects - Sheikh Abdullah Ahmed | MERN Stack Developer",
    description: "Explore my latest MERN stack development projects including Foodie Hub, Doctor Management System, and more.",
    keywords: "projects, mern stack development, portfolio projects, react projects",
  },
  skills: {
    title: "Skills - Sheikh Abdullah Ahmed | MERN Stack Developer",
    description: "Discover my technical skills in React, JavaScript, Tailwind CSS, and more.",
    keywords: "skills, react, javascript, web development skills, technical skills",
  },
  contact: {
    title: "Contact Me - Sheikh Abdullah Ahmed | MERN Stack Developer",
    description: "Get in touch with me for MERN stack development projects, collaborations, or inquiries.",
    keywords: "contact, email, mern stack developer contact, hire developer",
  },
};

// Structured data for Person
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sheikh Abdullah Ahmed",
  "url": "https://portfoliooo-wdqc.vercel.app/",
  "jobTitle": "MERN Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "sameAs": [
    "https://www.linkedin.com/in/sheikh-abdullah-b49378280/",
    "https://github.com/sheikhabdullahahmed",
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
