import { Github, Linkedin,Instagram,Heart } from "lucide-react";

const socialLinks=[
  {icon:Github,href:"https://github.com/satyajeet-sm",label:"GitHub"},
  {icon:Linkedin,href:"https://www.linkedin.com/in/satyajeet-panda-a0850b31b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",label:"LinkedIn"},
  {icon:Instagram,href:"https://www.instagram.com/_satyajeet_panda_?igsh=a29qbzYwYnF6eGk5",label:"Instagram"},
];
const footerLink=[
   { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];
const Footer = () => {
  return ( <footer className="border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              Satyajeet<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-sm">
              Passionate Computer Science student building modern,
              scalable web applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-muted-foreground">
              {footerLink.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-primary transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-10 pt-6 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">

          <p>
            © {new Date().getFullYear()} Satyajeet Panda. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Satyajeet
          </p>

        </div>

      </div>
    </footer>
  );
  
  };
export default Footer;