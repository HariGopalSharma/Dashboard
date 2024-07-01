"use client";

import Image from 'next/image';
import Layout from '../components/Layout';
import listings from '../data/listings'; // Import listings data
import dummyTestimonials from '../data/testimonials';
import { useRouter } from 'next/navigation';

const sectionStyle = {
  marginBottom: '40px',
  padding: '40px 20px',
  backgroundColor: '#000',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  textAlign: 'center',
};

const dividerStyle = {
  margin: '40px 0',
  borderTop: '2px solid #ddd',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s ease',
};

const buttonHoverStyle = {
  backgroundColor: '#005bb5',
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '24px',
  color: '#fff',
  textAlign: 'center',
};

const contentStyle = {
  fontSize: '18px',
  color: '#fff',
  maxWidth: '800px',
  margin: 'auto',
};

const Home = () => {
  const router = useRouter();

  const agentImageUrl = 'https://randomuser.me/api/portraits/men/1.jpg'; // Placeholder agent image

  const handleViewListings = () => {
    router.push('/listings');
  };

  const handleViewTestimonials = () => {
    router.push('/testimonials');
  };

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1 style={headingStyle}>Welcome to Our Real Estate Website</h1>

        {/* Section 1: Agent Information */}
        <section style={sectionStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '20px' }}>
              <Image src={agentImageUrl} alt="Real Estate Agent" width={200} height={200} style={{ borderRadius: '50%' }} />
            </div>
            <h2 style={headingStyle}>Meet Our Real Estate Agent</h2>
            <p style={contentStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Contact: agent@example.com</p>
          </div>
        </section>

        <div style={dividerStyle}></div>

        {/* Section 2: Property Listings */}
        <section style={sectionStyle}>
          <div>
            <h2 style={headingStyle}>Featured Listings</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              {listings.slice(0, 3).map((listing) => (
                <div key={listing.id} style={{ width: '300px', margin: '20px', padding: '10px', border: '1px solid #DDD', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                  <Image src={listing.image} alt={`Image of ${listing.title}`} width={300} height={200} />
                  <h3>{listing.title}</h3>
                  <p><strong>Price:</strong> {listing.price}</p>
                  <p><strong>Location:</strong> {listing.location}</p>
                  <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
                  <p><strong>Bathrooms:</strong> {listing.bathrooms}</p>
                  <p><strong>Area:</strong> {listing.area}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                className="button-link"
                onClick={handleViewListings}
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                View All Listings
              </button>
            </div>
          </div>
        </section>

        <div style={dividerStyle}></div>

        {/* Section 3: Testimonials */}
        <section style={sectionStyle}>
          <div>
            <h2 style={headingStyle}>Client Testimonials</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              {dummyTestimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} style={{ width: '300px', margin: '20px', padding: '10px', border: '1px solid #DDD', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <Image src={testimonial.image} alt={`Image of ${testimonial.author}`} width={50} height={50} style={{ borderRadius: '50%', marginRight: '10px' }} />
                    <strong>{testimonial.author}</strong>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    {/* Display star rating (placeholder) */}
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p>{testimonial.content}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button
                className="button-link"
                onClick={handleViewTestimonials}
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
              >
                View All Testimonials
              </button>
            </div>
          </div>
        </section>

        <div style={dividerStyle}></div>
      </div>
    </Layout>
  );
};

export default Home;
