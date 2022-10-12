import { useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/ChartsContainer';
import AreaChart from './AreaChart';
import BarChart from './BarChart';

const ChartsContainer = () => {
  const [showBarChart, setShowBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setShowBarChart(!showBarChart)}>
        {showBarChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {showBarChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
