import PropTypes from 'prop-types';
import { Friend, FriendAvatar, FriendName, FriendStatus } from './FriendListItem.styled';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <Friend>
      <FriendStatus typeName={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt={name} width='48' />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}


FriendListItem.propTypes = {
  friend: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    },
  ).isRequired,
};
