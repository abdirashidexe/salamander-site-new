import Image from "next/image";

export default function AuthorsPage() {
  return (
    <article>
        <>
        <h1>About the Authors</h1>

        <Image
              src="/Blake.png"
              alt="Blake Linkedin Profile Picture"
              className="w-[40px] h-auto block md:hidden"
              width={300}
              height={200}
        />

        <h2>Blake Hansen</h2>

        <h3>
        <a href="https://www.linkedin.com/in/blakehansenprogrammer/">LinkedIn</a>
        <a href="https://github.com/HansenBlakestudentgreenriveredu">  Github</a>
        </h3>

        <p>I’m Blake, a software engineering student at Green River College working toward my Bachelor’s in IT with a focus on software development. I’m passionate about front-end programming, and I love designing clean, responsive websites using HTML, CSS, and Bootstrap. One of my favorite projects is a five-page website inspired by Tesla’s product lineup, complete with media queries to ensure a seamless experience across devices.</p>

        <p>In addition to my technical skills, I bring 5 years of professional sales experience, which has sharpened my communication, client-focused mindset, and ability to understand and solve real-world problems. I’m currently seeking an internship or entry-level opportunity in front-end development, sales engineering, or data analysis; ideally roles where I can bridge my background in sales with my passion for technology. I’m open to both in-person and remote positions.</p>

        <Image
              src="/Shawn.jpg"
              alt="Shawn Linkedin Profile Picture"
              className="w-[40px] h-auto block md:hidden"
              width={300}
              height={200}
        />

        <h2>Shawn Nguru</h2>

        <h3>
        <a href="https://www.linkedin.com/in/shawn-nguru-215412346/">LinkedIn</a>
        </h3>

        <p>I am an aspiring software developer currently pursuing my Bachelor of Applied Science (BAS) with a strong foundation in Java, HTML, CSS, and JavaScript. With a passion for software development, I’m eager to continue learning and expanding my skill set. I’m excited about the opportunities to apply my knowledge, collaborate with others, and contribute to innovative projects.</p>

        {/* <Image
              src=""
              alt="Abdi Linkedin Profile Picture"
              className="w-[40px] h-auto block md:hidden"
              width={300}
              height={200}
        /> */}

        <h2>Abdirashid Ahmed</h2>

        <h3>
        <a href="https://www.linkedin.com/in/abdirashid1/">LinkedIn</a>
        <a href="https://github.com/abdirashidexe">  Github</a>
        </h3>

        <p>I'm a Muslim aspiring Full Stack Developer with a passion for building clean, functional interfaces with the goal of helping serve society in a meaningful way. I’ve been learning independently and building real projects using JavaScript, Java, and Git.

        My GitHub highlights this journey, and I’m looking for internships and junior roles where I can grow, contribute, and keep learning in a team environment.</p>

        </>
    </article>
  )
}