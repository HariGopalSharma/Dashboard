import Layout from '../../components/Layout';
import Image from 'next/image';
import dummyTestimonials from '../../data/testimonials'

const Testimonials = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center', color: '#fff', backgroundColor: '#000', padding: '10px', borderRadius: '5px' }}>All Testimonials</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#000', padding: '20px', borderRadius: '10px' }}>
        {dummyTestimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ width: '30%', margin: '10px', padding: '15px', border: '1px solid #444', backgroundColor: '#333', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ marginRight: '10px' }}>
                <Image src={testimonial.image} alt={`Profile of ${testimonial.author}`} width={50} height={50} />
              </div>
              <h3 style={{ color: '#fff' }}>{testimonial.author}</h3>
            </div>
            <div>
              {/* Star ratings */}
              <div style={{ marginBottom: '10px' }}>
                {[...Array(testimonial.rating)].map((star, index) => (
                  <span key={index} style={{ color: '#FFD700', fontSize: '1.5em' }}>&#9733;</span>
                ))}
              </div>
              {/* Testimonial content */}
              <p style={{ color: '#ddd' }}>{testimonial.content}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Testimonials;
