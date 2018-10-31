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

  const mapStateToProps = state => {
    return {
      user: state.user,
      loggedIn: state.loggedIn
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      userActions: bindActionCreators(actions, dispatch)
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ComponentDecorated);
};

export default decorator;
