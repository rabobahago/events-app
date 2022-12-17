import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data?.map((ev) => (
        <Link
          legacyBehavior
          className="card"
          key={ev.id}
          href={`/events/${ev.id}`}
          passHref
        >
          <a className="card">
            <Image src={ev.image} alt={ev.title} width={400} height={400} />{" "}
            <h2>{ev.title} </h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
