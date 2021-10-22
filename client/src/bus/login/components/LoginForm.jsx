import React from 'react';
import { Link } from 'react-router-dom';
import {
  Formik, 
  Form,
} from 'formik';
import {
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import { validationSchema } from '../validation/login';
import {
  GoHomeBar,
  TextField,
  Button,
} from '../../../global/components';
import { Book } from '../../../common/enums/book';

const initialValues = {
  email: '',
  password: '',
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

export const LoginForm = ({
  onSignInWithGoogle,
  onSignInWithFacebook,
  onSubmit,
  onSignup,
}) => {
  const classes = useStyles();

  const formJSX = (
    <div className={classes.root}>
      <Typography>Вхід</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({submitForm, isSubmitting, touched, errors}) => (
          <MuiPickersUtilsProvider utils={MomentUtils}>
              <Form className={classes.form}>
                <TextField
                  name="email"
                  label="Email"
                />
                <TextField
                  type="password"
                  name="password"
                  label="Пароль"
                />
                <Link to={Book.RESET_PASSWORD}>
                  <Button 
                    color="primary"
                    text="Забули пароль?"
                  />
                </Link>
                <Button
                  color="primary"
                  onClick={submitForm}
                  text="Готово"
                  variant="contained"
                />
                <Button
                  color="default"
                  onClick={onSignup}
                  text="Зареєструватись"
                  variant="contained"
                />
                <Button
                  color="primary"
                  onClick={onSignInWithGoogle}
                  text="Увійти через Google"
                  variant="contained"
                />
                <Button
                  color="primary"
                  onClick={onSignInWithFacebook}
                  text="Увійти через Facebook"
                  variant="contained"
                />   
              </Form>
          </MuiPickersUtilsProvider>
        )}
      </Formik>
    </div>
  );

  const page = <>
    <GoHomeBar/>
    {formJSX}
  </>;

  return page;
}
