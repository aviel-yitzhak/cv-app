import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Trash2, Plus, Layout, Type, Briefcase, GraduationCap, Code, Award, Languages, Heart, Rocket, BookOpen, UserCheck } from 'lucide-react';

const App = () => {
  const [data, setData] = useState({
    name: "Your name",
    title: "Your title",
    contact: {
      phone: "05X-XXXXXXX",
      email: "yourname@email.com",
      linkedin: "linkedin.com/in/username"
    },
    summary: "Here you should write a short paragraph (3-5 lines) about your experience, abilities, and professional aspirations.",
    techSkills: ["add tech skills"],
    softSkills: ["add sofr skills"],
    achievements: [
      { title: "Name of achievement", desc: "A brief description of the achievement and the reason for receiving it." }
    ],
    languages: [
      { name: "language", level: "level" }
    ],
    volunteering: [
      { role: "", org: "roll/organization name", startDate: "start date", endDate: "end date", desc: "A brief description of your activities and contributions." }
    ],
    education: [
      {
        degree: "degree name",
        institution: "Name of the academic institution",
        startDate: "2020",
        endDate: "2024",
        gpa: "GPA: XX",
        relevantCourses: ["Course Name 1", "Course Name 2"]
      }
    ],
    experienceEntries: [
      {
        role: "Job Title",
        company: "Company Name",
        startDate: "Start Date",
        endDate: "End Date",
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
        unit: "unit",
        role: "role",
        startDate: "start date",
        endDate: "end date",
        type: "service type",
        points: ["Description of a major activity or responsibility in the military service."]
      }
    ]
  });

  const updateField = (path, value) => {
    const newData = { ...data };
    let current = newData;
    const parts = path.split('.');
    for (let i = 0; i < parts.length - 1; i++) {
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
    setData(newData);
  };

  const addArrayItem = (path, defaultValue) => {
    const newData = { ...data };
    let current = newData;
    const parts = path.split('.');
    for (let i = 0; i < parts.length - 1; i++) {
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = [...current[parts[parts.length - 1]], defaultValue];
    setData(newData);
  };

  const removeArrayItem = (path, index) => {
    const newData = { ...data };
    let current = newData;
    const parts = path.split('.');
    for (let i = 0; i < parts.length - 1; i++) {
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = current[parts[parts.length - 1]].filter((_, i) => i !== index);
    setData(newData);
  };

  // --- Design Tokens (Consistent UI) ---
  const sectionHeaderStyle = "text-[13px] font-bold border-b-2 border-slate-800 pb-0.5 mb-0.5 uppercase tracking-wider text-slate-800";
  const entryTitleStyle = "text-[12px] font-bold text-slate-900";
  const entrySubtitleStyle = "text-[11px] font-bold text-slate-500";
  const dateStyle = "text-[10px] text-slate-400 italic font-medium shrink-0";
  const bulletPointStyle = "text-[11px] text-slate-700 flex items-start gap-2 leading-normal";
  const bulletDotStyle = "text-blue-500 shrink-0 select-none mt-[1px]";

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-right">
      
      {/* סרגל עריכה צדדי */}
      <div className="w-[450px] bg-white border-r border-slate-200 h-screen overflow-y-auto sticky top-0 p-6 print:hidden shadow-xl z-10">
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Layout className="text-blue-600" size={24} /> עורך תבנית
          </h2>
          <button 
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition flex items-center gap-2"
          >
            הורדה כ-PDF
          </button>
        </div>

        <div className="space-y-10" dir="rtl">
          {/* פרטים אישיים */}
          <section>
            <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
              <Type size={14} /> פרטים אישיים
            </h3>
            <div className="grid gap-3">
              <input placeholder="שם מלא" className="w-full border p-2 rounded text-sm text-right" value={data.name || ''} onChange={(e) => updateField('name', e.target.value)} />
              <input placeholder="תפקיד/תואר" className="w-full border p-2 rounded text-sm text-right" value={data.title || ''} onChange={(e) => updateField('title', e.target.value)} />
              <div className="grid grid-cols-1 gap-2">
                <input placeholder="טלפון" className="w-full border p-2 rounded text-sm text-right" value={data.contact.phone || ''} onChange={(e) => updateField('contact.phone', e.target.value)} />
                <input placeholder="אימייל" className="w-full border p-2 rounded text-sm text-right" value={data.contact.email || ''} onChange={(e) => updateField('contact.email', e.target.value)} />
                <input placeholder="לינקדאין" className="w-full border p-2 rounded text-sm text-right" value={data.contact.linkedin || ''} onChange={(e) => updateField('contact.linkedin', e.target.value)} />
              </div>
            </div>
          </section>

          {/* תקציר */}
          <section>
            <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest mb-4 flex items-center gap-2 text-right">תקציר (Summary)</h3>
            <textarea 
              placeholder="כתוב כאן את פסקת התקציר..." 
              className="w-full border p-2 rounded text-sm h-32 leading-relaxed text-right" 
              value={data.summary || ''} 
              onChange={(e) => updateField('summary', e.target.value)} 
            />
          </section>

          {/* השכלה */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><GraduationCap size={14} /> השכלה</h3>
              <button onClick={() => addArrayItem('education', { degree: "", institution: "", startDate: "", endDate: "", gpa: "", relevantCourses: [] })} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            {data.education.map((edu, i) => (
              <div key={i} className="p-3 border rounded-lg mb-3 bg-slate-50 relative group text-right">
                <button onClick={() => removeArrayItem('education', i)} className="absolute -left-2 -top-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                <input placeholder="תואר" className="w-full bg-transparent font-bold mb-1 outline-none text-right text-sm" value={edu.degree || ''} onChange={(e) => updateField(`education.${i}.degree`, e.target.value)} />
                <input placeholder="מוסד לימודים" className="w-full bg-transparent text-xs mb-1 outline-none text-blue-600 text-right font-medium" value={edu.institution || ''} onChange={(e) => updateField(`education.${i}.institution`, e.target.value)} />
                <div className="grid grid-cols-2 gap-2 mb-2">
                   <input placeholder="התחלה" className="border p-1 rounded text-[10px] text-right" value={edu.startDate || ''} onChange={(e) => updateField(`education.${i}.startDate`, e.target.value)} />
                   <input placeholder="סיום" className="border p-1 rounded text-[10px] text-right" value={edu.endDate || ''} onChange={(e) => updateField(`education.${i}.endDate`, e.target.value)} />
                </div>
                <input placeholder="ממוצע/ציון" className="w-full border p-1 rounded text-[10px] text-right mb-2" value={edu.gpa || ''} onChange={(e) => updateField(`education.${i}.gpa`, e.target.value)} />
                <div className="mt-2 border-t pt-2">
                  <div className="flex justify-between items-center mb-1 flex-row-reverse">
                    <span className="text-[10px] font-bold text-slate-400">קורסים רלוונטיים:</span>
                    <button onClick={() => addArrayItem(`education.${i}.relevantCourses`, "")} className="text-blue-500 text-[10px]">+ הוסף קורס</button>
                  </div>
                  <div className="space-y-1">
                    {(edu.relevantCourses || []).map((course, cIdx) => (
                      <div key={cIdx} className="flex gap-1 items-center flex-row-reverse">
                        <input className="flex-1 border p-1 rounded text-[10px] text-right bg-white" value={course} onChange={(e) => {
                            const newCourses = [...edu.relevantCourses];
                            newCourses[cIdx] = e.target.value;
                            updateField(`education.${i}.relevantCourses`, newCourses);
                          }} />
                        <button onClick={() => {
                          const newCourses = edu.relevantCourses.filter((_, idx) => idx !== cIdx);
                          updateField(`education.${i}.relevantCourses`, newCourses);
                        }} className="text-red-400"><Trash2 size={10}/></button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* ניסיון תעסוקתי - Experience */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><UserCheck size={14} /> ניסיון תעסוקתי (Experience)</h3>
              <button onClick={() => addArrayItem('experienceEntries', { role: "", company: "", startDate: "", endDate: "", points: [""] })} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            {data.experienceEntries.map((exp, i) => (
              <div key={i} className="p-3 border rounded-lg mb-4 bg-slate-50 relative group text-right">
                <button onClick={() => removeArrayItem('experienceEntries', i)} className="absolute -left-2 -top-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                <div className="grid grid-cols-2 gap-2 mb-2 text-right">
                  <input placeholder="שם תפקיד" className="w-full bg-transparent font-bold outline-none text-right text-sm" value={exp.role || ''} onChange={(e) => updateField(`experienceEntries.${i}.role`, e.target.value)} />
                  <input placeholder="שם חברה" className="w-full bg-transparent font-bold outline-none text-right text-sm text-blue-600" value={exp.company || ''} onChange={(e) => updateField(`experienceEntries.${i}.company`, e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 flex-row-reverse text-right">
                  <input placeholder="התחלה" className="border p-1 rounded text-[10px] text-right" value={exp.startDate || ''} onChange={(e) => updateField(`experienceEntries.${i}.startDate`, e.target.value)} />
                  <input placeholder="סיום" className="border p-1 rounded text-[10px] text-right" value={exp.endDate || ''} onChange={(e) => updateField(`experienceEntries.${i}.endDate`, e.target.value)} />
                </div>
                <div className="space-y-1 text-right">
                  <label className="text-[10px] font-bold text-slate-400">תיאור תפקיד (נקודות):</label>
                  {exp.points.map((pt, idx) => (
                    <div key={idx} className="flex gap-1 items-center flex-row-reverse">
                      <input className="flex-1 border p-1 rounded text-[10px] text-right bg-white" value={pt} onChange={(e) => {
                          const newPts = [...exp.points];
                          newPts[idx] = e.target.value;
                          updateField(`experienceEntries.${i}.points`, newPts);
                        }} />
                      <button onClick={() => {
                        const newPts = exp.points.filter((_, pidx) => pidx !== idx);
                        updateField(`experienceEntries.${i}.points`, newPts);
                      }} className="text-red-400"><Trash2 size={10}/></button>
                    </div>
                  ))}
                  <button onClick={() => updateField(`experienceEntries.${i}.points`, [...exp.points, ""])} className="text-blue-500 text-[10px] font-bold">+ הוסף נקודה</button>
                </div>
              </div>
            ))}
          </section>

          {/* פרויקטים */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><Rocket size={14} /> פרויקטים (Projects)</h3>
              <button onClick={() => addArrayItem('projects', { name: "", tools: "", description: "" })} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            {data.projects.map((proj, i) => (
              <div key={i} className="p-3 border rounded-lg mb-3 bg-slate-50 relative group text-right">
                <button onClick={() => removeArrayItem('projects', i)} className="absolute -left-2 -top-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                <input placeholder="שם הפרויקט" className="w-full bg-transparent font-bold mb-1 outline-none text-right text-sm" value={proj.name || ''} onChange={(e) => updateField(`projects.${i}.name`, e.target.value)} />
                <input placeholder="כלים (למשל: Python, React...)" className="w-full bg-transparent text-xs mb-1 outline-none text-blue-600 text-right italic" value={proj.tools || ''} onChange={(e) => updateField(`projects.${i}.tools`, e.target.value)} />
                <textarea placeholder="הסבר קצר על הפרויקט" className="w-full bg-transparent text-xs outline-none h-16 text-right mt-1" value={proj.description || ''} onChange={(e) => updateField(`projects.${i}.description`, e.target.value)} />
              </div>
            ))}
          </section>

          {/* שירות צבאי */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><Briefcase size={14} /> שירות צבאי (Military Service)</h3>
              <button onClick={() => addArrayItem('militaryEntries', { unit: "", role: "", startDate: "", endDate: "", type: "", points: [""] })} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            {data.militaryEntries.map((entry, i) => (
              <div key={i} className="p-3 border rounded-lg mb-4 bg-slate-50 relative group text-right">
                <button onClick={() => removeArrayItem('militaryEntries', i)} className="absolute -left-2 -top-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                <div className="grid grid-cols-2 gap-2 mb-2 text-right">
                  <input placeholder="תפקיד" className="w-full bg-transparent font-bold outline-none text-right text-sm" value={entry.role || ''} onChange={(e) => updateField(`militaryEntries.${i}.role`, e.target.value)} />
                  <input placeholder="יחידה" className="w-full bg-transparent font-bold outline-none text-right text-sm text-blue-600" value={entry.unit || ''} onChange={(e) => updateField(`militaryEntries.${i}.unit`, e.target.value)} />
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2 flex-row-reverse text-right">
                  <input placeholder="התחלה" className="border p-1 rounded text-[10px] text-right" value={entry.startDate || ''} onChange={(e) => updateField(`militaryEntries.${i}.startDate`, e.target.value)} />
                  <input placeholder="סיום" className="border p-1 rounded text-[10px] text-right" value={entry.endDate || ''} onChange={(e) => updateField(`militaryEntries.${i}.endDate`, e.target.value)} />
                  <input placeholder="סוג שירות" className="border p-1 rounded text-[10px] text-right" value={entry.type || ''} onChange={(e) => updateField(`militaryEntries.${i}.type`, e.target.value)} />
                </div>
                <div className="space-y-1">
                  {entry.points.map((pt, idx) => (
                    <div key={idx} className="flex gap-1 items-center flex-row-reverse">
                      <input className="flex-1 border p-1 rounded text-[10px] text-right" value={pt} onChange={(e) => {
                          const newPts = [...entry.points];
                          newPts[idx] = e.target.value;
                          updateField(`militaryEntries.${i}.points`, newPts);
                        }} />
                      <button onClick={() => {
                        const newPts = entry.points.filter((_, pidx) => pidx !== idx);
                        updateField(`militaryEntries.${i}.points`, newPts);
                      }} className="text-red-400"><Trash2 size={10}/></button>
                    </div>
                  ))}
                  <button onClick={() => updateField(`militaryEntries.${i}.points`, [...entry.points, ""])} className="text-blue-500 text-[10px] font-bold">+ הוסף נקודה</button>
                </div>
              </div>
            ))}
          </section>

          {/* מיומנויות טכניות */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><Code size={14} /> מיומנויות טכניות</h3>
              <button onClick={() => addArrayItem('techSkills', "")} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-right">
              {data.techSkills.map((skill, i) => (
                <div key={i} className="flex gap-1 items-center group flex-row-reverse">
                  <input placeholder="מיומנות" className="flex-1 border p-1 rounded text-xs text-right" value={skill || ''} onChange={(e) => {
                    const newSkills = [...data.techSkills];
                    newSkills[i] = e.target.value;
                    updateField('techSkills', newSkills);
                  }} />
                  <button onClick={() => removeArrayItem('techSkills', i)} className="text-red-400 opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                </div>
              ))}
            </div>
          </section>
          
          {/* מיומנויות רכות */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><Code size={14} /> מיומנויות רכות</h3>
              <button onClick={() => addArrayItem('softSkills', "")} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-right">
              {data.softSkills.map((skill, i) => (
                <div key={i} className="flex gap-1 items-center group flex-row-reverse">
                  <input placeholder="מיומנות" className="flex-1 border p-1 rounded text-xs text-right" value={skill || ''} onChange={(e) => {
                    const newSkills = [...data.softSkills];
                    newSkills[i] = e.target.value;
                    updateField('softSkills', newSkills);
                  }} />
                  <button onClick={() => removeArrayItem('softSkills', i)} className="text-red-400 opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                </div>
              ))}
            </div>
          </section>

          {/* הישגים */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><Award size={14} /> הישגים (Achievements)</h3>
              <button onClick={() => addArrayItem('achievements', { title: "", desc: "" })} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            {data.achievements.map((ach, i) => (
              <div key={i} className="p-3 border rounded-lg mb-3 bg-slate-50 relative group text-right">
                <button onClick={() => removeArrayItem('achievements', i)} className="absolute -left-2 -top-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                <input placeholder="כותרת ההישג" className="w-full bg-transparent font-bold mb-1 outline-none text-right text-sm" value={ach.title || ''} onChange={(e) => updateField(`achievements.${i}.title`, e.target.value)} />
                <textarea placeholder="תיאור קצר" className="w-full bg-transparent text-xs outline-none h-12 text-right" value={ach.desc || ''} onChange={(e) => updateField(`achievements.${i}.desc`, e.target.value)} />
              </div>
            ))}
          </section>

          {/* שפות */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><Languages size={14} /> שפות</h3>
              <button onClick={() => addArrayItem('languages', { name: "", level: "" })} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            <div className="space-y-3 text-right" dir="rtl">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex gap-2 items-center group bg-slate-50 p-2 rounded border text-right">
                  <div className="flex-1 grid grid-cols-2 gap-2 text-right">
                    <input placeholder="שפה" className="border p-1 rounded text-xs bg-white text-right" value={lang.name || ''} onChange={(e) => updateField(`languages.${i}.name`, e.target.value)} />
                    <input placeholder="רמה" className="border p-1 rounded text-xs bg-white text-right" value={lang.level || ''} onChange={(e) => updateField(`languages.${i}.level`, e.target.value)} />
                  </div>
                  <button onClick={() => removeArrayItem('languages', i)} className="text-red-400 opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                </div>
              ))}
            </div>
          </section>

          {/* התנדבות */}
          <section>
            <div className="flex justify-between items-center mb-4 flex-row-reverse">
              <h3 className="font-bold text-slate-500 text-xs uppercase tracking-widest flex items-center gap-2 text-right"><Heart size={14} /> התנדבות (Volunteering)</h3>
              <button onClick={() => addArrayItem('volunteering', { role: "", org: "", startDate: "", endDate: "", desc: "" })} className="text-blue-600 hover:text-blue-800"><Plus size={18} /></button>
            </div>
            {data.volunteering.map((v, i) => (
              <div key={i} className="p-3 border rounded-lg mb-3 bg-slate-50 relative group text-right">
                <button onClick={() => removeArrayItem('volunteering', i)} className="absolute -left-2 -top-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"><Trash2 size={12}/></button>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <input placeholder="תפקיד" className="w-full bg-transparent font-bold outline-none text-right text-sm" value={v.role || ''} onChange={(e) => updateField(`volunteering.${i}.role`, e.target.value)} />
                  <input placeholder="ארגון" className="w-full bg-transparent font-bold outline-none text-right text-sm text-blue-600" value={v.org || ''} onChange={(e) => updateField(`volunteering.${i}.org`, e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2 flex-row-reverse text-right">
                  <input placeholder="התחלה" className="border p-1 rounded text-[10px] text-right" value={v.startDate || ''} onChange={(e) => updateField(`volunteering.${i}.startDate`, e.target.value)} />
                  <input placeholder="סיום" className="border p-1 rounded text-[10px] text-right" value={v.endDate || ''} onChange={(e) => updateField(`volunteering.${i}.endDate`, e.target.value)} />
                </div>
                <textarea placeholder="תיאור הפעילות" className="w-full bg-transparent text-xs outline-none h-12 text-right" value={v.desc || ''} onChange={(e) => updateField(`volunteering.${i}.desc`, e.target.value)} />
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* תצוגה מקדימה של קורות החיים */}
      <div className="flex-1 flex justify-center py-10 overflow-y-auto bg-slate-200">
        <div className="bg-white shadow-2xl print:shadow-none print:m-0 h-fit" style={{ width: '210mm', minHeight: '297mm' }}>
          
          {/* Header */}
          <div className="bg-[#1e293b] text-white py-10 px-12 text-center">
            <h1 className="text-4xl font-bold tracking-wider mb-2 uppercase">{data.name}</h1>
            <p className="text-blue-400 text-lg font-medium mb-5">{data.title}</p>
            <div className="flex justify-center items-center gap-8 text-[11px] text-gray-300">
              <div className="flex items-center gap-2"><Phone size={12} className="text-gray-400" /><span>{data.contact.phone}</span></div>
              <div className="flex items-center gap-2"><Mail size={12} className="text-gray-400" /><span>{data.contact.email}</span></div>
              <div className="flex items-center gap-2"><Linkedin size={12} className="text-gray-400" /><span>{data.contact.linkedin}</span></div>
            </div>
          </div>

          <div className="flex p-12 gap-4" dir="ltr">
            {/* Left Column (Narrow) */}
            <div className="w-[30%] space-y-6 text-left">

              {/* Tech Skills */}
              <section>
                <h2 className={sectionHeaderStyle}>Tech Skills</h2>
                <ul className="space-y-1">
                  {data.techSkills.map((skill, i) => (
                    <li key={i} className={bulletPointStyle}>
                      <span className={bulletDotStyle}>•</span>
                      <span className="flex-1">{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Soft Skills */}
              <section>
                <h2 className={sectionHeaderStyle}>Soft Skills</h2>
                <ul className="space-y-1">
                  {data.softSkills.map((skill, i) => (
                    <li key={i} className={bulletPointStyle}>
                      <span className={bulletDotStyle}>•</span>
                      <span className="flex-1">{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Achievements */}
              <section>
                <h2 className={sectionHeaderStyle}>Achievements</h2>
                <div className="space-y-4">
                  {data.achievements.map((ach, i) => (
                    <div key={i}>
                      <h3 className={entryTitleStyle}>{ach.title}</h3>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-normal italic">{ach.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className={sectionHeaderStyle}>Languages</h2>
                <div className="space-y-1.5">
                  {data.languages.map((l, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span className="font-bold text-slate-800">{l.name}</span>
                      <span className="text-slate-500">{l.level}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Volunteering */}
              <section>
                <h2 className={sectionHeaderStyle}>Volunteering</h2>
                <div className="space-y-5">
                  {data.volunteering.map((v, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline">
                        <h3 className={entryTitleStyle}>{v.org}</h3>
                        <span className={dateStyle}>{v.startDate} – {v.endDate}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-normal italic mt-0.5">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Vertical Divider */}
            <div className="w-[1px] bg-slate-200"></div>

            {/* Right Column (Wide) */}
            <div className="flex-1 space-y-6 text-left">
              
              {/* Summary */}
              <section>
                <h2 className={sectionHeaderStyle}>Summary</h2>
                <p className="text-[11px] text-slate-700 leading-relaxed text-justify">
                   {data.summary}
                </p>
              </section>

              {/* Education */}
              <section>
                <h2 className={sectionHeaderStyle}>Education</h2>
                <div className="space-y-8">
                  {data.education.map((edu, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline">
                        <h3 className={entryTitleStyle}>{edu.degree} | <span className={entrySubtitleStyle}>{edu.institution}</span></h3>
                        <span className={dateStyle}>{edu.startDate} – {edu.endDate}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium italic mb-1">{edu.gpa}</p>
                      {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                        <div className="mt-0.5">
                          <p className="text-[11px] text-slate-700 leading-normal">
                            <span className="font-bold text-slate-800">Relevant Courses: </span>
                            {edu.relevantCourses.join(', ')}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience */}
              <section>
                <h2 className={sectionHeaderStyle}>Experience</h2>
                <div className="space-y-8">
                  {data.experienceEntries.map((exp, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline">
                        <h3 className={entryTitleStyle}>{exp.role} | <span className={entrySubtitleStyle}>{exp.company}</span></h3>
                        <span className={dateStyle}>{exp.startDate} – {exp.endDate}</span>
                      </div>
                      <ul className="space-y-1 mt-0.5">
                        {exp.points.map((pt, idx) => (
                          <li key={idx} className={bulletPointStyle}>
                            <span className={bulletDotStyle}>•</span>
                            <span className="flex-1">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className={sectionHeaderStyle}>Projects</h2>
                <div className="space-y-6">
                  {data.projects.map((proj, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline mb-0.5">
                        <h3 className="text-[12px] font-bold text-slate-900">{proj.name}</h3>
                      </div>
                      <p className="text-[10px] text-slate-400 italic font-medium mb-0.5">{proj.tools}</p>
                      <p className="text-[11px] text-slate-700 leading-normal text-justify">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Military Service */}
              <section>
                <h2 className={sectionHeaderStyle}>Military Service</h2>
                <div className="space-y-8">
                  {data.militaryEntries.map((entry, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-baseline">
                        <h3 className={entryTitleStyle}>{entry.role} | <span className={entrySubtitleStyle}>{entry.unit}</span></h3>
                        <span className={dateStyle}>{entry.startDate} – {entry.endDate}</span>
                      </div>
                      <div className="flex justify-between items-baseline mb-0.5">
                        <span className="text-[10px] text-slate-400 italic font-medium">{entry.type}</span>
                      </div>
                      <ul className="space-y-1 mt-0.5">
                        {entry.points.map((pt, idx) => (
                          <li key={idx} className={bulletPointStyle}>
                            <span className={bulletDotStyle}>•</span>
                            <span className="flex-1">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body { 
  font-family: 'Inter', sans-serif; 
}

@media print {
  /* הגדרת דף בסיסית */
  @page {
    size: A4;
    margin: 0 !important;
  }

  /* כפיית צבעי רקע */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
  }

  /* איפוס והכנה להדפסה */
  html, body {
    width: 210mm;
    height: 297mm;
    margin: 0 !important;
    padding: 0 !important;
    background: white !important;
    overflow: hidden !important;
  }

  /* הסתרת ממשק העריכה */
  .print\:hidden, 
  aside, 
  button, 
  .w-\[450px\] { 
    display: none !important; 
  }

  /* הכרחת הפריסה לשמור על מבנה העמודות */
  .flex {
    display: flex !important;
    flex-direction: row !important;
  }

  /* הגדרת המכולה המרכזית של קורות החיים */
  .bg-white.shadow-2xl {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 210mm !important;
    height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
    transform: none !important;
  }

  /* מניעת שבירת שורות לא רצויה */
  section {
    page-break-inside: avoid !important;
  }
}   
      `}</style>
    </div>
  );
};

export default App;