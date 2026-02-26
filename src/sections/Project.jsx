import { ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "@/components/AnimatedBorderButton";
import project1 from "@/assets/project1.jpeg";
import project2 from "@/assets/project2.jpeg";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.jpg";

const projects = [
{
  title: "Canteen Management System",
  description:
    "A web-based application designed to streamline the operations of a canteen, allowing users to place orders, manage inventory, and process payments efficiently.",
  image: project1,
  tags: ["HTML","CSS","React","C#","MySQL"],
  github: "https://github.com/satyajeet-sm/canteen-management-system"

},
{
  title: "Smart Attendance System using Face Recognition with voice assistance",
  description:
    "A web-based application designed to automate attendance tracking and management for educational institutions.",
  image: project2,
  tags: ["Python","OpenCV","Face Recognition","Text to Speech","tikinter","sqlite3"],
  github: "https://github.com/satyajeet-sm/Smart-attendance-system-with-Face-recognition-and-voice-assistant-"
},
{
  title: "Portfolio Website",
  description:
    "A personal portfolio website to showcase my projects, skills, and experience as a developer.",
  image:project3,
  tags: ["HTML", "TailwindCSS", "JavaScript", "React"],
  github: "https://github.com/satyajeet-sm/portfolio-website"
},
{
  title: "HealthCare support web App with AI Chatbot",
  description:
    "A web-based application designed to provide healthcare support and assistance through an AI-powered chatbot.",
  image: project4,
  tags: ["HTML", "CSS", "JavaScript","False API"],
  github: "https://github.com/satyajeet-sm/Health-care-support"
}

];

const Project = () => {
  return (<section id="projects" className=" py-32 relative overflow-hidden">
    {/*bg glows */}
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5  rounded-full blur-3xl"/>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that {"  "}
            <span className="font-serif italic font-normal text-white">make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are some of the projects I've worked on, showcasing my skills and passion for web development. 
            Each project reflects my commitment to creating functional, user-friendly, and visually appealing applications that solve real-world problems.
          </p>
        </div>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            style={{animationDelay:`${(index+1) * 100}ms`}}>
              {/*Image */}
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                {/*Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"> 
                    <Github className="w-5 h-5"/></a>
                </div>

              </div>
              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}</h3>
                  <ArrowUpRight className="w-5 h-5
                  text-muted-foreground group-hover:text-primary
                  group-hover:translate-x-1
                  group-hover:-translate-y-1 transition-all"/>
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  { project.tags.map((tag,tagindex)=>(
                  <span key={tagindex} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50  hover:text-primary transition-all duration-300">
                    {tag}</span>
                ))}</div>
              </div>
            </div>
          ))}
        </div>
        {/* view All CTA*/}
        <div className="text-center mt-12 animate-fade-in animation-delay-500" >
          <AnimatedBorderButton  onClick={() =>
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    })
  }>
            View All Projects
            <ArrowUpRight className="w-5 h-5"/>
          </AnimatedBorderButton>

        </div>
        </div>
        </section>
 );
};

export default Project;
