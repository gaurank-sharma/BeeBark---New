import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import all pages
import FeedPage from './components/Feed';
import JobsPage from './components/Jobs';
import MessagesPage from './components/Messages';
import ProfilePage from './components/Profile';
import ConnectionsPage from './components/Connections';
import EventsPage from './components/Events';    // NEW
import MemoriesPage from './components/Memories'; // NEW
import WalletPage from './components/Wallet';
import Sidebar from './components/Sidebar'; // Adjust path
import FeedbackPage from'./components/FeedbackPage';

import EcommercePage from './pages/Ecommerce';
import RentAndSellPage from './pages/RentAndSell';
import SupportPage from './components/SupportPage';
import ProjectsCenter from './components/ProjectsCenter';
import ReelsPage from './pages/ReelsPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage/>} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/rent-sell" element={<RentAndSellPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/connections" element={<ConnectionsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path ="/projects" element={<ProjectsCenter />} />
          <Route path  ="/reels" element={<ReelsPage  /> }  />
          <Route path="*" element={<div className="text-center mt-20">Page not found</div>} />
        </Routes>
      </Layout>
  );
}

export default App;