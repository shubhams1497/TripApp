import React, { Component } from 'react';
import './Home.css';
import fetchTrips from './FetchData';
import TripCard from './TripCard';

class Home extends Component{

 

    constructor(props){
        super(props);
        this.state={
            loading: true,
            trips: [],
        };
    }

    componentDidMount(){
        fetchTrips()
        .then( (response) => (response.json()) )
        .then( (data) => {this.setState({loading:false, trips: data})} );
    }

    renderTrips(){
        const trips = this.state.trips;
        
        return trips.map( (trip,index) =>
            <TripCard key={index} trip={trip}/>
        );
    }

    render(){
        return (
            <div className="container">
                  { (this.state.loading) 
                  ? (<div>Loading...</div>)
                  : this.renderTrips()
                  }
            </div>
        );
    }
}


export default Home;