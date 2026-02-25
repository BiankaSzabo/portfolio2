import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import type { ReactNode } from "react";
import SocialLinks from "./SocialLinks";
import Button from "./Button";

const inputStyles =
  "px-4 py-2.5 border border-border rounded-lg text-base focus:outline-none focus:border-primary transition-colors";

const contactDetails: { icon: ReactNode; label: string; value: string }[] = [
  { icon: <FaEnvelope />, label: "Email", value: "bianka.d.szabo@gmail.com" },
  { icon: <FaPhone />, label: "Phone", value: "+47 923 49 522" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Oslo, Norway" },
];

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-300 mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Interested in working together? Let's discuss your frontend
          development needs!
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact info */}
          <div className="md:w-1/3 bg-background p-6 rounded-lg shadow flex flex-col gap-5">
            <h3 className="text-xl font-semibold">Contact Details</h3>

            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start gap-3">
                <span className="text-xl text-primary mt-1 shrink-0">
                  {detail.icon}
                </span>
                <div>
                  <p className="text-muted-foreground text-sm mb-0.5">
                    {detail.label}
                  </p>
                  <p className="m-0">{detail.value}</p>
                </div>
              </div>
            ))}

            <SocialLinks className="mt-2" />
          </div>

          {/* Contact form */}
          <div className="md:w-2/3 bg-background p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className={inputStyles}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className={inputStyles}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={inputStyles}
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                className={`${inputStyles} min-h-30 resize-y font-[inherit]`}
              />
              <Button type="submit" className="self-start">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
