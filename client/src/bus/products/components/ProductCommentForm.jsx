import React from 'react';
import {
  Formik, 
  Form,
} from 'formik';
import {
  Rating,
} from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { validationSchema } from '../validation/review';
import {
  TextField,
  Button,
} from '../../../global/components';

const initialValues = {
  text: '',
};

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  form: {
    width: '300px',
  },
  formElement: {
    width: '100%',
  }
}));

export const ProductCommentForm = ({
  onSubmit,
}) => {
  const classes = useStyles();

  const formJSX = (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting, touched, errors, values, dirty, setFieldValue }) => (
          <MuiPickersUtilsProvider utils={MomentUtils}>
              <Form className={classes.form}>
                <TextField
                  name="text"
                  label="Write a comment"
                  multiline
                />
                <Button
                  color="primary"
                  onClick={submitForm}
                  text="Submit"
                  variant="contained"
                  disabled={values.text.length === 0}
                />
              </Form>
          </MuiPickersUtilsProvider>
        )}
      </Formik>
  );

  return formJSX;
}
