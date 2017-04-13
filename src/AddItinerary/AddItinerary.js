import React, { Component } from 'react';
import './AddItinerary.css'
import { Link }             from 'react-router-dom';
import GoogleInitialMap from '../GoogleMap/GoogleInitialMap'



export default class AddItinerary extends Component{
  constructor(){
    super()
    this.state={
      id: Date.now(),
      title:'',
      description:'',
      destinations: [],
      markers:[],
      place:'',
      placeDescription:''
    }
  }

  addMarker(marker){
    const newMarker = {
        position: {
          lat: marker.latLng.lat(),
          lng: marker.latLng.lng()
        }
      }
    this.setState({ markers: [...this.state.markers, newMarker] })
  }

  addDestination(){
    const { destinations, place, placeDescription, markers } = this.state
    this.setState({ destinations: [...destinations, { place, placeDescription, markers }] })
    this.setState({ place:"", placeDescription:"", markers: [] })
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

  saveItinerary(){
    this.props.addItinerary(this.state)
    this.setState({
      id: Date.now(),
      title:'',
      description:'',
      destinations: [],
      markers:[],
      place:'',
      placeDescription:''
    })
  }

  render(){
    return (
      <div>
        <input type="text"
               placeholder="title"
               value={this.state.title}
               onChange={(e) => this.setState({  title: e.target.value }) }
             />
        <input type="text"
               placeholder="description"
               value={this.state.description}
               onChange={(e) => this.setState({  description: e.target.value }) }
             />
          <div>
          <div className='map-container' style={{height: "400px", width:"400px", margin: "auto"}}>
            <GoogleInitialMap containerElement={ <div style={{ height: "100%"}}/> }
              mapElement={ <div style={{ height: "100%"}}/> }
              markers={this.state.markers}
              destinations={this.state.destinations}
              addMarker={(marker) => this.addMarker(marker) }
              />
          </div>
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
          <button onClick={()=> this.saveItinerary()}>save itinerary</button>
        </div>
      </div>
    )
  }
}
