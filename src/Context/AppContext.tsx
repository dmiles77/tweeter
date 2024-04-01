import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  tweets: Tweet[];
  addTweet: (tweet: Tweet) => void;
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

type Tweet = {
  id: number;
  author: string;
  content: string;
  createdAt: Date;
};

// custom hook to access the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    const addTweet = (tweet: Tweet) => {
        setTweets((prevTweets) => [...prevTweets, tweet]);
    };

    return (
        <AppContext.Provider value={{ tweets, addTweet }}>
            {children}
        </AppContext.Provider>
    );
};
