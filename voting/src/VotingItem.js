import React, { Component } from "react";

class VoteItem extends Component {

    state = {counterNumber : this.props.counter}


    startCounting = () =>{
        this.setState((prevState) => ({
            counterNumber: prevState.counterNumber + 1
          }));
    }

  render() {
    return (
      <div className="languages">
        <div className="voteCount">
        {this.state.counterNumber} 
        </div>
        <div className="language">
        {this.props.name}
        </div>
        <button type="button" class="btn btn-primary btn-sm" onClick={this.startCounting}>
          Vote
        </button>
      
      </div>
    );
  }
}

export default VoteItem;
