import React from 'react';
import {connect} from 'react-redux'
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory//directory.selectors'
import './directory.styles.scss';

const Directory = ({sections}) => {
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
}

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);
