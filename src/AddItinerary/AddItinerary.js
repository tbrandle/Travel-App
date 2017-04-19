import React, { Component } from 'react';
import './AddItinerary.css'
import GoogleInitialMap from '../GoogleMap/GoogleInitialMap';
import Geosuggest from 'react-geosuggest';
import { database, storage } from '../database';

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
      likes: 0,
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

  addDestinationFields(){
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

  uploadFile(e){
    const file = e.target.files[0]
    const storageRef = storage.ref('itinerary_photos/'+ this.state.id.toString())
    storageRef.put(file)
  }

  saveItinerary(){
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
    this.props.history.push('/view_itineraries')
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

           <input type="file" className="filebtn" onChange={(e)=> this.uploadFile(e)}/>

           <Geosuggest onSuggestSelect={suggest=> console.log(suggest)}/>
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
               <input className="add-btn"
                      type="image"
                      src={require('../../images/plus.svg')}
                      onClick={ () => this.addDestinationFields() }
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
