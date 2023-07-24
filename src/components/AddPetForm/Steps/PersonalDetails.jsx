import ArrowLeftBtn from 'components/Buttons/ArrowLeftBtn/ArrowLeftBtn';
import PawPrintBtn from 'components/Buttons/PawPrintBtn/PawPrintBtn';
import { petCategory } from 'constants/petCategory';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { stepTwoValidationSchema } from './addFormValidation';
import css from './steps.module.css';

const PersonalDetails = ({ data, next, prev }) => {
  const handleSubmit = (values, helpers) => {
    next(values);
  };

  const handleBackClick = values => {
    prev(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={stepTwoValidationSchema}
    >
      {({ values }) => (
        <Form className={css.wrapper}>
          {values.category !== petCategory[0] && (
            <div className={css.inptWrapper}>
              <label className={css.lable} htmlFor="title">
                Title of add
              </label>
              <Field
                className={css.input}
                name="title"
                placeholder="Title of add"
              />
              <ErrorMessage
                className={css.error}
                name="title"
                component="div"
              />
            </div>
          )}

          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="name">
              Pet’s name
            </label>
            <Field
              className={css.input}
              name="name"
              placeholder="Type name pet"
            />
            <ErrorMessage className={css.error} name="name" component="div" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="date">
              Date of birth
            </label>
            <Field
              className={css.input}
              name="date"
              type="data"
              placeholder="Type date of birth"
            />
            <ErrorMessage className={css.error} name="data" component="div" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="type">
              Type
            </label>
            <Field
              className={css.input}
              name="type"
              placeholder="Type of pet"
            />
            <ErrorMessage className={css.error} name="type" component="div" />
          </div>
          <div className={css.btnWrapper}>
            <PawPrintBtn title="Next" type="submit" />
            <ArrowLeftBtn
              title="Back"
              type="button"
              handleBackClick={handleBackClick}
            />
          </div>

          {/* <button type="submit">Next</button> */}
          {/* <button type="button" onClick={handleBackClick}>
            Back
          </button> */}
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;
