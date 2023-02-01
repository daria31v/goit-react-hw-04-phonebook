
import PropTypes from 'prop-types';
import {
  AddContactBtn,
  Label,
  FormAddContacts,
  ErrorText,
} from './ContactForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

//  import * as yup from 'yup';
//  import "yup-phone";

// const schema = yup.object().shape({
// name: yup.string().required(),
// number: yup.string().phone().required(),
// });


const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = ( {onSubmit} ) => {
  // const submitForm = (values, { resetForm }) => {
  //    onSubmit(values.name, values.number);
  //    resetForm();
  //  };
  // const submitForm = (values, { resetForm }) => {
  //   const { name, number } = values;
  //   const data = {name, number}
  //   resetForm();
  //   return addContact(data);
  // };

   const submitForm = (values, { resetForm }) => {
    this.props.onSubmit(values.name, values.number);
    this.setState( values.name, values.number );

    resetForm();
  };

  const nameInputId = nanoid();
  const telInputId = nanoid();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={submitForm}
      // validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormAddContacts>
          <Label htmlFor={nameInputId}>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Jacob Mercer"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={nameInputId}
            />
            <FormError name="name" component="span" />
          </Label>

          <Label htmlFor={telInputId}>
            Number
            <Field
              type="tel"
              name="number"
              placeholder="+380000000000"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={telInputId}
            />
            <FormError name="number" component="span" />
          </Label>
        </FormAddContacts>

        <AddContactBtn type="submit">Add contacts</AddContactBtn>
      </Form>
    </Formik>
  );
};

// export class ContactForm extends Component {
//   nameInputId = nanoid();
//   telInputId = nanoid();

//   submitForm = (values, { resetForm }) => {
//     this.props.onSubmit(values.name, values.number);
//     this.setState({ initialValues });

//     resetForm();
//   };

// render() {
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={this.submitForm}
//       // validationSchema={schema}
//     >
//       <Form autoComplete="off">
//         <FormAddContacts>
//           <Label htmlFor={this.nameInputId}>
//             Name
//             <Field
//               type="text"
//               name="name"
//               placeholder="Jacob Mercer"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               id={this.nameInputId}
//             />
//             <FormError name="name" component="span" />
//           </Label>

//           <Label htmlFor={this.telInputId}>
//             Number
//             <Field
//               type="tel"
//               name="number"
//               placeholder="+380000000000"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               id={this.telInputId}
//             />
//             <FormError name="number" component="span" />
//           </Label>
//         </FormAddContacts>

//         <AddContactBtn type="submit">Add contacts</AddContactBtn>
//       </Form>
//     </Formik>
//   );
// }
// }

ContactForm.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
}.isRequired;
