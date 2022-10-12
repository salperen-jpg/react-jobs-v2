import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import FormRow from '../../components/FormRow';
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';
const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error('Please fill the empty places');
      return;
    }
    dispatch(updateUser(userData));
  };
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='Last Name'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            save changes
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
