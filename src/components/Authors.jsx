import Image from "next/image";

export default function Footer() {
  return (
    <Article>
        <>
        <h1>Authors</h1>

        <Image
              src="/Blake.png"
              alt="Blake Linkedin Profile Picture"
              className="w-[40px] h-auto block md:hidden"
              width={300}
              height={200}
        />
        <a href="https://www.linkedin.com/in/blakehansenprogrammer/">Blake</a>
        <p>I’m Blake, a software engineering student at Green River College working toward my Bachelor’s in IT with a focus on software development. I’m passionate about front-end programming, and I love designing clean, responsive websites using HTML, CSS, and Bootstrap. One of my favorite projects is a five-page website inspired by Tesla’s product lineup, complete with media queries to ensure a seamless experience across devices.

        In addition to my technical skills, I bring 5 years of professional sales experience, which has sharpened my communication, client-focused mindset, and ability to understand and solve real-world problems. I’m currently seeking an internship or entry-level opportunity in front-end development, sales engineering, or data analysis; ideally roles where I can bridge my background in sales with my passion for technology. I’m open to both in-person and remote positions.</p>

        <Image
              src="/Salamander-Logo.webp"
              alt="Salamander Logo"
              className="w-[40px] h-auto block md:hidden"
              width={300}
              height={200}
        />
        <p></p>

        <Image
              src="/Salamander-Logo.webp"
              alt="Salamander Logo"
              className="w-[40px] h-auto block md:hidden"
              width={300}
              height={200}
            />
        <p></p>
        </>
    </Article>
  )
}