import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Comment } from './Comment';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '32px',
    paddingBottom: '32px',
  },
}));

export const ProductCommentList = ({ comments, onDeleteComment }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
            {comments?.map((comment) => (
              <Comment comment={comment} onDelete={onDeleteComment} />
            ))}
    </div>
  );
};
