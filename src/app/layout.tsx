import React, { PropsWithChildren, ReactNode } from 'react';
// import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import SideNavBar from "@/component/common/layout/SideNavBar";
import LayoutHeader from '@/component/common/layout/LayoutHeader';
import LayoutBody from "@/component/common/layout/LayoutBody";
import LayoutFooter from "@/component/common/layout/LayoutFooter";

const AppLayout = (props: PropsWithChildren) => {
  const {children} = props;
  return (
    <div className={'min-h-screen bg-white w-full'}>
      <SideNavBar />
      <div>
        <LayoutHeader />
        <LayoutBody>
          {children}
        </LayoutBody>
        <LayoutFooter />
      </div>
    </div>
  );
};

export default AppLayout;
