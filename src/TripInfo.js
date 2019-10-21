import React, { Component } from 'react';
import {fetchTripInfo} from './FetchData';


export default class TripInfo extends Component{

    constructor(props){
        super(props);
        this.state={
            tripdata: null,
            loading: true
        };
    }

    componentDidMount(){
        fetchTripInfo(this.props.id)
        .then((response) => response.json())
        .then((data) => this.setState({loading: false, tripdata: data}) ); 
        // console.log(this.props.id);

    }

    render(){
        return(
            <div>
                {
                    (this.state.loading)
                    ?(<div>loading....</div>):
                    (<div>
                        {this.state.tripdata.description}
                    </div>)
                }
            </div>
        );
    }
}