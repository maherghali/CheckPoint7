import React from 'react';

class  ImprovedButton extends React.Component{

    componentDidMount(){
         setTimeout(function(){ alert("Hello"); }, 2000); 
        //alert("Hello")
    }

    componentWillMount(){
        alert("Goodbye")
    }

    render (){
        return <button onClick={this.props.onClick}>
        {this.props.children}
        </button>
    }
}

export default ImprovedButton;