import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Main Content Area - You can replace this with your content later */}
      <main className="main-content">
        <div className="content-container">
          <h1>Welcome to NotesHub</h1>
          <p>Your comprehensive platform for academic notes and resources.</p>
          {/* Add your page content here */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;