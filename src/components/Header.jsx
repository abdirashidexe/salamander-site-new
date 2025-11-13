import Link from "next/link";
import Image from "next/image";


export default function Header() {
    return (
      <header>
        <>
            <Image
              src="/Salamander-Logo.webp"
              alt="Salamander Logo"
              className="w-[40px] h-auto block md:hidden"
              width={300}
              height={200}
            />
            <h1>header</h1>
        </>
      <h1>My App</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/video">Video</Link>
        <Link href="/csv">CSV</Link>
      </nav>
    </header>
  );
}
