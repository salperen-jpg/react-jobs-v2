import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChartsContainer, StatsContainer } from '../../components';
import Loading from '../../components/Loading';
import { showStats } from '../../features/allJobs/allJobsSlice';
export const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
