import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const links = [
  {
    href: "https://github.com/BiankaSzabo",
    label: "GitHub",
    icon: <FaGithub />,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/bianka-szab%C3%B3-76aa1885/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    external: true,
  },
  {
    href: "mailto:bianka.d.szabo@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
    external: false,
  },
];

const linkStyle =
  "text-muted-foreground hover:text-foreground transition-colors text-2xl";

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          className={linkStyle}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
