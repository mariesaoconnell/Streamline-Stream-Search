import React from 'react';
import LastSearched from './homeComponents/LastSearched';

function Home({lastSearch}) {
  return (
    <div>
      <LastSearched lastSearch={lastSearch}/>
    </div>
  );
}

export default Home;
