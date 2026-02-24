import { Description } from "@radix-ui/react-toast";

const Experiences=[
  {
  period: "02-2026 - present",
  role: "Web Devloper Intern",
  company:"Devoks pvt. Ltd",
  description:
    "Working as a Web Developer Intern, contributing to the design and development of responsive web applications. Involved in building reusable UI components, implementing frontend features using modern JavaScript frameworks, and collaborating with the team to improve performance, usability, and code quality. Gaining hands-on experience with real-world projects, version control, and agile development practices.",
  technologies:["HTML","CSS","JavaScript","React","Node.js","TailwindCSS","mongoDB"],
  current: true,
  },
  {
    period:"06-2025 -07-2025",
    role:"Frontend Intern",
    company:"DRDO(ITR)",
    description:
     "Worked as a Frontend Intern at DRDO (ITR), contributing to the development of responsive and user-friendly web interfaces. Assisted in building reusable UI components, implementing layouts using HTML and CSS, and adding interactivity with JavaScript and React. Collaborated with the team to improve usability, consistency, and overall frontend quality",
    technologies:["HTML","CSS","JavaScript","React"],
    current:false,
  },
  {
    period:"08-2022 - 06-2026",
    role:"student",
    company:"Nims University",
    description:"Currently pursuing a Bachelor’s degree in Computer Science with a strong focus on Data Structures & Algorithms, Web Development, and Software Engineering. Gaining hands-on experience through academic projects, practical labs, and self-driven development work. Actively building full-stack applications and strengthening problem-solving skills to prepare for industry-level roles.",
    technologies:["computer science"],
    current:true,
  }

];
const Experience = () => {
  return ( <section id="experience"
  className="py-32 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/4 w-96 h-96
    bg-primary/5 rounded-full blur-3xl -translate--1/2"/>     
    <div className="container mx-auto px-6 relative z-10">
      {/* Section Headder */}
      <div className=" max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>

        <h2 className=" text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
        Experience as{" "}
           <span className="font-serif italic font-normal text-white">
            A Fresher.
            </span>
            </h2>
            <p className="text-muted-foreground
            animate-fade-in animation-delay-200">
              A timeline of my journey, from a tier 3 college to web devloper.
            </p>
      </div>
      {/* timeline */}
      <div className="relative">
        <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
        {/*Experience Items */}
        <div className="space-y-12">
        {Experiences.map((exp, index) => (
          <div 
          key={index}
          className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
          style={{animationDelay: `${(index +1)*150}ms`}}
          > 
          {/*Timeline Dot */}
          <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 ">
          {exp.current && (
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>)
          } 
          </div>


          {/*content */}
          <div className={`pl-8 md:pl-0 ${
            index %2 === 0
            ? "md:pr-16 md:text-right"
            : "md:col-start-2 md:pl-16"
          }`}> 
            <div className={`glass p-6 rounded-2xl border  border-primary/30 hover:border-primary/50 transition-all duration-500 `}>
              <span className="text-sm text-primary font-medium">{exp.period}</span>
              <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
              <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0? "md:justify-end":""}`}>
                {exp.technologies.map((tech,techidx) =>(
              <span
              key={techidx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>)
)}</div>
            </div>
          </div>
          </div>
       ))}

      </div>
    </div>
    </div>


  </section>

  );
};

export default Experience;
