import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '1px 1px 5px 2px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const submitEmail = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: process.env.REACT_APP_MAIL_SERVER,
      data: { name, email, subject, message },
    })
      .then((response) => {
        if (response.data.status === 'success') {
          alert('Message Sent.');
          resetForm();
        } else if (response.data.status === 'fail') {
          alert('Message failed to send.');
        }
      })
      .catch((e) => console.log(e));
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Contact
          </Typography>
          <form className={classes.form} onSubmit={submitEmail} method="POST">
            {/* TODO: validation */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              type="text"
              id="name"
              autoFocus
              value={name}
              onChange={onNameChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={onEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="subject"
              label="Subject"
              type="text"
              id="subject"
              value={subject}
              onChange={onSubjectChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              multiline
              rows={6}
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              value={message}
              onChange={onMessageChange}
            />

            <FormControlLabel
              control={<Checkbox value="captcha" color="primary" />}
              label="I'm not a robot"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
