import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import './Message.scss';

// const useStyles = makeStyles((theme) => ({
//     inline: {
//         display: 'inline',
//     },
// }));

const Message = forwardRef(({ message, username }, ref) => {
    // const classes = useStyles();
    const isUser = username === message.username;
    return (
        <div ref={ref} className='message'>
            <div className=''>
                <List
                    className={`message__list ${
                        isUser && 'message__list_user'
                    }`}
                >
                    <ListItem
                        alignItems='flex-start'
                        className={
                            isUser
                                ? 'message__list_card_user'
                                : 'message__list_card_guest'
                        }
                    >
                        <ListItemAvatar>
                            <Avatar
                                alt={
                                    // !isUser &&
                                    `${message.username || 'Unknown'}`
                                }
                                src={
                                    // !isUser &&
                                    `${message.username || 'Unknown'}`
                                }
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                // !isUser &&
                                `${message.username || 'Unknown'}`
                            }
                            secondary={
                                <React.Fragment>
                                    {message.message}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </div>
        </div>
    );
});

Message.propTypes = {
    message: PropTypes.string,
};

export default Message;
