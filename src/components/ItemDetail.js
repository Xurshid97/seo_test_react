import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ItemDetail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setItem(data));
    }, [id]);
  
    if (!item) return <div>Loading...</div>;
  
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        maxWidth: '400px',
        margin: 'auto',
      }}>
        <h1 className="text-xl font-bold">{item.title}</h1>
        <div>
          <img src={item.image} alt={item.title} style={{
            width: '100%',
            height: 'auto',
            borderRadius: '5px',
          }} />
        </div>
        
        <p>{item.description}</p>
        <p className="font-bold">${item.price}</p>
      </div>
    );
  }

  export default ItemDetail;    