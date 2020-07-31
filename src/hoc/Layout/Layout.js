import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';


const layout = (props) => {

    const [sideDrawerIsVisible, setSideDrawerISVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerISVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerISVisible(!sideDrawerIsVisible)
    }


    return (
        <Fragment>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisible}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.token
    };
};

export default connect(mapStateToProps)(layout);