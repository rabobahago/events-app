import React from "react";
import Image from "next/image";
import Link from "next/link";

const CatEvent = ({ data, pageName }) => {
  const firstLetter = pageName.slice(0, 1).toUpperCase();
  const name = firstLetter.concat(pageName.slice(1));
  return (
    <div className="cat_events">
      <h1>Events in {name}</h1>
      <div className="content">
        {data &&
          data.map((ev) => (
            <Link
              legacyBehavior
              key={ev.id}
              href={`/events/${ev.city}/${ev.id}`}
              passHref
            >
              <a className="card">
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

export default CatEvent;
