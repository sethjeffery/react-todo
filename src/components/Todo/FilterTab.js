import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import {Tab} from 'material-ui/Tabs';

export const FilterTab = ({
  setVisibilityFilter,
  filter,
  text
}) => (
  <Tab onClick={() => setVisibilityFilter(filter) } value={filter}>
    {text}
  </Tab>
)

FilterTab.propTypes = {
  onClick: PropTypes.func
}

export default FilterTab
