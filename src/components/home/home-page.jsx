import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const HomePage = ({ data }) => {
  return (
    <main>
      {data.map((ev) => (
        <Link legacyBehavior key={ev.id} href={`/events/${ev.id}`} passHref>
          <a>
            <Image src={ev.image} alt={ev.title} width={200} height={300} />{" "}
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        </Link>
      ))}
    </main>
  );
};
export default HomePage;
