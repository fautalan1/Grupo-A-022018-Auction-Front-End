import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

export default class Header extends Component {

  constructor(props) { 
    super(props);
    this.state = {
      loggedIn: false,
      sesionName: 'signIn',
      sesion: this.verifySesion()
    }
  }

  verifySesion = () => 'signIn'
  
  render() {

    return (
      
        <Menu inverted attached='top' style={{borderBottom:'solid 1px #2d2e2f'}}>
          
          <Menu.Item  as      ={Link} 
                      to      ='/'
                      name    ='Home'/>
          <Menu.Item  as      ={Link} 
                      to      ='/auctions'
                      name    ='Auctions'/>
          <Menu.Menu  position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search Auctions...' />
            </Menu.Item>
            <Menu.Item
              as={Link}
              name={this.state.sesionName}
              to={this.state.sesion}
            />
          </Menu.Menu>
        </Menu>
    )
  }
}
