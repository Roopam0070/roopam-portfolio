import HeroImg from "@/assets/images/saijal-photo.jpeg";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-[#2c2c2c] bg-[#fdf6e3]" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-semibold lg:text-5xl text-[#e07a5f]" style={{ fontFamily: "Playfair Display, serif" }}>
          Developer, Designer, Creator, Innovator
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Profile Image */}
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-[#e07a5f]/20 to-transparent">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow-lg block"
                alt="profile illustration"
                width={1207}
                height={929}
              />
            </div>
          </div>

          {/* About Text */}
          <div className="relative space-y-6">
            <p className="text-[#2c2c2c] text-base sm:text-lg leading-relaxed">
              Hello! I'm <span className="font-bold">Saijal Agarwal</span>, a passionate Frontend Developer with a strong foundation in <span className="font-medium text-[#3d5a40]">JavaScript, TypeScript, and React</span>. I have hands-on experience building responsive, interactive, and user-friendly web applications using modern technologies like <span className="font-medium text-[#3d5a40]">TailwindCSS, Node.js, Unity, and Cocos</span>.
            </p>

            <p className="text-[#2c2c2c] text-base sm:text-lg leading-relaxed">
              Even as a fresher, I have actively worked on multiple projects, including personal portfolio websites, small-scale web apps, and interactive front-end components. My focus is on delivering <span className="font-medium text-[#e07a5f]">clean, maintainable, and scalable code</span> while continuously learning and adapting to new technologies.
            </p>

            <p className="text-[#2c2c2c] text-base sm:text-lg leading-relaxed">
              I’m a problem solver at heart, passionate about exploring new tools, frameworks, and design patterns. I thrive in collaborative environments and enjoy taking on challenges that allow me to grow as a developer and contribute to meaningful projects.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-[#e07a5f] pl-4 italic">
                <p className="text-[#3d5a40]">
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
