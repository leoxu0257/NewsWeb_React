import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import logo from './logo.png';
import './style.css'


export default class AppHeader extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[]
        }
    }
    
    getMenuItems(){
        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id}>  
                    <Link to={`/${item.id}`}>
                        {/* <icon type={item.icon}/> */}
                        {item.title}
                    </Link>         
                </Menu.Item>
            )
        }) 
    }

    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/header.json') // AJAX request
        .then((res)=>{
            this.setState({
                list: res.data.data
            })
            console.log(res.data.data);
        })
    }

    render() {
        return (
           <Fragment>
                <img src={logo} className='app-header-logo'/>
                <Menu mode="horizontal"
                      className='app-header-menu'
                >
                    {this.getMenuItems()}
                    
                </Menu>
            </Fragment>
        )
    }
}
