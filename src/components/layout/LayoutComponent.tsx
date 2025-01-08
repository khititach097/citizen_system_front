import React from 'react';
import { Layout as AndLayout } from 'antd';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const { Content } = AndLayout;

export interface Props {
  children?: React.ReactNode;
}

const LayoutComponent: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-wrap gap-4">
      <AndLayout className="overflow-hidden">
        <HeaderComponent />
        <Content className="text-center leading-[120px]">
          {props?.children}
        </Content>
        <FooterComponent />
      </AndLayout>
    </div>
  );
};

export default LayoutComponent;
