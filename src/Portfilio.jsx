import React, { useRef, useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import image from "./assets/3fddcd94-13b2-471a-ab31-e46469b72c73.jpg";
import NavLinks from "./Data/navlinks";
import Image1 from "./assets/image.png";
import Image2 from "./assets/image2.png";
// import Background from "./Data/particals";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef(null);
  const form = useRef();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionMap = {
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };
    sectionMap[section]?.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_trrq0ha",
        "template_p8u031v",
        form.current,
        "fa2JYRzFV2GQeMjSz"
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send email!");
        }
      );
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      id: 1,
      title: "Foodie Hub",
      description:
        "Your ultimate foodie destination, where every bite is an adventure in flavor.",
      image:
        "https://cdn.dribbble.com/userupload/37697266/file/original-217c815720ae7beffc28b771879d7f81.jpg?format=webp&resize=400x300&vertical=center",
      link: "https://foodies-hub-teal.vercel.app/",
      category: "Food & Beverage", // Updated category to match the theme
      isFeatured: false,
    },
    {
      id: 2,
      title: "GoldenGate Estates",
      description:
        "Helping you find your perfect home with ease – buy, rent, or invest.",
      image: `${Image1}`,
      link: "https://agency-website-ochre.vercel.app/",
      category: "Real Estate", // Set category as 'Real Estate'
      isFeatured: false,
    },

    {
      id: 3,
      title: "Docs App",
      description:
        "Create, edit, and organize your documents effortlessly,  anywhere, foreverywhere",
      image: `${Image2}`,
      link: "https://docs-app-tan.vercel.app",
      category: "Productivity", // Category set to 'Productivity' to match the app's function
      isFeatured: false,
    },
    {
      id: 4,
      title: "Itecvo",
      description:
        "Boosting your brand with expert digital marketing, SEO, and social media strategies.",
      image:
        "https://navicoads.com/wp-content/uploads/2024/12/how-to-choose-digital-marketing-agency-1024x576.png",
      link: "https://itechvo.vercel.app", // Added https:// for correct URL format
      category: "Marketing Agency", // Set category to 'Marketing Agency'
      isFeatured: false,
    },
    {
      id: 5,
      title: "Furniture Shop",
      description:
        "Boosting your brand with expert digital marketing, SEO, and social media strategies.",
      image:
        "https://www.theoddcoders.com/wp-content/uploads/2023/06/home-furniture-shopping-website-developers.webp",
      category: "Furniture E-Commerce", // Set category to 'Furniture E-Commerce'
      isFeatured: false,
    },
  ];

  const skills = [
    {
      name: "MERN Stack",
      color: "indigo",
      items: [
        { skill: "React.js", level: 95 },
        { skill: "Node.js", level: 90 },
        { skill: "MongoDB", level: 88 },
        { skill: "Express.js", level: 85 },
      ],
    },
    {
      name: "Frontend",
      color: "blue",
      items: [
        { skill: "HTML", level: 98 },
        { skill: "JavaScript", level: 92 },
        { skill: "CSS", level: 85 },
        { skill: "Tailwind CSS", level: 90 },
      ],
    },
    {
      name: "Tools & Others",
      color: "purple",
      items: [
        { skill: "Git", level: 90 },
        { skill: "VS Code", level: 95 },
        { skill: "Postman", level: 88 },
        { skill: "GitHub", level: 75 },
      ],
    },
  ];

  const timeline = [
    {
      role: "Mern Stack Developer",
      company: "Saylani Tech Limited.",
      period: "Oct 2025 - jan 2026",
      desc: "Building and maintaining web applications using the MERN stack",
      color: "indigo",
    },
    {
      role: "Mern Stack Developer",
      company: "Bnao Qabil",
      period: "Feb 2025 - May 2025",
      desc: "Mern Stack Development and Collaborative Projects",
      color: "emerald",
    },
    {
      role: "Frontend Developer",
      company: "Froosphorous LLC",
      period: "May 2025- July 2025",
      desc: "Developed responsive user interfaces using React.js and Tailwind CSS",
      color: "amber",
    },
    {
      role: "Software Engneering Degree",
      company: "Virtual University",
      period: "2025 2029",
      desc: "Pursuing a Bachelor's degree in Software Engineering, focusing on web development and software design principles.",
      color: "blue",
    },
  ];

  return (
    <>
    {/* <Background/> */}
      <div class="bubble"></div>
      <div class="bubble two"></div>
      <div class="bubble three"></div>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          {/* Theme Toggle */}

          {/* Navigation */}
          <nav className="fixed w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent"
                >
                  SAA
                </button>
                <div className="hidden md:flex items-center  space-x-8">
                  <NavLinks scrollToSection={scrollToSection} />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}

          {mobileMenuOpen && (
            <div className="fixed inset-0 z-30 bg-slate-900/95 backdrop-blur-md flex items-center justify-center">
              <NavLinks scrollToSection={scrollToSection} />
            </div>
          )}

          {/* Hero Section */}
          <section
            ref={homeRef}
            className="min-h-screen flex items-center justify-center pt-20"
          >
            <div className="container mx-auto px-6 text-center">
              <div className="mb-8 animate-bounce">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-6xl">
                    👨‍💻
                  </div>
                </div>
              </div>
              <h1 className="text-5xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent animate-pulse">
                  Hello, I'm Sheikh Abdullah Ahmed
                </span>
              </h1>
              <div className="text-2xl md:text-3xl mb-8 font-medium">
                <span className="bg-gradient-to-r  from-indigo-500 to-emerald-500 bg-clip-text text-transparent animate-pulse ">
                  MernStack Developer
                </span>
              </div>
              <div className="mt-20">
                <ChevronDown
                  className="w-8 h-8 text-indigo-500 mx-auto animate-bounce cursor-pointer"
                  onClick={() => scrollToSection("about")}
                />
              </div>
            </div>
          </section>

          {/* Navigation */}

          {/* About Section */}
          <section ref={aboutRef} className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    I'm a passionate{" "}
                    <span className="font-medium text-indigo-500">
                      Full Stack Developer
                    </span>{" "}
                    with 1 year of professional experience building scalable and
                    high-performance web applications.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My expertise lies in the{" "}
                    <span className="font-medium">MERN stack</span> (MongoDB,
                    Express.js, React, Node.js), and I specialize in creating
                    responsive, user-friendly, and production-ready web
                    applications.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, I enjoy contributing to open-source
                    projects, writing technical articles, and exploring new web
                    development technologies to enhance my skills.
                  </p>
                </div>
                <div className="relative  group">
                  <div className="absolute  -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <div className="relative  bg-white dark:bg-slate-800 rounded-xl p-1">
                    <div className="bg-gradient-to-br md:h-[500px] from-indigo-100 to-emerald-100 dark:from-indigo-900 dark:to-emerald-900 rounded-lg h-64 flex items-center justify-center overflow-hidden ">
                      <img
                        src={image} // <-- yaha apni image ka path do
                        alt="Developer"
                        className="h-full  w-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <h3 className="text-2xl font-bold mb-8 text-center">
                My Journey
              </h3>
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-8 top-0 h-full w-0.5 bg-indigo-500/20"></div>
                {timeline.map((item, i) => (
                  <div key={i} className="mb-8 pl-16 relative">
                    <div
                      className={`absolute left-5 top-0 w-4 h-4 rounded-full bg-${item.color}-500 border-4 border-white dark:border-slate-900`}
                    ></div>
                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                        <h4 className="font-bold text-lg">{item.role}</h4>
                        <span
                          className={`text-sm bg-${item.color}-500/10 text-${item.color}-600 dark:text-${item.color}-400 px-3 py-1 rounded-full`}
                        >
                          {item.period}
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">
                        {item.company}
                      </p>
                      <p className="mt-2 text-slate-500 dark:text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            ref={skillsRef}
            className="py-20 bg-slate-100 dark:bg-slate-800/50"
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">My Skills</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {skills.map((category, i) => (
                  <div
                    key={i}
                    className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 dark:hover:border-slate-600"
                  >
                    {/* Category Name */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-slate-800 dark:text-white">
                      {category.name}
                    </h3>

                    {/* Skills List */}
                    <div className="space-y-5">
                      {category.items.map((item, j) => (
                        <div key={j} className="group">
                          {/* Skill Name and Percentage */}
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                              {item.skill}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300">
                              {item.level}%
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                            <div
                              className="h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
                              style={{
                                width: `${item.level}%`,
                                backgroundColor:
                                  category.color === "emerald"
                                    ? "#10b981"
                                    : category.color === "blue"
                                    ? "#06b6d4"
                                    : category.color === "purple"
                                    ? "#8b5cf6"
                                    : "#10b981",
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section ref={projectsRef} className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                  >
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-60 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-3">
                        {project.description}
                      </p>
                      <span className="inline-block px-3 py-1 bg-indigo-500 text-white rounded-full text-xs">
                        {project.category}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* AI Projects Section */}

          {/* Contact Section */}
          <form ref={form} onSubmit={sendEmail}>
            <section ref={contactRef} className="py-20">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4">
                            📧
                          </div>
                          <div>
                            <h4 className="font-medium">Email</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              abdullahsheikh456677@gmail.com
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4">
                            📱
                          </div>
                          <div>
                            <h4 className="font-medium">Phone</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              +92-323-2674099
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mr-4">
                            📍
                          </div>
                          <div>
                            <h4 className="font-medium">Location</h4>
                            <p className="text-slate-600 dark:text-slate-400">
                              Karachi, Sindh
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Quick Message</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Your Name"
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800"
                        />

                        <input
                          type="email"
                          name="user_email"
                          placeholder="Your Email"
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800"
                        />

                        <textarea
                          rows="4"
                          name="message"
                          placeholder="Your Message"
                          className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800"
                        ></textarea>

                        <button
                          type="submit"
                          className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>

          {/* Footer */}
          <footer className="bg-slate-900 text-slate-400 py-8">
            <div className="container mx-auto px-6 text-center">
              <p>
                &copy; 2024 Sheikh Abdullah Ahmed - Mern Stack Developer . All
                rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
