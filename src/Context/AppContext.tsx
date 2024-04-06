import React, { createContext, useContext, useEffect, useState } from 'react';
import tweetsData from '../Mocks/tweets.json';

type AppContextType = {
  tweets: Tweet[];
  addTweet: (tweet: Tweet) => void;
  user: User;
};

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

export type Tweet = {
  id: number;
  author: string;
  content: string;
  createdAt: string; // Use string for simplicity
};

export type User = {
  id: number;
  name: string;
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
    const user = {
        id: 1,
        name: 'Daniel Miles',
    };

    useEffect(() => {
        // Load mock data into the context when the component mounts
        setTweets(tweetsData);
      }, []);

    const addTweet = (tweet: Tweet) => {
        setTweets((prevTweets) => [...prevTweets, tweet]);
    };

    return (
        <AppContext.Provider value={{ tweets, addTweet, user }}>
            {children}
        </AppContext.Provider>
    );
};
