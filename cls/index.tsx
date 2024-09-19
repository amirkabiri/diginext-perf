import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Layout, Menu, List, Avatar, Spin } from 'antd'
const { Content, Header } = Layout

const AppHeader = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Products</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
  )
}

const ProductContent = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, title: 'Product 1', description: 'Description 1' },
        { id: 2, title: 'Product 2', description: 'Description 2' },
        { id: 3, title: 'Product 3', description: 'Description 3' },
        // Add more products as needed
      ])
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />
      </Content>
    )
  }

  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={products}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-more">more</a>,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href={`#${item.id}`}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Content>
  )
}

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Product Listing App ©2023 Created by Your Name
    </Footer>
  )
}

const App = () => {
  return (
    <Layout className="layout">
      <AppHeader />
      <ProductContent />
      <AppFooter />
    </Layout>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
