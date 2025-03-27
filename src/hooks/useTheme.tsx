import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Theme = {
  backgroundColor: string;
  color: string;
  TextColor: string;
};

type ThemeContextType = {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => Promise<void>;
};

const lightTheme = {
  backgroundColor: '#fff',
  itemBackgroundColor: '#000',
  color: '#000',
  TextColor: '#000',
};

const darkTheme = {
  backgroundColor: '#1a1a1a',
  itemBackgroundColor: '#1a1a1a',
  color: '#fff',
  TextColor: '#fff',
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDarkMode: false,
  toggleTheme: async () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 初始化时从AsyncStorage读取主题
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        setIsDarkMode(savedTheme === 'dark');
      } catch (error) {
        console.error('Failed to load theme:', error);
      }
    };
    loadTheme();
  }, []);

  // 切换主题并保存
  const toggleTheme = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    try {
      await AsyncStorage.setItem('theme', newMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};