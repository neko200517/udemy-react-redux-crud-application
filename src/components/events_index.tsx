import { useEffect } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Fab,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

function EventsIndex(props: any) {
  // 初回のみ起動
  useEffect(() => {
    props.readEvents();
  }, [props]);

  const renderEvents = () => {
    const events = props.events;
    // lodashのmapメソッドは非同期処理も配慮してくれる
    return _.map(events, (event: any) => {
      const link = `/events/${event.id}`;
      return (
        <TableRow key={event.id}>
          <TableCell>{event.id}</TableCell>
          <TableCell>
            <Link to={link}>{event.title}</Link>
          </TableCell>
          <TableCell>{event.body}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <>
      <Fab
        color='primary'
        aria-label='Add'
        component={Link}
        to='events/new'
        style={{
          position: 'fixed',
          bottom: 12,
          right: 12,
        }}
      >
        <AddIcon />
      </Fab>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderEvents()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const mapStateToProps = (state: any) => ({ events: state.events });

// 上記をシンプルに記述可能
const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
