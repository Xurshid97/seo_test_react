import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [items, setItems] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  const closePopup = () => {
    setIsPopupVisible(false);
  }
  const openPopup = () => {
    setIsPopupVisible(true);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Store Items</h1>
      {/* pop up button shows lorem 200 info in div tag */}
      <button
        onClick={openPopup}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none', 
          borderRadius: '4px',
          padding: '10px 20px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        Show Page Info
      </button>
      
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

      {isPopupVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '500px',
              maxHeight: '80%',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            <button
              onClick={closePopup}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
            <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Page Info</h2>
            <div style={{ fontSize: '14px', lineHeight: '1.5' }}>{loremIpsum}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
