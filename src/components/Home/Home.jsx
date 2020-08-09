import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { Button, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import db from '../../firebase/firebase';
import firebase from 'firebase';
import Message from '../Message/Message';
import './Home.scss';
import Logo from '../../logo.png';

import FlipMove from 'react-flip-move';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Home = () => {
    const classes = useStyles();

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [username, setUsername] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    };

    useEffect(() => {
        setUsername(prompt('Hi Please enter your name'));
    }, []);

    useEffect(() => {
        db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        message: doc.data(),
                    }))
                );
            });
    }, []);

    return (
        <div className='home'>
            <div className='home__logo'>
                <img src={Logo} alt='' />
            </div>
            <h4>Welcome {username}</h4>
            <form className='home__form'>
                <FormControl className='home__form__control'>
                    <TextField
                        label='Type the message'
                        value={input}
                        autoFocus
                        onChange={(e) => setInput(e.target.value)}
                        className='home__form__input'
                    />
                </FormControl>
                <Button
                    type='submit'
                    onClick={onSubmit}
                    color='primary'
                    className={'home__form__btn' + classes.button}
                    disabled={!input}
                >
                    <SendIcon />
                </Button>
            </form>
            <div className='home__message'>
                <FlipMove>
                    {messages.map(({ id, message }) => (
                        <Message
                            key={id}
                            message={message}
                            username={username}
                        />
                    ))}
                </FlipMove>
            </div>
        </div>
    );
};

export default Home;
