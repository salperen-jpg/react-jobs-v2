import { FormRow, FormSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleInputChanges,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice';
import { useEffect } from 'react';

const AddJob = () => {
  const { user } = useSelector((store) => store.user);
  const { location } = user;
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !location) {
      toast.error('Please fill out fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleInputChanges({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleInputChanges({
          name: 'jobLocation',
          value: location,
        })
      );
    }
  }, []);

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'Edit job' : 'Add job'}</h3>
        <div className='form-center'>
          {/* POSITION */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleChange}
          />
          {/* COMPANY */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleChange}
          />
          {/* LOCATION*/}
          <FormRow
            type='text'
            name='jobLocation'
            value={jobLocation}
            labelText='job Location'
            handleChange={handleChange}
          />
          {/* JOB STATUS */}
          <FormSelect
            name='status'
            value={status}
            options={statusOptions}
            handleChange={handleChange}
          />
          {/* JOB TYPE */}
          <FormSelect
            name='jobType'
            labelText='Job Type'
            value={jobType}
            options={jobTypeOptions}
            handleChange={handleChange}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              disabled={isLoading}
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
