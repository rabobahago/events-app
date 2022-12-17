import Image from "next/image";
import Link from "next/link";
const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image alt="logo" src={"/images/logo.jpg"} width={50} height={50} />
        <nav>
          <ul>
            <li>
              <Link legacyBehavior href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about-us" passHref>
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/events" passHref>
                <a>Events</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="title">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined
      </p>
    </div>
  </header>
);
export default Header;
