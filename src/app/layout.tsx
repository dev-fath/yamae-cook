import React, { PropsWithChildren } from 'react';
import SideNavBar from 'component/common/layout/SideNavBar';
import LayoutHeader from 'component/common/layout/LayoutHeader';
import LayoutBody from 'component/common/layout/LayoutBody';
import LayoutFooter from 'component/common/layout/LayoutFooter';
// import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';

const AppLayout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <html>
      <body>
        <div className={'min-h-screen bg-white w-full'}>
          <SideNavBar />
          <div>
            <LayoutHeader />
            <LayoutBody>{children}</LayoutBody>
            <LayoutFooter />
          </div>
        </div>
      </body>
    </html>
  );
};

export default AppLayout;
