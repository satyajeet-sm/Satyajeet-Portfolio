import {Button} from '@/components/Button';
import {ArrowRight, ChevronDown, Github, Instagram, Linkedin,Download} from 'lucide-react';
import heroImage from "@/assets/hero-image.png";
import AnimatedBorderButton from '@/components/AnimatedBorderButton';

const skills=[
  "Html"," tailwind CSS","Javascript","Python",
  "React","Node.js","SQL","Docker","AWS","Git","GitHub Actions",
  "GitLab"
]; 
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/*Green Dots*/}
      <div className="absolute inset-0 z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor:"#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15+ Math.random()*20}s ease-in-out infinite`,
              animationDelay: `${Math.random()* 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto relative z-10  px-6 pt-32 pb-20"> 
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Left Column -Text Content*/}
          <div className="space-y-8" >
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className=" w-2 h-2 bg-primary rounded-full animate-pluse"/>
                   WEB Developer - Cloud Specialist 
               </span>
            </div>
            {/* Headline*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Creating <span className="text-primary glow-text">Responsive</span>
                <br />
                Web Applications with {" "}
                <span className="font-serif italic font-normal text-white">
                  React,python & Modern Tools
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                 Hii, i'm Satyajeet Panda - Passionate about web development with a growing interest in cloud technologies,
                aiming to build scalable and reliable applications step by step.Also having a good foundation in languages like Python,JavaScript,react & node.
              </p>
            </div>
            {/* CTA Buttons*/}
            <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300' >
            
              <Button onClick={() =>
               document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                 })
                }
              
               size="lg">
            
                Contact Me<ArrowRight className="w-5 h-5"/>
              </Button>
              <a href="/public/satyajeet_cv web dev.pdf" download >
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                  Download CV
              </AnimatedBorderButton>
          </a>
            </div>
            {/*Social Links*/}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400 text-foreground/80'>
              <span className='text-sm text-muted-foreground'>Follow me: </span>
              {[{icon: Github,href:"https://github.com/satyajeet-sm"},
              {icon: Linkedin,href:"https://www.linkedin.com/in/satyajeet-panda-a0850b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
              {icon: Instagram,href:"https://www.instagram.com/_satyajeet_panda_?igsh=a29qbzYwYnF6eGk5"}
              ].map ((social,idx) =>(
                <a key={idx}href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                  {< social.icon className='w-5 h-5'/>}
                </a>
              ))}
            </div>
          </div>
          {/*Right Column -// Image Content*/}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* Profile image */}
            <div className='relative max-w-mdmx-auto'>
              <div className='absolute inset-0  rounded-3xl bg-linear-to-br
               from-primary/20 via-transparent
                to-secondary/10 blur-2xl animate-pluse' />
              <div className='relative glass rounded-3xl p-2 glow-broder'>
                <img src="src/assets/20260202_114657-IMG_STYLE.jpg" alt="Satyajeet" className='w-full aspect-4/5 object-cover rounded-2xl' />

                {/* Floating Badge*/}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div  className='w-3 h-3 bg-green-500 rounded-full animate-pluse'/>
                    <span className='text-sm font-medium'>Available for work</span>
                  </div>
                </div>
                {/*Stats Badge*/}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                  <div className='text-s font-bold text-primary'> Fresher </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        {/* Skills Section */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className='shrink-0 px-8 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300'>
                    {skill}
                    </span>
                  </div>
            
           ))}
           </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2
      animate-fade-in animation-delay-800 z-20'>
        <a href="#about"
        className='flex flex-col items-center gap-2 text-muted-foreground'>
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <ChevronDown className='w-6 h-6 animate-bounce'/>
        </a>
      </div>

    </section>
  );
};

export default Hero;
