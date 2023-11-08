import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

import { getOneUser } from '../../api/users';
import { ROUTES } from '../../data/constants';
import BackRow from 'Components/BackRow';
import Spinner from 'Components/Spinner';

import './index.scss';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  async function getProfile() {
    try {
      const response = await getOneUser(id);
      if (response.data) {
        if (response.data.id === user.id) {
          setProfile(user);
        } else {
          setProfile(response.data);
        }
      } else {
        navigate(ROUTES.error);
        // hacer que si entro a este
      }
    } catch (error) {
      console.log('Error in Profile/index.jsx - getProfile', error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <BackRow page={'Profile'} />
      <div className="profile">
        {profile ? (
          <div className="profile__container">
            <div className="profile__header">
              <div className="profile__img">
                <img
                  src={`https://robohash.org/${profile.username}`}
                  alt=""
                />
              </div>
              <div className="profile__title">
                <h3>
                  {profile.name.firstname} {profile.name.lastname}
                </h3>
                <p>{profile.username}</p>
                <p>{profile.email}</p>
                {user.id == id && (
                  <button onClick={() => navigate(`${ROUTES.edit}`)}>
                    Edit profile
                  </button>
                )}
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
            <div className="profile__cart">
              <Link
                className="link--primary"
                to={`/cart/${profile.id}`}>
                <p>View Cart</p>
              </Link>
            </div>
          </div>
        ) : (
          <div className="profile__spinner">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
