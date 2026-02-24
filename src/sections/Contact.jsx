import {Mail,Phone,MapPin,Send} from 'lucide-react';
import {Button} from '@/components/Button';
import { useState ,useEffect } from "react";
import emailjs from "@emailjs/browser";
import.meta.env.VITE_EMAILJS_SERVICE

const ContactInfo =[

  {
    icon: Mail,
    label :"Email",
    value: "satyajeetpanda20@gmail.com",
    href:"mailto:satyajeetpanda20@gmail.com",
  },
  {
    icon: Phone,
    label :"Phone",
    value: "+91 7894734810",
    href:"tel:+91 7894734810",
  },
  {
    icon: MapPin,
    label :"Location",
    value: "odisha,baleswar",
    href:"#",
  }
];
const Contact = () => {
  console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC);
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:"",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC);
}, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus(null);

  try {
    await emailjs.send(
     import.meta.env.VITE_EMAILJS_SERVICE, 
     import.meta.env.VITE_EMAILJS_TEMPLATE,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
    );

    setStatus("success");
    setFormData({ name: "", email: "", message: "" });

  } catch (error) {
    console.error(error);
    setStatus("error");
  }

  setLoading(false);
};                                                                                                                                                                                                                                                                              
  return ( <section id="contact" className="py-32 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
    <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5  rounded-full blur-3xl"/>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      {/*Section Header */}
      <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's
            <span className="font-serif italic font-normal text-white">Connect.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            I'm passionate about building modern web applications and continuously improving my skills.
            I'm currently open to internships, freelance projects, and entry-level developer roles.
            Let's connect and create something meaningful together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div  className="glass p-8 rounded-3xl border-primary/30 animate-fade-in animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name"
                className="block text-sm font-medium mb-2">Name</label>
                <input 
                id="name" 
                type="text" 
                required
                placeholder="Your name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({...formData,name:e.target.value})

                 }

                className="w-full px-4 py-3 bg-black rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary  transition-all "/>
              </div>
               <div>
                <label htmlFor="email"
                className="block text-sm font-medium mb-2">Email</label>
                <input
                id="Mail"
                type="email" 
                required
                placeholder="Your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({...formData,email:e.target.value})

                 }
                className="w-full px-4 py-3 bg-black rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary   transition-all " />
              </div>
               <div>
                <label htmlFor="message"
                className="block text-sm font-medium mb-2">Message</label>
                <textarea
                rows={6}
                required
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({...formData,message:e.target.value})

                 }
                className="w-full px-4 py-3 bg-black rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary  transition-all resize-none">
                </textarea>
              </div>
              <Button className="w-full" type="submit" size="lg" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={18} />}
              </Button>
              {status === "success" && (
    <p className="text-green-500 text-sm text-center mt-2">
      ✅ Message sent successfully!
    </p>
  )}

  {status === "error" && (
    <p className="text-red-500 text-sm text-center mt-2">
      ❌ Failed to send message. Please try again.
    </p>
  )}
            </form>
          </div>
          {/*Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {ContactInfo.map((item,i) =>(
                   <a 
                key={i}
                href={item.href}
                className="flex items-center gap-4 rounded-xl hover:bg-surface transition-colors duration-300 
             group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center  group-hover:bg-primary/20 transition">
                  <item.icon className='w-5 h-5 text-primary'/>
                </div>
                <div>
                  <div className=" text-sm text-muted-foreground">
                    {item.label}
                  </div>
                  <div className=" font-medium">
                    {item.value}
                  </div>

                </div>
                </a>
                )

                )}
              </div>
            </div>
            {/* Availablity Card */}
            <div className='glass rounded-3xl p-8 border border-primary/30'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                <span className='font-medium'>Currently Available</span>
              </div>
              <p>
                I'm currently open to new opportunites and exciting projects,
                whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
    </div>
  </section>);
};

export default Contact;
