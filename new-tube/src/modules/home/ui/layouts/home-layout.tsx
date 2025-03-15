import { Sidebar, SidebarProvider } from '@/components/ui/sidebar';
import React, { ReactNode } from 'react';

import { HomeNavBar } from '../components/home-navbar';
interface LayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      
        <div className='w-full'>
            <HomeNavBar/>
            <div>
            {children}
            </div>
        </div>
      
      
    </SidebarProvider>
  );
};

export default HomeLayout;