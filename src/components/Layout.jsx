import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans flex">
      {/* 1. Sidebar (Fixed Left) */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Inner Container for padding */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
          {/* 3. Header */}
          <Header toggleSidebar={() => setIsSidebarOpen(true)} />

          {/* 4. The Page Content (Feed, Jobs, etc.) goes here */}
          <div className="max-w-6xl mx-auto">
             {children}
          </div>

          {/* 5. Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;