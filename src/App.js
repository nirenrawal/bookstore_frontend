import React from 'react';
import './App.css';
import BookList from "./components/booklist/BookList";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>

        <BookList />

    </div>
  );
}

export default App;
