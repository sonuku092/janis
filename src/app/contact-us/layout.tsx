import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: "Contact Us - Janis Care",
    description: "Janis Care is a platform for managing your health and wellness.", 
    icons: {
        icon: [
          {
            url: '/images/logo.png',
            media: '(prefers-color-scheme: light)',
          },
          {
            url: '/images/logo.png',
            media: '(prefers-color-scheme: dark)',
          },
        ],
      },
  };

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
            <main>
                <Navbar />
                {children}
            </main>
    );
};

export default Layout;