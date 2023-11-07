import { useState, useEffect } from 'react';
import Loader from './Loader';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'; 
import ItemListContainer from './ItemListContainer';


//cambios en logica d componente y nomnre dd "id" y link

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!itemId) {
      console.error('ID no válido proporcionado.');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      const dataBase = getFirestore();
      const itemsCollection = collection(dataBase, 'items');
      const q = query(itemsCollection, where('id', '==', itemId));
      
      try {
        const snapshot = await getDocs(q);
        
        if (snapshot.size > 0) {
          const itemData = snapshot.docs[0].data();
          setItem(itemData);
        } 
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
      
      setLoading(false);
    };

    fetchData();
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <Loader />
      ) : item ? (
        <ItemListContainer key={item.id} item={itemId} imageUrl={item.imageUrl} />
      ) : (
        <Link className='contact-link' to={`/category/contact`}>
        <p>No encuentras lo que buscas, escríbenos.</p>
        </Link>
      )}
    </div>
  );
};

export default ItemDetailContainer;
