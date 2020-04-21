import React from 'react';
import './collection-preview.scss'
import  CollectionItem from '../collection-item/collection-item.component';


class CollectionPreview extends React.Component{
    render(){
        return(
            <div className="collection-preview">
            <h1>{this.props.title.toUpperCase()}</h1>
            <div className="preview">
                {this.props.items.map(({id,...otherProps})=>
                (<CollectionItem key={id} {...otherProps} id={id} routeName={this.props.routeName}/>))}
            </div>
            </div>
        );}

    }




export default CollectionPreview;