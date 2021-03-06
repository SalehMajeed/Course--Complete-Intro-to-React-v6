import { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };

    static getDerivedStateFromError(err) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error(error, info)
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000)
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        } else if (this.state.hasError) {
            return (
                <h1>
                    This Link has an error. <Link to='/'>Click here</Link> to go back to the home page
                </h1>
            )
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary