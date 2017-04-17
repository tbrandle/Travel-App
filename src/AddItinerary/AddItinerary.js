import React, { Component } from 'react';
import './AddItinerary.css'
import GoogleInitialMap from '../GoogleMap/GoogleInitialMap'
import { database } from '../database';



export default class AddItinerary extends Component{
  constructor(){
    super()
    this.state={
      uid: '',
      id: Date.now(),
      title:'',
      description:'',
      destinations: [],
      markers:[],
      place:'',
      placeDescription:'',
      display:'none'
    }
  }

  componentDidMount(){
    this.setState({ uid: this.props.currentUser.uid })
  }

  addMarker(marker){
    const newMarker = {
        position: {
          lat: marker.latLng.lat(),
          lng: marker.latLng.lng()
        }
      }
    this.setState({ markers: [ newMarker] })
  }

  addDestinationField(){
    this.state.markers.length && this.setState({ display: 'flex' })
  }

  addDestination(){
    const { destinations, place, placeDescription, markers } = this.state
    if (this.state.place && this.state.placeDescription) {
      this.setState({ destinations: [...destinations, { place, placeDescription, markers }] })
      this.setState({ place:"", placeDescription:"", markers: [], display: 'none' })
    }
  }

  deleteDestination(obj){
    const { destinations } = this.state
    const newDestinations = destinations.filter(destination => destination !== obj)
    this.setState({ destinations: newDestinations })
  }

  renderDestinations(){
    return this.state.destinations.map((obj, i) => {
      return (
          <div className="single-destination" >
            <p className="place">{obj.place}</p>
            <p>{obj.placeDescription}</p>
            <input type="image"
              src={require('../../images/cancel.svg')}
              className="delete-btn" onClick={() => this.deleteDestination(obj)} />
          </div>
      )
    })
  }

  saveItinerary(){
    console.log("inside save itin");
    this.props.addItinerary(this.state)
    database.ref('itineraries').push().set(this.state)

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
        <input className="input"
               type="text"
               placeholder="title"
               value={this.state.title}
               onChange={(e) => this.setState({  title: e.target.value }) }
               />
         <input className="input description"
             type="text"
             placeholder="description"
             value={this.state.description}
             onChange={(e) => this.setState({  description: e.target.value }) }
             />
           <section className="destination-wrapper">
               <div className='add-map-container'>
                <GoogleInitialMap containerElement={ <div style={{ height: "100%"}}/> }
                                  mapElement={ <div style={{ height: "100%"}} /> }
                                  markers={this.state.markers}
                                  destinations={this.state.destinations}
                                  addMarker={(marker) => this.addMarker(marker) }
                  />
              </div>
              <div className="add-destination-div" style={{display: this.state.display}}>
                <input className="input"
                       type="text"
                       placeholder="title"
                       value={this.state.place}
                       onChange={(e) => this.setState({  place: e.target.value }) }
                     />
                <input className="input"
                       type="text"
                       placeholder="description"
                       value={this.state.placeDescription}
                       onChange={(e) => this.setState({ placeDescription: e.target.value }) }
                     />
                <button className="btn" onClick={() => this.addDestination()}>add destination</button>
             </div>
             <input className="ok-submit"
                    type="image"
                    src={require('../../images/plus.svg')}
                    onClick={ () => this.addDestinationField() }
                   />
           </section>
           <section className="single-destination-wrapper">
             {this.renderDestinations()}
           </section>

         <button className="btn save-btn" onClick={()=> this.saveItinerary()}>save itinerary</button>
      </div>
    )
  }
}
