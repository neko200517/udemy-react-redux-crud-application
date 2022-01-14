import { FormEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteEvent, readEvent, putEvent, DispatchType } from '../actions';
import { TextField, Button } from '@material-ui/core';

// イベントの参照、更新、削除
type PropsType = {
  readEvent: (id: number) => (dispatch: DispatchType) => Promise<void>;
  putEvent: (
    id: number,
    values: any
  ) => (dispatch: DispatchType) => Promise<void>;
  deleteEvent: (id: number) => (dispatch: DispatchType) => Promise<void>;
  pristine: boolean;
  submitting: boolean;
  invalid: boolean;
};
function EventsShow(props: PropsType) {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const { pristine, submitting, invalid } = props;

  // コンポーネントのプロパティ
  const attributes: any = {
    fieldTitle: {
      label: 'Title',
      name: 'title',
      type: 'text',
    },
    fieldBody: {
      label: 'Body',
      name: 'body',
      type: 'text',
    },
    button: {
      variant: 'contained',
      style: { margin: 12 },
    },
  };

  // 初回のみ起動
  useEffect(() => {
    props.readEvent(Number(id));
  }, [id, props]);

  // Submit_Submit
  const onSubmit = async (values: FormEvent<HTMLFormElement>) => {
    values.preventDefault();
    await props.putEvent(Number(id), values);
    navigate('/');
  };

  // Delete_Click
  const onDeleteClick = async () => {
    await props.deleteEvent(Number(id));
  };

  // draw
  return (
    <form onSubmit={onSubmit}>
      <div>
        <Field {...attributes.fieldTitle} component={renderField} />
        <Field {...attributes.fieldBody} component={renderField} />
      </div>
      <div>
        <Button
          {...attributes.button}
          type='submit'
          disabled={pristine || submitting || invalid}
        >
          Submit
        </Button>

        <Button
          {...attributes.button}
          onClick={onDeleteClick}
          component={Link}
          to='/'
        >
          Delete
        </Button>

        <Button {...attributes.button} component={Link} to='/'>
          Cancel
        </Button>
      </div>
    </form>
  );
}

// Fieldの定義
const renderField = (field: {
  input: any;
  label: string;
  type: string;
  meta: { touched: boolean; error: string | undefined };
}) => {
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
const mapStateToProps = (state: {
  events: { data: { title: string; body: string } };
}) => {
  const data = state.events.data;
  return { initialValues: data };
};

// ディスパッチする関数
const mapDispatchToProps = { deleteEvent, readEvent, putEvent };

// バリデーション
const validate = (values: { title: string; body: string }) => {
  const errors: { title: string; body: string } = { title: '', body: '' };

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
