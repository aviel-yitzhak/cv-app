export const initialResumeData = {
  name: "Your name",
  title: "Your title",
  contact: {
    phone: "05X-XXXXXXX",
    email: "yourname@email.com",
    linkedin: "linkedin.com/in/username",
    github: "github.com/username"
  },
  summary: "Here you should write a short paragraph (3-5 lines) about your experience, abilities, and professional aspirations.",
  techSkills: { category: "Programming Languages", items: ["Python", "C", "C++", "C#", "Java", "JavaScript"] },

  softSkills: ["add soft skills"],
  achievements: [
    { title: "Name of achievement", desc: "A brief description of the achievement and the reason for receiving it." }
  ],
  languages: [
    { name: "language", level: "level" }
  ],
  volunteering: [
    { role: "", org: "role/organization name", startDate: "start date", endDate: "end date", desc: "A brief description of your activities and contributions." }
  ],
  education: [
    {
      degree: "Degree Name",
      institution: "Name of the academic institution",
      startDate: "start date",
      endDate: "end date",
      gpa: "GPA: XX",
      relevantCourses: ["Course Name 1", "Course Name 2"]
    }
  ],
  experienceEntries: [
    {
      role: "Job Title",
      company: "Company Name",
      startDate: "start date",
      endDate: "end date",
      points: ["Key responsibility or achievement in this role.", "Another significant contribution."]
    }
  ],
  projects: [
    {
      name: "Project Name",
      tools: "Tools you used",
      description: "A short explanation of the project, its goals, and your contribution."
    }
  ],
  militaryEntries: [
    {
      unit: "Unit",
      role: "Role",
      startDate: "start date",
      endDate: "end date",
      type: "Service Type",
      points: ["Description of a major activity or responsibility in the military service."]
    }
  ]
};