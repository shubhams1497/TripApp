import React, { Component } from 'react';
import './TripCard.css';
import {withRouter} from 'react-router-dom'

class TripCard extends Component{
    render(){
        const d = new Date(Date.parse(this.props.trip.Time));
        return(
            <div className="trip-card-container" onClick={() =>  this.props.history.push(`trips/${this.props.trip._id}`) } >
                
                <img src={this.props.trip.imageUrl} alt={this.props.trip.title}/>
                <div className="card-heading-1">
                    <h3>
                        {this.props.trip.title}
                    </h3>
                    <h3>
                    &#8377;{this.props.trip.Price}
                    </h3>
                </div>
                <div className="card-heading-1">
                    <h3>
                    {d.toLocaleDateString()}
                    </h3>
                </div>
            </div>
        );
    };

}


export default withRouter(TripCard);
