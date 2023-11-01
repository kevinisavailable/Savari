import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import Profile from '../Components/Profile/Profile';
const { Header, Content, Sider } = Layout;




const MainLayout = ({children , menuItems}) => {
    const [selectedKey , setSelectedKey] = useState('1')
    const {token: { colorBgContainer }} = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div>
           <h2 style={{color:"wheat" , textAlign:"center"}}>Savari</h2>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={menuItems} selectedKeys={[selectedKey]} onSelect={(info)=>{setSelectedKey(info.key)}}/>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
          }}
        >
            <div style={{display:"flex" , justifyContent:"flex-end" , marginRight :"2rem"}}>
                <Profile />
            </div>
            </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
            flex : '1',
          }}
        >
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
