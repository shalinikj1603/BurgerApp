import React,{Component} from 'react'

import Auxiliary from '../Auxiliary/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state={
        showSideDrawer: true
    }

    sideDrawrClosedHandler =() => {
        this.setState({
            showSideDrawer:false
        })
    }

    sideDrawerToggleHandler = () =>{
        this.setState((prevState) =>{
            return {
                showSideDrawer:!this.state.showSideDrawer
            }
        } );
    }


    render(){
        return( 
            <Auxiliary>
            <div>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawrClosedHandler}></SideDrawer>
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxiliary>
        )
    }
} 
export default Layout
