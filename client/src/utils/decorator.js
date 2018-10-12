import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const decorator = ComponentToDecorate => {
  class ComponentDecorated extends React.Component {
    render() {
      const { user, loggedIn, userActions, ...rest } = this.props;
      return (
        <ComponentToDecorate
          user={user}
          loggedIn={loggedIn}
          actions={userActions}
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
      userActions: bindActionCreators(actions, dispatch)
    })
  )(ComponentDecorated);
};

export default decorator;
