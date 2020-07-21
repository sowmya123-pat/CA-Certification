import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Project from './project';





class Mainpage extends Component {
    render() {
        return (
            <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
            <Link to="/mainpage">Profile</Link>
            <Link to="/project">Project</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/mainpage">Profile</Link>
            <Link to="/project">Project</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Project/>
        </Content>
    </Layout>
</div>
        );
    }
}

export default Mainpage;