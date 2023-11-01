import { useState, useEffect } from 'react';
import ItemList from './ItemList';
//import { mockItems } from "./mockItems.js";
import Loader from './Loader';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

//se crea ItemListContainer para mostra listado

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    
    //setItems(mo);
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
    }, 1000);
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