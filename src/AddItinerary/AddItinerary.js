import React, { Component } from 'react';
import './AddItinerary.css'
import { Link }             from 'react-router-dom';
import MapWrapperContainer from '../InitialMap/MapWrapperContainer'


export default class AddItinerary extends Component{
  constructor(){
    super()
    this.state={
      id:'',
      title:'',
      description:'',
      destinations: [],
      markers:[],

      place:'',
      placeDescription:''
    }
  }

  addDestination(){
    const { destinations, place, placeDescription } = this.state
    const id = destinations.push({ place, placeDescription })
    this.setState({ destinations })
    this.setState({ place:"", placeDescription:""})
  }

  deleteDestination(obj){
    const { destinations } = this.state
    const newDestinations = destinations.filter(destination => destination !== obj)
    this.setState({ destinations: newDestinations })

  }

  renderDestinations(){
    return this.state.destinations.map((obj, i) => {
      return (
        <div key={i}>
          <p>{obj.place}</p>
          <p>{obj.placeDescription}</p>
          <button onClick={() => this.deleteDestination(obj)}>Delete</button>
        </div>
      )
    })
  }

  render(){
    return (
      <div>
        <input type="text" placeholder="title" />
        <textarea type="text" placeholder="description" />
          <div>
            <MapWrapperContainer />
            <input type="text"
                   placeholder="title"
                   value={this.state.place}
                   onChange={(e) => this.setState({  place: e.target.value }) }
                 />
            <input type="text"
                   placeholder="description"
                   value={this.state.placeDescription}
                   onChange={(e) => this.setState({ placeDescription: e.target.value }) }
                 />
               <button onClick={() => this.addDestination()}>add destination</button>
               {this.renderDestinations()}
            <button>save itinerary</button>
          </div>
      </div>
    )
  }
}

 // onClick of save button, display the new destination
 // onchange of the search box, display new destination component?
