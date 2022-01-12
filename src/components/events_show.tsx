import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteEvent, readEvent } from '../actions';

function EventsShow(props: any) {
  const { id } = useParams();
  const navigate = useNavigate();

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
    await props.postEvent(values);
    navigate('/');
  };

  const onDeleteClick = async () => {
    await props.deleteEvent(id);
  };

  return (
    <div>
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
        <div>
          <input
            type='submit'
            value='Submit'
            disabled={props.pristine || props.submitting}
          />
          <Link to='/'>Cancel</Link>
          <Link to='/' onClick={onDeleteClick}>
            Delete
          </Link>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any, ownProps?: any) => {
  const data = state.events.data;
  return { initialValues: data };
};

const mapDispatchToProps = { deleteEvent, readEvent };

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
