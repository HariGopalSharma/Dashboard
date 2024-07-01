import Layout from '../../components/Layout';
import Image from 'next/image';
import listings from '../../data/listings'; 

const Listings = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center', color: '#fff', backgroundColor: '#000', padding: '10px', borderRadius: '5px' }}>All Listings</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#000', padding: '20px', borderRadius: '10px' }}>
        {listings.map((listing) => (
          <div key={listing.id} style={{ width: '30%', margin: '10px', padding: '15px', border: '1px solid #444', backgroundColor: '#333', borderRadius: '5px' }}>
            <div style={{ marginBottom: '10px' }}>
              <Image src={listing.image} alt={`Image of ${listing.title}`} width={300} height={200} />
            </div>
            <h3 style={{ color: '#fff' }}>{listing.title}</h3>
            <p style={{ color: '#ddd' }}><strong>Price:</strong> {listing.price}</p>
            <p style={{ color: '#ddd' }}><strong>Location:</strong> {listing.location}</p>
            <p style={{ color: '#ddd' }}><strong>Bedrooms:</strong> {listing.bedrooms}</p>
            <p style={{ color: '#ddd' }}><strong>Bathrooms:</strong> {listing.bathrooms}</p>
            <p style={{ color: '#ddd' }}><strong>Area:</strong> {listing.area}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Listings;
