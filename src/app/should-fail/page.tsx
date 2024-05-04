// import Fail from '@/components/fail';
import React from 'react';
// import { ErrorBoundary } from 'react-error-boundary';

function ShouldFail() {
  return (
    <>
      <h1>Should Fail Page. And this must show</h1>

      {/* <ErrorBoundary fallback={<h1>Error</h1>}>
        <Fail />
      </ErrorBoundary> */}
    </>
  );
}

export default ShouldFail;
