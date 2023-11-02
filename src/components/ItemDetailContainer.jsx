import { useState, useEffect } from 'react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'; 
import ItemDetail from './ItemDetail';

// se cambia la logica para almacenar un solo articulo no una lista, y se incluyen  los datos del artículo al componente ItemDetail la variable "q" para la consulta


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataBase = getFirestore();
      const itemsCollection = collection(dataBase, 'items');
      const q = query(itemsCollection, where('id', '==', id));

      try {
        const snapshot = await getDocs(q);
        if (snapshot.exists) {
          const itemData = snapshot.docs[0].data();
          setItem(itemData);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>No encuentras lo que buscas, escríbenos.</p>}
      <Loader />
    </div>
  );
};

export default ItemDetailContainer;
