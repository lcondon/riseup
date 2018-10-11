import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { dropUser } from '../actions/dropUser';
import { addUser } from '../actions/addUser';

const decorator = ComponentToDecorate => {
  class ComponentDecorated extends React.Component {
    render() {
      const { user, loggedIn, addUser, dropUser, ...rest } = this.props;
      return (
        <ComponentToDecorate
          user={user}
          loggedIn={loggedIn}
          addUser={addUser}
          dropUser={dropUser}
          {...rest}
        />
      );
    }
  }

  return connect(
    state => ({
      user: state.user.info,
      loggedIn: state.user.loggedIn
    }),
    dispatch => ({
      addUser: user => dispatch(addUser(user)),
      dropUser: user => dispatch(dropUser(user))
    })
  )(ComponentDecorated);
};

export default decorator;
