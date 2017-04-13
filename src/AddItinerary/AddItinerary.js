import React, { Component } from 'react';
import './AddItinerary.css'
import { Link }             from 'react-router-dom';
import MapWrapperContainer from '../GoogleMap/MapWrapperContainer'


export default class AddItinerary extends Component{
  constructor(){
    super()
    this.state={
      id: Date.now(),
      title:'',
      description:'',
      destinations: [],
      markers:[{
        position: {
          lat: 39.753222,
          lng: -104.987797
        }
      }],

      place:'',
      placeDescription:''
    }
  }

  addDestination(){
    const { destinations, place, placeDescription } = this.state
    this.setState({ destinations: [...destinations, { place, placeDescription }] })
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

  saveItinerary(){
    this.props.addItinerary(this.state)
    // this.setState({
    //     id: Date.now(),
    //     title:'',
    //     description:'',
    //     destinations: [],
    //     markers:[{
    //       position: {
    //         lat: 39.753222,
    //         lng: -104.987797
    //       }
    //     }]
      // })
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
            <button onClick={()=> this.saveItinerary()}>save itinerary</button>
          </div>
      </div>
    )
  }
}
