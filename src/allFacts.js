import React from 'react';

class allFacts extends React.Component{
    componentDidMount() {
        console.log('component did mount')
        fetch ("/facts").then(function(res){
            console.log('fetching...')
            return res.json()})
        .then(function(result) {
            console.log(result);
        })
    }
    render() {
        return(<div>All facts</div>

        )
    }
}

export default allFacts;