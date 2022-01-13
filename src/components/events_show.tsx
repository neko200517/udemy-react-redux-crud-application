import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteEvent, readEvent, putEvent } from '../actions';
import { TextField, Button } from '@material-ui/core';

// イベントの参照、更新、削除
function EventsShow(props: any) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pristine, submitting, invalid } = props;

  // 初回のみ起動
  useEffect(() => {
    props.readEvent(id);
  }, [id, props]);

  // Submit_Submit
  const onSubmit = async (values: any) => {
    values.preventDefault();
    await props.putEvent(id, values);
    navigate('/');
  };

  // Delete_Click
  const onDeleteClick = async () => {
    await props.deleteEvent(id);
  };

  // draw
  return (
    <form onSubmit={onSubmit}>
      <div>
        <Field label='Title' name='title' type='text' component={renderField} />
        <Field label='Body' name='body' type='text' component={renderField} />
      </div>
      <div>
        <Button
          variant='contained'
          type='submit'
          style={{ margin: 12 }}
          disabled={pristine || submitting || invalid}
        >
          Submit
        </Button>

        <Button
          variant='contained'
          style={{ margin: 12 }}
          onClick={onDeleteClick}
          component={Link}
          to='/'
        >
          Delete
        </Button>

        <Button
          variant='contained'
          style={{ margin: 12 }}
          component={Link}
          to='/'
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

// Fieldの定義
const renderField = (field: any) => {
  const {
    input,
    label,
    type,
    meta: { touched, error },
  } = field;

  return (
    <TextField
      type={type}
      label={label}
      error={touched && error && error.length > 0}
      helperText={error ? error : ''}
      fullWidth={true}
      {...input}
    ></TextField>
  );
};

// propsにデータを渡す
const mapStateToProps = (state: any) => {
  const data = state.events.data;
  return { initialValues: data };
};

// ディスパッチする関数
const mapDispatchToProps = { deleteEvent, readEvent, putEvent };

// バリデーション
const validate = (values: any) => {
  const errors: { title?: string; body?: string } = {};

  if (!values.title) errors.title = 'Enter a title, please.';
  if (!values.body) errors.body = 'Enter a body, please.';

  return errors;
};

// reduxにconnect
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(
    EventsShow as any
  )
);
