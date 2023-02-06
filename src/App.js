import { useState } from 'react';
import { data } from './data'
import './App.css';


function App() {
  const [gifts, setGifts] = useState(data);

  const removeId = (id) => {
    let newArr = gifts.filter(item => item.id !== id);
    setGifts(newArr);
    console.log(id);
    console.log(newArr);
  }

  return (
    <div>
      <div className='container'>
        <h1>List of {gifts.length} gifts</h1>
      </div>
    
      {gifts.map ((gift =>  {
        const {id, gifty, image} = gift;
        return (
          <div key = {id}>
            <div className='container'>
              <h2>{id} - {gifty}</h2>
            </div>
            <div className='container'>
              <img src= {image} width = "300px" alt="gift"/>
            </div>
            <div className='container'>
              <button className='button' onClick={() => removeId({id})}>remove</button>
            </div>
          </div>
        )
      }
        ))}
      <div className='container'>
        <button className='button' onClick={() => setGifts([])}>delete all</button>
      </div>
    </div>  
  )


}

export default App;

  