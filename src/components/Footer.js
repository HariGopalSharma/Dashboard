const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  };
  
  const Footer = () => {
    return (
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Real Estate</p>
      </footer>
    );
  };
  
  export default Footer;
  