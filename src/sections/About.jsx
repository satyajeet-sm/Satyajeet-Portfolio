import{Code2, Lightbulb, Rocket, Users} from "lucide-react";

const highlights =[
  {icon : Code2, 
    title: "Clean Code",
     description: "writing clean, well-structured, and maintainable code that follows best practices, making it easy to scale, debug, and collaborate on."},
   {
    icon : Rocket,
    title: "Fast Performance",
    description: "Optimizing applications for speed and responsiveness, ensuring quick load times and smooth interactions to enhance user experience."
   },
   {
    icon : Users,
    title: "User-Centric Design",
    description: "Focusing on creating intuitive and engaging user interfaces that prioritize user needs and enhance overall satisfaction."
    },
   {
    icon : Lightbulb,
    title: "Innovative Solutions",
    description: "Staying ahead with the latest technologies and best practices."

   },
];
const About = () => {
  return (
    <section id="about" className=" py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column*/} 
          <div className="space-y-8">
            <div className="animate-fade-in">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
          </div>
          <h2 className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-dealy-100 text-secondary-foreground">
            Building the future,
            <span className="font-serif italic font-normal text-white">
              One component at a tine.
            </span>
          </h2>
          <div className="space-y-4 text-muted-foreground animate-fade-in animation-de lay-200">
            <p>I’m Satyajeet Panda, 
              a passionate web developer with a strong interest in building clean, responsive, and user-focused web applications. 
              I enjoy turning ideas into practical digital solutions and take pride in writing well-structured, maintainable code that follows modern best practices.
               My approach to development focuses on clarity, performance, and long-term scalability rather than quick fixes.</p>
            <p>I have hands-on experience with technologies like React, JavaScript, and Python, and I’m continuously improving my skills in backend development and cloud technologies.
               I enjoy learning how systems work under the hood and aim to build applications that are not only visually appealing but also reliable and efficient.
                Solving problems, optimizing performance, and improving user experience are areas I genuinely enjoy working on.</p>   
            <p>Currently, I’m focused on strengthening my fundamentals, exploring modern tools, and preparing myself for real-world engineering challenges. 
              I believe in continuous learning, adaptability, and collaboration, and I’m always excited to work on projects that help me grow as a developer while creating meaningful impact.</p>    
          </div>
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "My mission is to  create digital experiences that are not only functional,
               but also truly delightful, ensuring every line of code contributes to a seamless user journey."
            </p>
          </div>
          </div>
          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item,index) => (
             <div 
             key={index}
             className="glass p-6 glow-border rounded-2xl animate-fade-in"
             style={{animationDelay:`${(index+1) * 100}ms`}}>
            <div className="w-12 h-1 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
              <item.icon className="w-6 h-6 text-primary"/>
              </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>

  );
};

export default About;
