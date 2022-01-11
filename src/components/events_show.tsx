import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteEvent } from '../actions';

// class EventsShow extends Component<any> {
//   constructor(props: any) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.onDeleteClick = this.onDeleteClick.bind(this);
//   }

//   renderField(field: any) {
//     const {
//       input,
//       label,
//       type,
//       meta: { touched, error },
//     } = field;
//     return (
//       <div>
//         <input {...input} placeholder={label} type={type} />
//         {touched && error && <span>{error}</span>}
//       </div>
//     );
//   }

//   async onSubmit(values: any) {
//     await this.props.postEvent(values);
//     window.location.href = '/';
//   }

//   async onDeleteClick() {
//     console.log(useParams);
//     // await this.props.deleteEvent(id);
//     // window.location.href = '/';
//   }

//   render() {
//     const { handleSubmit, pristine, submitting } = this.props;
//     return (
//       <form onSubmit={handleSubmit(this.onSubmit)}>
//         <div>
//           <Field
//             label='Title'
//             name='title'
//             type='text'
//             component={this.renderField}
//           />
//           <Field
//             label='Body'
//             name='body'
//             type='text'
//             component={this.renderField}
//           />
//         </div>
//         <div>
//           <input
//             type='submit'
//             value='Submit'
//             disabled={pristine || submitting}
//           />
//           <Link to='/'>Cancel</Link>
//           <Link to='/' onClick={this.onDeleteClick}>
//             Delete
//           </Link>
//         </div>
//       </form>
//     );
//   }
// }

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

  const onSubmit = async (values: any) => {
    await props.postEvent(values);
    navigate('/');
  };

  const onDeleteClick = async () => {
    await props.deleteEvent(id);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <Field label='Title' name='title' type='text' component={renderField} />
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
  );
}

// 上記をシンプルに記述可能
const mapDispatchToProps = { deleteEvent };

const validate = (values: any) => {
  const errors: { title?: string; body?: string } = {};

  if (!values.title) errors.title = 'Enter a title, please.';
  if (!values.body) errors.body = 'Enter a body, please.';

  return errors;
};

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: 'eventShowForm' })(EventsShow as any));
