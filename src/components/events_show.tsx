import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteEvent, readEvent, putEvent } from '../actions';

function EventsShow(props: any) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { invalid } = props;

  const renderField = (field: any) => {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  };

  useEffect(() => {
    props.readEvent(id);
  }, []);

  const onSubmit = async (values: any) => {
    values.preventDefault();
    await props.putEvent(id, values);
    navigate('/');
  };

  const onDeleteClick = async () => {
    await props.deleteEvent(id);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <Field label='Title' name='title' type='text' component={renderField} />
        <Field label='Body' name='body' type='text' component={renderField} />
      </div>
      <div>
        <input type='submit' value='Submit' disabled={invalid} />
        <Link to='/'>Cancel</Link>
        <Link to='/' onClick={onDeleteClick}>
          Delete
        </Link>
      </div>
    </form>
  );
}

const mapStateToProps = (state: any) => {
  const data = state.events.data;
  return { initialValues: data };
};

const mapDispatchToProps = { deleteEvent, readEvent, putEvent };

const validate = (values: any) => {
  const errors: { title?: string; body?: string } = {};

  if (!values.title) errors.title = 'Enter a title, please.';
  if (!values.body) errors.body = 'Enter a body, please.';

  return errors;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(
    EventsShow as any
  )
);
