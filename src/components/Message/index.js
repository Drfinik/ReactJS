import React from 'react';
import './message.css';
export const Message = ({message_body}) => {
    return (       
<span className="message_text">
    {message_body}
    </span>
       
    )
}