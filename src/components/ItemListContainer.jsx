import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Loader from './Loader';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

//se crea ItemListContainer para mostra listado yse conecta con firebase

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
  
    const dataBase = getFirestore();

    const itemsCollection = collection( dataBase, 'items' )
    getDocs (itemsCollection).then((snapshot) => {
      if (!snapshot.empty){
       setItems(snapshot.docs.map(doc =>{
            return {
                id: doc.id,
                ...doc.data()
            }
        }))
       }

    });
    setLoading(false);
    }, 3000);
},[]);

  return (
    <div className="item-list-container">
      {loading ? (
        <Loader />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;