import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainer';
import { clearValues, handleChanges } from '../features/allJobs/allJobsSlice';
import { FormRow, FormSelect } from '.';
const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChanges({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearValues());
  };
  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleChange}
          />
          <FormSelect
            name='searchStatus'
            value={searchStatus}
            labelText='Search Status'
            handleChange={handleChange}
            options={['all', ...statusOptions]}
          />
          <FormSelect
            name='searchType'
            value={searchStatus}
            labelText='Seaarch Type'
            handleChange={handleChange}
            options={['all', ...jobTypeOptions]}
          />
          <FormSelect
            name='sort'
            value={sort}
            options={sortOptions}
            handleChange={handleChange}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
