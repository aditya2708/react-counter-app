// Import React dan Hooks 
import React, { useState, useEffect } from 'react';
import './App.css'; // Mengimpor file CSS


function App() {
  // useState untuk membuat state count
  const [count, setCount] = useState(() => {
    // Ambil nilai dari local storage jika ada
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount) : 0; // Kembalikan nilai dari local storage atau 0
  });

  useEffect(() => {
    // Simpan count ke local storage setiap kali count berubah
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  // Fungsi untuk meningkatkan count
  const increment = () => {
    console.log('Increment clicked'); 
    setCount(count + 1); // Perbarui nilai count
  };

  // Fungsi untuk mengurangi count
  const decrement = () => {
    console.log('Decrement clicked'); 
    setCount(count - 1); // Perbarui nilai count
  };

  // Fungsi untuk mereset count ke nol
  const reset = () => {
    console.log('Reset clicked'); //
    setCount(0); // Set count ke 0
  };

  // Render komponen
  return (
    <div className="container"> 
      <h1>Counter App</h1>
      <h2 className="count-text">Count: {count}</h2> 
      <div className="button-container"> 
        <button className="button" onClick={increment}>Increment</button> 
        <button className="button" onClick={decrement}>Decrement</button> 
        <button className="button" onClick={reset}>Reset</button> 
      </div>
    </div>
  );
}

// Ekspor komponen untuk digunakan di file index.js
export default App;
