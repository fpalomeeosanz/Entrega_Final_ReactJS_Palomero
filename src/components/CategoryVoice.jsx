import Loader from './Loader';
import { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

function CategoryVoice() {
  const [voiceItems, setVoiceItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataBase = getFirestore();
      const itemsCollection = collection(dataBase, 'items');
      const q = query(itemsCollection, where('category', '==', 'Voice'));

      try {
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const voiceData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setVoiceItems(voiceData);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="category-voice">
      <h1>Voices</h1>
      {loading ? (
        <Loader />
      ) : voiceItems.length > 0 ? (
        <ul>
          {voiceItems.map((item) => (
            <li className = "category-style" key={item.id}>{item.title + ": " + item.description}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron ítems en esta categoría.</p>
      )}
    </div>
  );
}

export default CategoryVoice
