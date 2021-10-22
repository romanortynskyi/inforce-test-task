import { Typography } from '@material-ui/core';
import React from 'react';
import { Button } from '../../../global/components';

export const Comment = ({ comment, onDelete }) => {

    const handleDelete = () => {
        onDelete(comment.id);
    }

    return (
        <div>
            <Typography>{comment?.text}</Typography>
            <Button
                text="Delete"
                onClick={handleDelete}
            />
        </div>
    );
};

