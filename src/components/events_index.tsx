import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
import _ from 'lodash';

// 23. connectでstateとactionsとの関連付けを行う

class EventsIndex extends Component<any> {
  // ロード時に呼ばれる
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    const events = this.props.events;
    // lodashのmapメソッドは非同期処理も配慮してくれる
    return _.map(events, (event: any) => {
      return (
        <tr key={event.id}>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>{this.renderEvents()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state: any) => ({ events: state.events });

// 上記をシンプルに記述可能
const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
