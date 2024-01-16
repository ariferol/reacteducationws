import React, {useState} from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import TableComponent from './TableComponent.jsx';
import Kisi from './Kisi.jsx';

const jsonData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Bob Johnson', age: 35 }
];

function App() {
  const [title, setTitle] = useState('Title');
  const [counter, setCounter] = useState(0);
  
  const [kisiler, setKisiler] = useState([
    {
      firstname: "Alp",
      lastname: "Eren",
      age: 26,
    },
    {
      firstname: "Ali",
      lastname: "Eren",
      age: 27,
    },
  ]);

  const onKisiDelete = (name) => {
    setKisiler(kisiler.filter(kisi => kisi.firstname !== name));
  }
  console.log("kisiler: ", kisiler);

  return (
    <div className="App">
      <ClassComponent title="Title" />
      <FunctionalComponent title={title} description="Text" />
      <button type="button" onClick={() => setTitle("Alptuğ")}>Title Değiştir</button>
      <button type="button" onClick={() => setCounter(1)}>Count Değiştir {counter}</button>

      <h1>Table Example</h1>
      <TableComponent data={jsonData} />


      <div className="container">
      <div className='row'>
        <div className='col-12'>
          <ul className='kisi-list'>
            {
              kisiler.map(kisi => <Kisi
                key={kisi.firstname} firstname={kisi.firstname} lastname={kisi.lastname} age={
                  kisi.age} deleteKisi={onKisiDelete} />)
            }
          </ul>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;