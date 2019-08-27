import React from 'react';

class allFacts extends React.Component{
    componentDidMount() {
        fetch ("/facts").then(function(res){return res.json()})
        .then(function(result) {
            console.log(result);
        })
    }
    render() {
        return(<div></div>

        )
    }
}

export default allFacts;