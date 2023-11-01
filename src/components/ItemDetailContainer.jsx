import { useState, useEffect } from 'react'; 
import Item from './Item';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, where } from 'firebase/firestore';


//se importa la promesa simulada y se cera stado para almacenar el elemento, se carga el Loader y se inserta y se carga el componente ItemCount y pasa addToCart como prop

const ItemDetailContainer = () => { 

  const { id } = useParams( ); 
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [items,setItems] = useState ([]);
  const dataBase = getFirestore();
    const fullCollection = collection(dataBase, 'items');
    const field = "id";
    const logical = "==";
    const params = useParams();
    const itemsCollection = where(
       fullCollection,
       field, 
       logical, 
       params.id);
       getDocs(itemsCollection).then((snapshot) => {
      if (!snapshot.empty){
       setItems(snapshot.docs.map(doc =>{
            return {
                id: doc.id,
                ...doc.data()
            }
        }))
       }

    });


  useEffect(() => {
    const selectedItem = items[0]; 

    if (selectedItem) {
      setItem(selectedItem);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id,items]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <Loader />
      ) : item ? (
        <div>
          <Item item={item} imageUrl={item.imageUrl} />
        </div>
      ) : (
        <p>No encuentras lo que buscas, escríbenos!.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer