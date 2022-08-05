import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.log('Logging error', error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return <h1>Error encountered</h1>
    }
    return this.props.children
  }
}

const Fallback = () => {
  return (
    <div className={'fallback'}>
      <h2>Something went wrong...!</h2>
      <h6>Please try again after some time.</h6>
    </div>
  )
}

export { ErrorBoundary, Fallback }
