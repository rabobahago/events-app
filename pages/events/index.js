import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a>
            <Image src={ev.image} alt={ev.title} width={200} height={300} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
