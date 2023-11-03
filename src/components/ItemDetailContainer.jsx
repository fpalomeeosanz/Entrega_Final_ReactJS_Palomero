import { useState, useEffect } from 'react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'; 
import ItemDetail from './ItemDetail';


//pruebas y cambios en logica y captura em promesa

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataBase = getFirestore();
      const itemsCollection = collection(dataBase, 'items');
      const q = query(itemsCollection, where('id', '==', id));

      getDocs(q)
        .then((snapshot) => {
          if (snapshot.exists) {
            const itemData = snapshot.docs[0].data();
            setItem(itemData);
          } else {
            console.error('No se encontraron datos para el ID proporcionado.');
          }
        })
        .catch((error) => {
          console.error('Error al obtener datos:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [id]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <Loader />
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <p>No encuentras lo que buscas, escríbenos.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;


