import Loader from './Loader';
import { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

function CategoryCoach() {
  const [coachItems, setCoachItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataBase = getFirestore();
      const itemsCollection = collection(dataBase, 'items');
      const q = query(itemsCollection, where('category', '==', 'Coach'));

      try {
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const coachData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setCoachItems(coachData);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="category-coach">
      <h1>Coaching</h1>
      {loading ? (
        <Loader />
      ) : coachItems.length > 0 ? (
        <ul>
          {coachItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron ítems en esta categoría.</p>
      )}
    </div>
  );
}

export default CategoryCoach
