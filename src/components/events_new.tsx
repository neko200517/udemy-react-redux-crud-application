import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { PostEvent } from '../actions';
import { Link } from 'react-router-dom';

class EventsNew extends Component<any> {
  render() {
    return (
      <React.Fragment>
        new!
        <Link to='/'>Return</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({ events: state.events });

// 上記をシンプルに記述可能
// const mapDispatchToProps = { postEvent };

export default connect(null, null)(EventsNew);
