import { createContext, useState, useEffect } from 'react';

// Create a generic context for global app values
interface AppContextType {
	isMobile: boolean;
}
export const AppContext = createContext<AppContextType | undefined>(undefined);
interface AppProviderProps{
	children: React.ReactNode;
}
function AppProvider(prop: AppProviderProps) {

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const width = window.innerWidth;

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


  return (
    <AppContext.Provider value={{ isMobile }}>
      {prop.children}
    </AppContext.Provider>
  );
};

export default AppProvider;