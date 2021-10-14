import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [values, setValues] = useState(data);

  const removeValues = () => {
    setValues([]);
  }
  return <>
    <main>
      <section className='container'>
        <h3>{values.length} birthdays today</h3>
        <List values={values} />
        <button type='button' className='btn' onClick={removeValues}>Clear List</button>
      </section>
    </main>
  </>
}

export default App;
