const EventCatPage = ({ data }) => {
  return (
    <div>
      <h1>Events in London</h1>
      <a href="/events/london/ev">Event 1</a>
      <a href="/events/event2">Event 2</a>
      <a href="/events/event3">Event 3</a>
      <a href="/events/event4">Event 4</a>
      <a href="/events/event5">Event 5</a>
      <a href="/events/event6">Event 6</a>
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
    props: { data: data },
  };
}
