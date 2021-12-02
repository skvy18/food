import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import CostFilter from '../filters/costfilter';
import CuisineFilter from '../filters/cuisinefilter';
import SortFilter from '../filters/sortFilter';

const mealurl ="https://back-zom.herokuapp.com/mealtype"
const url = "https://back-zom.herokuapp.com/restaurents?mealtype="

class ListingApi extends Component{
    constructor(props){
        super()

        this.state={
            hotelist:'',
            mealname:''
        }
    }
    setDataAsPerFilter(sortedData) {
        this.setState({hotelist:sortedData})
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <CostFilter costdata={(data) => {this.setDataAsPerFilter(data)}}/>
                        <CuisineFilter cuisinedata={(data) => {this.setDataAsPerFilter(data)}}/>
                        <SortFilter sortdata={(data) => {this.setDataAsPerFilter(data)}} />
                    </div>
                    <div className="col-md-10">
                        <center>
                            <h3>Here Are Option of {this.state.mealname}</h3>
                        </center>
                        <ListingDisplay listdata={this.state.hotelist}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
       var mealid = this.props.match.params.id
       sessionStorage.setItem('mealid',mealid)
       axios.get(`${mealurl}`)
       .then((response) =>{
           for(var i =0 ; i< response.data.length;i++){
               if(response.data[i]._id === Number(mealid)){
                   this.setState({mealname:(response.data[i].name)})
                   i = response.data.length;
               }
           }
       } )
       axios.get(`${url}${mealid}`)
       .then((response) =>  {this.setState({hotelist:response.data})})
    }
}

export default ListingApi;