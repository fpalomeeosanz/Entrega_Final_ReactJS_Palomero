import Loader from './Loader';
import { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

function CategoryWeb() {
  const [webItems, setWebItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataBase = getFirestore();
      const itemsCollection = collection(dataBase, 'items');
      const q = query(itemsCollection, where('category', '==', 'Web'));

      try {
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const webData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setWebItems(webData);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="category-web">
      <h1>Web</h1>
      {loading ? (
        <Loader />
      ) : webItems.length > 0 ? (
        <ul>
          {webItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron ítems en esta categoría.</p>
      )}
    </div>
  );
}

export default CategoryWeb;
