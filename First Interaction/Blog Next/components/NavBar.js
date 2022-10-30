import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
        }
        .NavBar li {
          display: inline;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
