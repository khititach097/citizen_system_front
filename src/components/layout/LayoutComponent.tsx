import React from "react";
import { Layout as AndLayout } from "antd";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LoadingScreen from "../loading/Loading";

const { Content } = AndLayout;

export interface Props {
  children?: React.ReactNode;
  showFooter?: boolean;
}

const LayoutComponent: React.FC<Props> = ({ showFooter = false, children }) => {
  return (
    <AndLayout className="min-h-screen">
      <HeaderComponent />
      <Content className="bg-white">
        <LoadingScreen />
        {children}
      </Content>
      {showFooter && <FooterComponent />}
    </AndLayout>
  );
};

export default LayoutComponent;
