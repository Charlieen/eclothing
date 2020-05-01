import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import { createStructuredSelector }from 'reselect';
import { selectedDirectory} from '../../redux/directory/directory.selector';
import {connect} from 'react-redux';



const Directory  = ({sections})=>(
    <div className="directory-menu">
    {   sections.map(({id,...otherSectionProps}) =>
            <MenuItem key={id} {...otherSectionProps}/>)
    }
    </div>
)
   
const mapStateToProps = createStructuredSelector({
    sections:selectedDirectory
})

export default connect(mapStateToProps)(Directory);
