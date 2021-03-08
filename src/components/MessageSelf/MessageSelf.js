import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { timeFormat } from '../../utils/utils';
import './MessageSelf.scss';

const MessageSelf = ({ message, onLoad }) => {
  const {
    avatar, 
    name,
    secname,
    date,
    text,
    color,
    type,
    idx
  } = message;

  const styledColor = {
    color: `#${color}`,
  };

  const styledBgColor = {
    backgroundColor: `#${color}`,
  };
  
  const hour = timeFormat(date.getHours());
  const minute = timeFormat(date.getMinutes());

  useEffect(() => {
    return onLoad();
  });

  const renderTypeMessage = () => {
    const timeBlock = <span className="message-self__time">{`${hour}:${minute}`}</span>;
    const textBlock = <div>{text}</div>;
  
    const imageBlock = (
      <div className="message-self__image" style={styledBgColor}>
        <img className="message-self__item" src={avatar} alt={name} />
      </div>
    );

    const nameBlock = (
      <span className="message-bar__name" style={styledColor}>
        {`${name} ${secname}`}
      </span>
    );

    if (idx === 0 && type === 'current') {
      return (
        <>
          <div className="message-self__bar">
            <div className="flex align_botom">
              {nameBlock}
              {timeBlock}
            </div>
            {textBlock}
          </div>
        </>
      );
    }

    if (idx > 0 && type === 'current') {
      return (
        <>
          <div className="message-self__bar">
            <div className="flex align_botom">
              {timeBlock}
            </div>
            {textBlock}
          </div>
        </>
      );
    }

    if (idx > 0 && type === 'finish') {
      return (
        <>
          <div className="message-self__bar message-self__bar--last">
            <div className="flex align_botom">
              {timeBlock}
            </div>
            {textBlock}
          </div>
          {imageBlock}
        </>
      );
    }

    return(
      <>
        <div className='message-self__bar message-self__bar--last'>
          <div className="flex align_botom">
            {nameBlock}
            {timeBlock}
          </div>
          {textBlock}
        </div>
        {imageBlock}
      </>
    );
  }

  return (
    <div className="message-self">
      <div className="flex align_end">
        {renderTypeMessage()}
      </div>
    </div>
  );
}

MessageSelf.propTypes = {
  onLoad: PropTypes.func,
  message: PropTypes.object,
};

export default MessageSelf;