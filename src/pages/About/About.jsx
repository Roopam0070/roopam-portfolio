
export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-[#2c2c2c] bg-pink-100" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-4xl text-4xl font-semibold lg:text-5xl text-gray-500" style={{ fontFamily: "Playfair Display, serif" }}>
          Developer, Designer, Creator, Innovator
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:gap-12 lg:gap-24">
          {/* Profile Image */}
          {/* <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-[#e07a5f]/20 to-transparent">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow-lg block"
                alt="profile illustration"
                width={1207}
                height={929}
              />
            </div>
          </div> */}

          {/* About Text */}
          <div className="relative space-y-6">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Hello! I'm <span className="font-bold">Roopam Gupta</span>, a passionate Frontend Developer with a strong foundation in <span className="font-medium text-pink-800">React, JavaScript, TypeScript, HTML, CSS, and TailwindCSS</span>. I have hands-on experience building responsive, interactive, and user-friendly web applications.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            I have actively worked on multiple projects over 3 years of professional experience, focusing on delivering <span className="font-medium text-pink-800/80">clean, maintainable, and scalable code</span> while continuously learning and adapting to new technologies.            
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              I’m a problem solver at heart, passionate about exploring new tools, frameworks, and design patterns. I thrive in collaborative environments and enjoy taking on challenges that allow me to grow as a developer and contribute to meaningful projects.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-600 pl-4 italic">
                <p className="text-gray-700]">
                  “A motivated developer who combines creativity with technical expertise to build applications that provide real value. Constantly learning and experimenting with new technologies to stay ahead in the fast-evolving world of web development.”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
