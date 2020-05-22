import React, { Component } from 'react'

export class ErrorBoundary extends Component {;
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }

    componentDidCatch(event, info){
        this.setState({ hasError : true })
    }
    
    render() {
        return (
            this.state.hasError ?
            <h1>Ooop, something went wrong!</h1> :
            this.props.children
        )
    }
}

export default ErrorBoundary;
