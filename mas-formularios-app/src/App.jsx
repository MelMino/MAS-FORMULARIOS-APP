import { useState } from 'react'
import './App.css'
import FormPage from './assets/Pages/FormPage/FormPage';
import MainPage from './assets/Pages/MainPage/MainPage';


function App() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <FormPage inputs={data} setInputs={setData} />
      <MainPage inputs={data} />
    </div>
  );
}

export default App
