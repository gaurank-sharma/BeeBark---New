import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 py-6 border-t border-white/5 text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-brand-muted">
        <p>© 2025 BeeBark Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-brand-yellow transition">Privacy Policy</a>
          <a href="#" className="hover:text-brand-yellow transition">Terms of Service</a>
          <a href="#" className="hover:text-brand-yellow transition">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;