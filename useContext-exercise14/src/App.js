import React, { useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './components/CartContext';
import DishesList from './components/DishesList';
import Cart from './components/Cart';

// Create a context for the theme
const ThemeContext = createContext();

// Define the themes
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#61dafb"
  }
};

// Create a ThemeProvider component to provide the theme context
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to consume the theme context
const useTheme = () => useContext(ThemeContext);

// Theme component
const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme.background, padding: '20px' }}>
      <button onClick={toggleTheme} style={{ background: theme.foreground, color: theme.background, border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
        Toggle Theme
      </button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<>
          <ThemeProvider>
            <Theme />
          </ThemeProvider>
        </>} />
        <Route path='/dish' element={
          <>
            <CartProvider>
              <div className="container">
                <h1>Restaurant Menu</h1>
                <div className="row">
                  <div className="col">
                    <DishesList />
                  </div>
                  <div className="col">
                    <Cart />
                  </div>
                </div>
              </div>
            </CartProvider>
          </>
        } />

      </Routes>
    </BrowserRouter>
  );
};

export default App;