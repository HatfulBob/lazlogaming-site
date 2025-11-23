import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><p>Games:</p></li>
        <ul>
          <li><Link to="/games/otj">On The Job</Link></li>
        </ul>
        <li><p>Socials:</p></li>
        <ul>
          <li><a href="https://discord.com/invite/ehCHCBQZSV" target="_blank" rel="noopener noreferrer">Discord</a></li>
          <li><a href="mailto:lazlogaminghelp@gmail.com">Email</a></li>
        </ul>
      </ul>
    </nav>
  );
}

export default Navigation;
