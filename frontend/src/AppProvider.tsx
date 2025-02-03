import { createContext, useState, useEffect } from 'react';

// Create a generic context for global app values
export const AppContext = createContext({});
interface AppProviderProps{
	children: React.ReactNode;
}
function AppProvider(prop: AppProviderProps) {

  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');  // Example of another global state

  const handleResize = () => {
    const width = window.innerWidth;
    setScreenWidth(width);

    if (width < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();  // Set the initial value based on window size
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Example method for toggling theme
  const toggleTheme = () => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider value={{ isMobile, screenWidth, isSidebarOpen, toggleSidebar: () => setIsSidebarOpen(prev => !prev), theme, toggleTheme }}>
      {prop.children}
    </AppContext.Provider>
  );
};

export default AppProvider;