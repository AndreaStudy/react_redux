import DisplayNumber from "../components/use_redux/DisplayNumber";
import {connect} from 'react-redux'

function mapReduxStateToReactProps(state){
  return {
    number:state.number
  }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);


/*
import { Component } from "react";
import store from "../store";

export default class DisplayNumberContainer extends Component{
  state = {number:store.getState().number}
  componentDidMount(){
    store.subscribe(function(){
      this.setState({number:store.getState().number});
    }.bind(this))
  }
  render(){
    return <DisplayNumber number={this.state.number}></DisplayNumber>
  }
}
*/