import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </Friends>
  );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
