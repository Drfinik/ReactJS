import React from 'react';
import style from './message.module.css';
export const Message = ({message_body}) => {
    return (       
<span className={style.message_text}>
    {message_body}
    </span>
       
    )
}