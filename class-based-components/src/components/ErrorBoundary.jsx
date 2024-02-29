import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false,
      }
    }

    componentDidCatch(error) {
        this.setState({
          hasError: true
      })
  }
    render() {
        if (this.state.hasError) {
          return <p>Something Went wrong!</p>
      }
    return this.props.children;
  }
}
