import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Store Items</h1>
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {items.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Link to={`/item/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }}
              />
              <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</div>
              <div style={{ marginTop: '5px', color: 'green' }}>${item.price}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
