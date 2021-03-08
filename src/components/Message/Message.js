import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { timeFormat } from '../../utils/utils';
import './Message.scss';

const Message = ({ message, onLoad }) => {
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

  const renderTypeMessage = () => {
    const timeBlock = <span className="message-bar__time">{`${hour}:${minute}`}</span>;
    const textBlock = <div>{text}</div>;
  
    const imageBlock = (
      <div className="message-image" style={styledBgColor}>
        <img className="message-image__item" src={avatar} alt={name} />
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
          <div className="message-bar">
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
          <div className="message-bar">
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
          {imageBlock}
          <div className="message-bar message-bar--last">
            <div className="flex align_botom">
              {timeBlock}
            </div>
            {textBlock}
          </div>
        </>
      );
    }

    return(
      <>
        {imageBlock}
        <div className='message-bar message-bar--last'>
          <div className="flex align_botom">
            {nameBlock}
            {timeBlock}
          </div>
          {textBlock}
        </div>
      </>
    );
  }

  useEffect(() => {
    return onLoad();
  });

  return (
    <div className="message">
      <div className="flex align_end">
        {renderTypeMessage()}
      </div>
    </div>
  );
}

Message.propTypes = {
  onLoad: PropTypes.func,
  message: PropTypes.object,
};

export default Message;
