import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAllUsers } from '../../api/users';
import BackRow from 'Components/BackRow';
import Spinner from 'Components/Spinner';
import UserRow from 'Components/UserRow';

import './index.scss';

const Gift = () => {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState(null);

  async function getUsers() {
    try {
      const response = await getAllUsers();
      const giftUsers = response.data.filter((friend) => {
        return friend.id !== user.id;
      });
      setUsers(giftUsers);
    } catch (error) {
      console.log('Error in Gift/index.jsx - getUsers: ', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <BackRow route={'/'} />
      <div className="gift">
        {users ? (
          <div className="gift__container">
            <h2>Send a gift to a friend!</h2>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="gift__spinner">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default Gift;
