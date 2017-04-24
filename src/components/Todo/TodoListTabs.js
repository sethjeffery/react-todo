import React from 'react';
import PropTypes from 'prop-types'
import { VISIBILITY_FILTER } from '../../actions'
import { Tabs, Tab } from 'material-ui/Tabs';

export const TodoListTabs = ({
  setVisibilityFilter,
  visibilityFilter
}) => {
  const onClickTab = filter => event => setVisibilityFilter(filter)
  const tabs = { [VISIBILITY_FILTER.ALL]: 'All', [VISIBILITY_FILTER.TODO]: 'Todo' }

  return (
    <Tabs value={visibilityFilter}>
      { Object.keys(tabs).map((key, index) => <Tab key={key} onClick={onClickTab(key)} value={key} label={tabs[key]} /> )}
    </Tabs>
  )
}

TodoListTabs.propTypes = {
  setVisibilityFilter: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.string.isRequired
}

export default TodoListTabs
