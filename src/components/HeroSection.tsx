import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section id="hero" className="py-24 md:py-32">
      <div className="max-w-300 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Text */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-primary">Bianka</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-125 mx-auto md:mx-0 mb-6 leading-relaxed">
              A passionate frontend developer crafting visually stunning and
              user-friendly web experiences with HTML, CSS, and JavaScript.
            </p>
            <div className="flex gap-4 mb-6 justify-center md:justify-start">
              <Button href="#projects">
                View My Work <FaArrowRight />
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
            <SocialLinks className="justify-center md:justify-start" />
          </div>

          {/* Profile Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 shrink-0">
            <img
              src="/images/profile.png"
              alt="Bianka's Portrait"
              className="w-full h-full rounded-full border-4 border-primary object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
