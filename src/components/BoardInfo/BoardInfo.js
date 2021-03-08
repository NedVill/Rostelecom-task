import React from 'react';
import PropTypes from 'prop-types';
import './BoardInfo.scss';

const BoardInfo = ({ users, active, onClose }) => {
  const usersKeys = Object.keys(users);

  const renderUser = () => {
    return usersKeys.map((item, idx) => {
      const user = users[item];

      return (
        <div key={idx} className="board-user flex align_center">
          <div className="board-user__picture">
            <img className="board-user__image" src={user.avatar} alt={user.name} />
          </div>
          <div className="board-user__bar">
            <div className="flex align_botom">
              <b className="board-user__name">
                {`${user.name} ${user.secname}`}
              </b>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={`board-info ${active ? 'board-info--active' : ''}`}>
      <div className="board-info__header">
        <b>Chat room</b>
        <div>{usersKeys.length} {usersKeys.length > 1 ? 'members' : 'member'}</div>
        <button
          onClick={() => onClose()}
          className="button-close board-info__close"
        />
      </div>
      <div className="board-users">
        {renderUser()}
      </div>
    </div>
  );
}

BoardInfo.propTypes = {
  isActive: PropTypes.bool,
  users: PropTypes.object,
  onClose: PropTypes.func,
};

export default BoardInfo;
