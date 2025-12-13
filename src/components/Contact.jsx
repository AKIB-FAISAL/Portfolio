import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

// --- Data Structure ---
const contactData = {
  headline: "Let's Connect",
  subText: "I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision",
  getInTouch: {
    title: "Get In Touch",
    email: "ajakib764@gmail.com", // Your current email
    whatsapp: "+880 1953370341",
    description: "The best way to reach me is directly through email or WhatsApp. I'll get back to you as soon as possible!",
  },
  socialMedia: {
    title: "Connect on Social Media",
    // NOTE: Replace with actual URLs
    linkedin: "https://www.linkedin.com/in/mdakibfaisal/",
    github: "https://github.com/AKIB-FAISAL"
  }
};

// Simple Contact Card Component (MODIFIED to accept isEmail prop)
const ContactCard = ({ href, icon, label, value, iconColorClass, isEmail }) => (
  <a
    href={href}
    // CONDITIONAL ATTRIBUTE: Only open in new tab if it's NOT an email link
    target={isEmail ? "_self" : "_blank"}
    rel={isEmail ? "" : "noopener noreferrer"}
    className="flex flex-col p-4 w-full sm:w-[280px] rounded-xl bg-[#1e2329] border border-gray-700 hover:border-gray-600 transition duration-300 shadow-xl text-left"
  >
    {/* Icon and Label (Email Me / WhatsApp Me) */}
    <div className="flex items-center mb-2">
      {/* Icon uses the color passed in props */}
      {React.cloneElement(icon, { className: `text-2xl mr-3 ${iconColorClass}` })}
      <span className="font-semibold text-lg text-gray-200">{label}</span>
    </div>
    
    {/* Value (Email/Number) */}
    <span className="text-sm text-gray-400 pl-8 break-all">{value}</span>
  </a>
);

// New Social Media Button Component (No change needed here)
const SocialButton = ({ href, icon, label, iconColorClass }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center px-4 py-3 rounded-xl font-semibold bg-[#1e2329] border border-gray-700 hover:bg-[#282d33] transition duration-300 shadow-md text-gray-200`}
    >
      {React.cloneElement(icon, { className: `text-2xl mr-2 ${iconColorClass}` })}
      {label}
    </a>
)


export const Contact = () => {
  const { headline, subText, getInTouch, socialMedia } = contactData;
  const whatsappNumberStripped = getInTouch.whatsapp.replace(/[^\d+]/g, '');
  const whatsappLink = `https://wa.me/${whatsappNumberStripped}`;

  return (
    <section id="contact" className="py-20 px-4 text-gray-200 bg-[#0d1117] min-h-screen">
      <div className="max-w-4xl mx-auto text-center">

        {/* HEADER - Remains Centered */}
        <div className="mb-16">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-3 bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ff007f, #007bff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {headline}
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-400">
              {subText}
            </p>
        </div>

        {/* GET IN TOUCH SECTION - Centered Block */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4 text-blue-400">
            {getInTouch.title}
          </h3>
          <p className="max-w-xl mx-auto text-base mb-8 text-gray-400">
            {getInTouch.description}
          </p>

          {/* Contact Cards: Centered using justify-center */}
          <div className="flex flex-wrap justify-center gap-6">
            <ContactCard
              href={`mailto:${getInTouch.email}`}
              icon={<FiMail />}
              iconColorClass="text-blue-500"
              label="Email Me"
              value={getInTouch.email}
              // *** ADDED NEW PROP HERE ***
              isEmail={true}
            />
            <ContactCard
              href={whatsappLink}
              icon={<FaWhatsapp />}
              iconColorClass="text-green-500"
              label="WhatsApp Me"
              value={getInTouch.whatsapp}
            />
          </div>
        </div>

        {/* SOCIAL MEDIA SECTION - Centered Block */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            {socialMedia.title}
          </h3>
          {/* Social Buttons: Centered using justify-center */}
          <div className="flex justify-center gap-4">
            <SocialButton
                href={socialMedia.linkedin}
                icon={<FaLinkedin />}
                label="LinkedIn"
                iconColorClass="text-blue-500"
            />
            <SocialButton
                href={socialMedia.github}
                icon={<FaGithub />}
                label="GitHub"
                iconColorClass="text-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};