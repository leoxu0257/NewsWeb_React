import React, { Component } from 'react'
import axios from 'axios'
import { List, Typography, Divider } from 'antd'



export default class PageList extends Component {

    componentWillReceiveProps(nextProps){

        const id =nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id='+id)
            .then(res=>{
                this.setState({
                    data:res.data.data
                })
            })
    }
    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <List
                size="large"
                style={{background:'#fff'}}
                bordered
                dataSource={this.state.data}
                renderItem={item => <List.Item>{item.title}</List.Item>}
            />
        )
    }
    componentDidMount(){
        const id =this.props.match.params.id;
        const url = 'http://www.dell-lee.com/react/api/list.json'
        axios.get(url+'?id='+id)
            .then(res=>{
                this.setState({
                    data:res.data.data
                })
            })
    }
}
