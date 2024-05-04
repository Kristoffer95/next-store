import React from 'react';

async function ShouldLoad({ params: { id } }: { params: { id: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>This Should Load {id}</div>;
}

export default ShouldLoad;
