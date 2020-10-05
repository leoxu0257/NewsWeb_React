import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import List from './containers/List/index';
import Detail from './containers/Detail/index';
import './style.css';
import AppHeader from './components/Header/index';
// import { List } from 'antd/lib/form/Form';


const { Header, Footer, Content } = Layout;//解构赋值

class App extends Component{
  render(){
    return(
    <BrowserRouter>
      <Layout style={{minWidth:1260,height:'100%'}}>
        <Header className="header"> <AppHeader/> </Header>
        <Content className="content">
          
            <Switch>
              <Route path='/detail' component={Detail} />
              <Route path='/:id?' component={List} />
              {/* 加？id可以传也可以不传 */}
            </Switch>
          
        </Content>
        <Footer className="footer">@copyright Zichen Xu 2020</Footer>
      </Layout>
    </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter></Counter> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);



