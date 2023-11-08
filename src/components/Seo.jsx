import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const Seo = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dataBase = getFirestore();
      const itemsCollection = collection(dataBase, "items");
      const q = query(itemsCollection, where("id", "==", itemId));

      try {
        const snapshot = await getDocs(q);

        if (snapshot.size > 0) {
          setItem(snapshot.docs[0].data());
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, [itemId]);

  return (
    <div className="seo-view">
      {item && (
        <div>
          <h2>ID: {item.id}</h2>
        </div>
      )}
      {!item && (
        <p>No se encontró el elemento.</p>
      )}
    </div>
  );
};

export default Seo;