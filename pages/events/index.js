import Head from "next/head";
import Image from "next/image";
const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>
      {data.map((ev) => (
        <a href={`/events/${ev.id}`}>
          <Image src={ev.image} alt={ev.title} width={200} height={300} />
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </a>
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
