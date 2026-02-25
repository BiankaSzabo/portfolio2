import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPaintBrush } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
    description: "Semantic markup for accessible, SEO-friendly websites",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    description: "Custom layouts and responsive design systems",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    description: "Interactive elements and dynamic content",
  },
  {
    icon: <FaReact />,
    title: "React",
    description: "Component-based UIs with hooks and modern patterns",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    description: "Type-safe code for scalable, maintainable projects",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description: "Utility-first styling for rapid, consistent design",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI Design",
    description: "User-centered interfaces with attention to detail",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="max-w-300 mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          About Me
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Discover my passion for frontend development and creative
          problem-solving
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:items-center">
          {/* Journey text */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a detail-oriented frontend developer specializing in creating
              responsive, accessible websites that deliver outstanding user
              experiences. My focus is on clean, efficient code and pixel-perfect
              designs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With strong fundamentals in the core web technologies and modern
              tools like React, TypeScript, and Tailwind CSS, I transform design
              concepts into fully functional websites that work seamlessly across
              all devices and browsers.
            </p>
          </div>

          {/* Skills grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="p-5 text-center bg-background border border-border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-4xl text-primary mb-3">{skill.icon}</div>
                <h4 className="font-semibold mb-1">{skill.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
