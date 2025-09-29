import React, { useState } from "react";
import { Send, Mail, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) { tempErrors.name = "Name is required"; isValid = false; }
    if (!formData.email.trim()) { tempErrors.email = "Email is required"; isValid = false; }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { tempErrors.email = "Email is invalid"; isValid = false; }
    if (!formData.subject.trim()) { tempErrors.subject = "Subject is required"; isValid = false; }
    if (!formData.message.trim()) { tempErrors.message = "Message is required"; isValid = false; }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) { setStatus("Please fill in all required fields correctly."); return; }

    const form = new FormData();
    form.append("access_key", "aba96463-6d0d-43ba-947d-99adf8a3f442");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else { setStatus(result.message || "There was an error sending your message."); }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-28 min-h-screen relative overflow-hidden font-sans text-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-pink-100"
            initial={{ y: "-10%", x: "-10%" }}
            animate={{ y: ["-10%", "110%"], x: ["-10%", "110%"] }}
            transition={{ duration: 20 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/60 via-pink-100 to-pink-200/70" />
      </div>

      <section className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-500 leading-tight">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg">
              Have a question or want to work together? Drop me a message or connect on LinkedIn!
            </p>

            <div className="space-y-6">
              <ContactBlock icon={<Mail className="w-6 h-6 text-gray-400" />} title="Email" text="roopam0070@gmail.com" />
              <ContactBlock icon={<MapPin className="w-6 h-6 text-gray-400" />} title="Location" text="Chhattarpur, New Delhi" />
              <ContactBlock icon={<Linkedin className="w-6 h-6 text-gray-400" />} title="LinkedIn" text="roopam-gupta" link="https://www.linkedin.com/in/roopam-gupta-9789a6185/" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/5 border border-gray-300 p-8 rounded-2xl shadow-xl relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField label="Your Name" value={formData.name} error={errors.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <InputField label="Your Email" value={formData.email} error={errors.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <InputField label="Subject" value={formData.subject} error={errors.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
              <TextareaField label="Your Message" value={formData.message} error={errors.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-400 to-gray-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>

            {status && (
              <div className={`mt-4 text-center ${status.includes("success") ? "text-green-400" : "text-red-400"}`}>
                <p>{status}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Components
function ContactBlock({ icon, title, text, link }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-white/10 p-3 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">{text}</a>
        ) : (
          <p className="text-gray-600">{text}</p>
        )}
      </div>
    </div>
  );
}

function InputField({ label, value, error, onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${error ? "border-red-500" : "border-gray-400"} focus:border-pink-400 focus:outline-none transition-colors`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function TextareaField({ label, value, error, onChange }) {
  return (
    <div>
      <textarea
        rows="4"
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${error ? "border-red-500" : "border-gray-400"} focus:border-pink-400 focus:outline-none transition-colors resize-none`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
