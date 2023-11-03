import Loader from './Loader';
import { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';


function CategoryAds() {
  const [adsItems, setAdsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataBase = getFirestore();
      const itemsCollection = collection(dataBase, 'items');
      const q = query(itemsCollection, where('category', '==', 'Ads'));

      try {
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const adsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setAdsItems(adsData);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="category-ads">
      <h1>Ads</h1>
      {loading ? (
        <Loader />
      ) : adsItems.length > 0 ? (
        <ul>
          {adsItems.map((item) => ( 
            <li className = "category-style" key={item.id}>{item.title + ": " + item.description}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron ítems en esta categoría.</p>
      )}
    </div>
  );
}

export default CategoryAds;
