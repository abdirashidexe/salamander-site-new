import Image from "next/image";

export default function AuthorsPage() {
  return (
    <article className="authors-container">
      <h1 className="authors-title">About the Authors</h1>

      <section className="authors-grid">
        {/* --- Blake --- */}
        <AuthorCard
          name="Blake Hansen"
          img="/Blake.png"
          alt="Blake Linkedin Profile Picture"
          links={[
            { label: "LinkedIn", url: "https://www.linkedin.com/in/blakehansenprogrammer/" },
            { label: "Github", url: "https://github.com/HansenBlakestudentgreenriveredu" }
          ]}
        >
          <p>
            I’m Blake, graduating next month with a BA in Information Technology with a focus on software development. I have a strong technical foundation and five years of sales experience that sharpened my communication and problem-solving skills. I’m seeking an entry-level role where I can combine IT knowledge with business insight—such as business analysis, technical sales, or technical coordination; supporting teams and clients.
          </p>
        </AuthorCard>

        {/* --- Shawn --- */}
        <AuthorCard
          name="Shawn Nguru"
          img="/Shawn.jpg"
          alt="Shawn Linkedin Profile Picture"
          links={[
            { label: "LinkedIn", url: "https://www.linkedin.com/in/shawn-nguru-215412346/" }
          ]}
        >
          <p>
            I am an aspiring software developer currently pursuing my Bachelor of Applied Science (BAS)
            with a strong foundation in Java, HTML, CSS, and JavaScript. With a passion for software development,
            I’m eager to continue learning and expanding my skill set. I’m excited about the opportunities to apply
            my knowledge, collaborate with others, and contribute to innovative projects.
          </p>
        </AuthorCard>

        {/* --- Abdi --- */}
        <AuthorCard
          name="Abdirashid Ahmed"
          img="/Abdi.jpg"
          alt="Abdi Linkedin Profile Picture"
          links={[
            { label: "LinkedIn", url: "https://www.linkedin.com/in/abdirashid1/" },
            { label: "Github", url: "https://github.com/abdirashidexe" }
          ]}
        >
          <p>
            I’m a Muslim aspiring Full Stack Developer with a passion for building clean, functional interfaces
            with the goal of helping serve society in a meaningful way. I’ve been learning independently and building
            real projects using JavaScript, Java, and Git.
          </p>

          <p>
            My GitHub highlights this journey, and I’m looking for internships and junior roles where I can grow,
            contribute, and keep learning in a team environment.
          </p>
        </AuthorCard>
      </section>
    </article>
  );
}

/* --- Reusable Author Card Component --- */
function AuthorCard({ name, img, alt, links, children }) {
  return (
    <div className="author-card">
      <Image
        src={img}
        alt={alt}
        width={250}
        height={250}
        className="author-img"
      />

      <h2 className="author-name">{name}</h2>

      <div className="author-links">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank">
            {link.label}
          </a>
        ))}
      </div>

      <div className="author-description">{children}</div>
    </div>
  );
}