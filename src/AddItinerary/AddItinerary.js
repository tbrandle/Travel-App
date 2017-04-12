import React, { Component } from 'react';
import './AddItinerary.css'
import { Link }             from 'react-router-dom';
import MapWrapperContainer from '../InitialMap/MapWrapperContainer'


export default class AddItinerary extends Component{
  constructor(){
    super()
    this.state={
      itinerary: {
        id: Date.now(),
        title:'',
        description:'',
        destinations: [],
        markers:[{
          position: {
            lat: 39.753222,
            lng: -104.987797
          }
        }]
      },
      place:'',
      placeDescription:''
    }
  }

  addDestination(){
    const { itinerary:{destinations}, place, placeDescription } = this.state
    const newDestinations = destinations.push({ place, placeDescription })
    this.setState({ newDestinations })
    this.setState({ place:"", placeDescription:""})
  }

  saveItinerary(){
    this.props.addItinerary(this.state.itinerary)
  }

  deleteDestination(obj){
    const { destinations } = this.state.itinerary
    const newDestinations = destinations.filter(destination => destination !== obj)
    this.setState({ destinations: newDestinations })
  }

  renderDestinations(){
    return this.state.itinerary.destinations.map((obj, i) => {
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
    const { itinerary:{title, description}, place, placeDescription } = this.state
    return (
      <div>
        <input type="text"
               placeholder="title"
               value={title}
               onChange={(e) => {
                   const {itinerary} = this.state;
                   itinerary.title = e.target.value;
                   this.setState({
                     title
                   });
                 }}
             />
        <input type="text"
               placeholder="description"
               value={description}
               onChange={(e) => {
                   const {itinerary} = this.state;
                   itinerary.description = e.target.value;
                   this.setState({
                     description
                   });
                 }}
             />
          <div>
            <MapWrapperContainer />
            <input type="text"
                   placeholder="title"
                   value={place}
                   onChange={(e) => this.setState({  place: e.target.value }) }
                 />
            <input type="text"
                   placeholder="description"
                   value={placeDescription}
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

 // onClick of save button, display the new destination
 // onchange of the search box, display new destination component?
