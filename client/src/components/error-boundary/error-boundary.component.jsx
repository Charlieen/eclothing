import React from 'react';
import {ErrorImageContainer, ErrorImageOverlay,ErrorImageText } from './error-boundary.styles';
/**
 * Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Updating state from these lifecycles lets you capture an unhandled JavaScript error in the below tree and display a fallback UI.

Only use error boundaries for recovering from unexpected exceptions; don’t try to use them for control flow.
 */
class ErrorBoundary extends React.Component {

    constructor(){
        super();

        this.state={
            hasErrored:false
        }
    }

    static getDerivedStateFromError(error){

        return { hasErrored:true};
    }

    componentDidCatch(error,info){
        console.log('clothing catch...',error);
    }

    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
                    <ErrorImageText>Sorry this page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }

}

export default ErrorBoundary; 