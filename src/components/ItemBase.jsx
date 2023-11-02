import { useState } from 'react';
import { useEffect } from 'react';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import ItemDetail from './ItemDetail';


function ItemBase() {

  const [items,setItems] = useState ([]);

  useEffect(() => {

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
 }, []);
 
 return ( 
    <>
      <h1> Lista de Servicios </h1>
      <ItemDetail {...items}/>
    </>
 );
}

export default ItemBase
