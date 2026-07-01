import Image from "next/image";

export default function Home() {
  return (
    <div>
      I am Home page

      <div className="container my-5 size-80 bg-red-300 relative">
        <Image src="/img.avif" fill alt="img not found" className="object-cover" />
      </div>
    </div>
  );
}
