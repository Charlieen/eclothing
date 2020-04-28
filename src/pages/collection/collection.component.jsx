import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector}from 'reselect';
import { selectedCollection  }from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

class CollectionPage extends React.Component{


    render(){
        const {match,collection} =this.props;
        const {title,items} =collection;

        return (
                <div className="collection-page">
                <div className="title">{title}</div>
                    <div className="items">
                    {items? items.map(item => <CollectionItem id={item.id} item={item}/>) :(<div></div>)}
                    </div>            
                </div>         
            )
    }


}

/**
 *    高阶函数，
 */
const mapStateToProps = (state,ownProps) =>{ 
    console.log(ownProps);
    
    return {
        collection:selectedCollection(ownProps.match.params.categoryId)(state),
    }
}
   



export default connect(mapStateToProps)(CollectionPage);