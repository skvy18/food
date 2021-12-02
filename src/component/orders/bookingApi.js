import React,{Component} from 'react';
import axios from 'axios';
import ViewBooking from './bookingDisplay';

const burl = "https://back-zom.herokuapp.com/orders";


class Booking extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <div className="container">
                <ViewBooking orderdata={this.state.orders}/>
            </div>
        )
    }


    async componentDidMount(){
        let response =  await axios.get(`${burl}`)
        this.setState({orders:response.data})
    }

}

export default Booking;