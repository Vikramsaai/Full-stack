
import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazySuspense = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...rest} />
    </Suspense>
  );
};

LazySuspense.propTypes = {
  component: PropTypes.func.isRequired
};

export default LazySuspense