//src/resumeData.js
export const initialResumeData = {
  name: "AVIEL YITZHAK",
  title: "3rd-year Information Systems Engineering student",
  contact: {
    phone: "052-4077443",
    email: "aviely98@gmail.com",
    linkedin: "linkedin.com/in/aviely/"
  },
  summary: "Highly motivated 3rd-year Information Systems Engineering student at Ben-Gurion University. Experienced Python Instructor at the Nitzanim program with a strong foundation in OOP and database management. Proven leadership skills from significant military service as a Squad Leader and Platoon Sergeant. A fast learner and proactive team player seeking a challenging student position to contribute technical expertise and analytical thinking.",
  techSkills: ["Python", "C", "C++", "C#", "Java", "JavaScript", "SQL", "Git", "Bash", "Linux"],
  softSkills: ["Leadership & Team Management", "Training & Instruction", "Fast Self-Learning", "Problem-Solving", "Resilience under pressure"],
  achievements: [
    { title: "Moshal Program Member", desc: "Selected to take part in a unique international program that empowers ambitious and talented undergraduate students with high academic potential, equipping them with cutting-edge tools and a versatile skill set to foster growth both personally and professionally." }
  ],
  languages: [
    { name: "Hebrew", level: "Native" },
    { name: "English", level: "Professional" }
  ],
  volunteering: [
    { role: "", org: "Osim Shchuna", startDate: "2024", endDate: "Present", desc: "Actively led social initiatives to strengthen community resilience in Ashdod." },
    { role: "", org: "Yemin Orde", startDate: "2015", endDate: "2016", desc: "Participated in an intensive program focused on social responsibility, values, and leadership, preparing for meaningful military service." }
  ],
  education: [
    {
      degree: "B.Sc. in Information Systems Engineering",
      institution: "Ben-Gurion University",
      startDate: "2023",
      endDate: "2028",
      gpa: "",
      relevantCourses: ["Object-Oriented Programming (OOP)", "Data Structures", "Algorithms", "Database Management Systems (SQL)", "Advanced Programming", "Operating Systems."]
    }
  ],
  experienceEntries: [
    {
      role: "Python Instructor",
      company: "Nitzanim Program",
      startDate: "2025",
      endDate: "Present",
      points: [
        "Instructing high-potential youth in Python programming and software development fundamentals.", 
        "Developing and delivering technical lesson plans, practical coding exercises, and assessments.", 
        "Mentoring students through personalized learning tracks to ensure high-level placement in IDF technological units.",
        "Translating complex software concepts into accessible educational content."]
    }
  ],
  projects: [
    {
      name: "Interactive Resume Builder & CV Optimizer",
      tools: "React.js, Tailwind CSS, Lucide-React, GitHub Pages",
      description: "Developed a responsive React-based web application for creating professional resumes with a real-time live preview. The tool features modular state management for complex data, an ATS-friendly UI built with Tailwind CSS, and custom media queries for precise PDF export. I managed the full development lifecycle, from engineering the architecture to deployment via GitHub Pages."
    },
    {
      name: "Multi-Threaded Maze Solver Application",
      tools: "Java, JavaFX, MVVM Architecture, Client-Server, Multi-Threading",
      description:"Developed a Java application for generating and solving complex mazes using a Multi-Threaded Client-Server architecture. The project implements the MVVM design pattern with a JavaFX UI and incorporates efficient search algorithms (BFS, DFS, Best-First Search). I applied advanced Design Patterns, including Strategy and Observer, to ensure a scalable and maintainable system."
    }

  ],
  militaryEntries: [
    {
      unit: "Ofer Prison",
      role: "Security Warden",
      startDate: "2024",
      endDate: "2025",
      type: "Reserve Duty",
      points: ["Executing security operations and supervising high-risk detainees during the 'Iron Swords' war."]
    },
    {
      unit: "Home Front Command",
      role: "Epidemiological Researcher",
      startDate: "2020",
      endDate: "2021",
      type: "Reserve Duty",
      points: ["Conducted data analysis and epidemiological investigations as part of the national effort to curb the COVID-19 pandemic."]
    },
    {
      unit: "Magal Unit",
      role: "Recruit Commander",
      startDate: "2016",
      endDate: "2019",
      type: "Mandatory Service",
      points: [
        "Commanded dozens of soldiers through intensive basic training.",
        "Managed complex training schedules and personnel welfare in high-pressure environments."]
    }
  ]
};