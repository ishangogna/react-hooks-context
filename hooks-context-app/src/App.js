import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/toggleTheme';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;