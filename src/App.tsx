import './App.css';
import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, NotFound404, CreateAccount, LogIn, Profile, FoodView, Preview, Messages, Matches, Search, ChangeSubscription } from './components';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/changeSubscription" element={<ChangeSubscription />} />
      <Route path="/matches/:id" element={<Matches />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/food" element={<FoodView />}/>
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
