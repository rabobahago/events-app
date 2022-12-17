import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const EventCatPage = ({ data, pageName }) => {
  const firstLetter = pageName.slice(0, 1).toUpperCase();
  const name = firstLetter.concat(pageName.slice(1));
  return (
    <div>
      <h1>Events in {name}</h1>
      <div>
        {data &&
          data.map((ev) => (
            <Link
              legacyBehavior
              key={ev.id}
              href={`/events/${ev.city}/${ev.id}`}
              passHref
            >
              <a>
                <Image src={ev.image} alt={ev.title} width={300} height={300} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default EventCatPage;
export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  return {
    props: { data: data, pageName: id },
  };
}
