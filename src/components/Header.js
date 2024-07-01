import Link from 'next/link';

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 0',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none' }}>
          <li style={{ margin: '0 10px' }}><Link href="/">Home</Link></li>
          <li style={{ margin: '0 10px' }}><Link href="/listings">Listings</Link></li>
          <li style={{ margin: '0 10px' }}><Link href="/testimonials">Testimonials</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
