import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const Header = () => (
  <header>
    <nav>
      <img />
      <Link legacyBehavior href="/" passHref>
        <a>Home</a>
      </Link>
      <Link legacyBehavior href="/about-us" passHref>
        <a>About Us</a>
      </Link>
      <Link legacyBehavior href="/events" passHref>
        <a>Events</a>
      </Link>
    </nav>
  </header>
);
export default Header;
