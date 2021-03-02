import { data$ } from "./data/data";
import { useEffect, useState } from "react";
import SliceList from "./components/SliceList/SliceList";
import './App.css';
import 'react-slideshow-image/lib/css/styles.css'


const App = () => {

  const [dataShow,setDataShow] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try{
        const response = await data$;
        if(!response || response.length === 0){
          console.log('Not Found Data');
        }else{
          setDataShow(response);
        }

      }catch(error){
        console.log(error.message);
      }
    }
    getData();
  }, []);
  
  return (
    <div className="App">
      <SliceList data={dataShow} />
    </div>
  );
}

export default App;
