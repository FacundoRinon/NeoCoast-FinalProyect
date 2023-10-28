import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import BackRow from 'Components/BackRow';
import { getOneUser } from '../../api/users';

import './index.scss';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  async function getProfile() {
    try {
      const response = await getOneUser(id);
      setProfile(response.data);
    } catch (error) {
      console.log('Error in Profile/index.jsx - getProfile', error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  console.log('profile: ', profile);

  return (
    <>
      <BackRow route="/" />
      <div className="profile">
        {profile ? (
          <div className="profile__container">
            <div className="profile__header">
              <div className="profile__img">
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQHRpriPsqXNyw/profile-displayphoto-shrink_800_800/0/1674105280991?e=2147483647&v=beta&t=1HHq56exp6ajnbwS8rIVQBcxz-kie53VfW5WpfZcOW0"
                  alt=""
                />
              </div>
              <div className="profile__title">
                <h3>
                  {profile.name.firstname} {profile.name.lastname}
                </h3>
                <p>{profile.username}</p>
                <p>{profile.email}</p>
              </div>
            </div>
            <div className="profile__address">
              <p>City: {profile.address.city}</p>
              <p>Zipcode: {profile.address.zipcode}</p>
              <p>Phone: {profile.phone}</p>
              {user.id === profile.id && (
                <>
                  <p>Street: {profile.address.street}</p>
                  <p>Number: {profile.address.number}</p>
                </>
              )}
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
};

export default Profile;
