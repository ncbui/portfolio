import React from "react";
import ErrorPage from "../pages/ErrorPage";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: undefined
        };
    }
    // life cycle method, invoked when descendent components throw error
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error(`Error Caught: ${error}`);
        console.error(` ${errorInfo}`);
    }
    render() {
        if (this.state.hasError) {
            return <ErrorPage />;
        } else {
            return this.props.children;
        }
    }
}
