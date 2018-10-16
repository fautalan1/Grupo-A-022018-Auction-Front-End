import React, { Component } from 'react';
import AuctionService from '../services/AuctionService.js'
import AuctionsList from '../components/AuctionsList.js'

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.auctionService = new AuctionService()
    this.state = {
      auctions: [] 
    }
  }

  componentDidMount = () => this.setAuctions()

  setAuctions = async() => {
    this.auctionService.getAuctions()
    .then(response => {
      const auctions = response.data;
      this.setState({ auctions });
    })
  }

  render() {

    return (
      <div className="ui-cards">
        <AuctionsList auctions={this.state.auctions}/>   
      </div>
    )
  }

}