import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, useNavigate } from 'react-router-dom';
import { postEvent } from '../actions';
import { TextField, Button } from '@material-ui/core';

function EventsNew(props: any) {
  const navigate = useNavigate();
  const { pristine, submitting, invalid } = props;

  const onSubmit = async (values: any) => {
    values.preventDefault();
    await props.postEvent(values);
    navigate('/');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <Field
            label='Title'
            name='title'
            type='text'
            component={renderField}
          />
          <Field label='Body' name='body' type='text' component={renderField} />
        </div>

        <Button
          variant='contained'
          style={{ margin: 12 }}
          type='submit'
          disabled={pristine || submitting || invalid}
        >
          Submit
        </Button>

        <Button
          variant='contained'
          style={{ margin: 12 }}
          component={Link}
          to='/'
        >
          Cancel
        </Button>
      </form>
    </>
  );
}

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

// 上記をシンプルに記述可能
const mapDispatchToProps = { postEvent };

const validate = (values: any) => {
  const errors: { title?: string; body?: string } = {};

  if (!values.title) errors.title = 'Enter a title, please.';
  if (!values.body) errors.body = 'Enter a body, please.';

  return errors;
};

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew as any));
