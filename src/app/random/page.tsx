'use client';

import { useEffect, useState } from 'react';

async function getRandom() {
  const res = await fetch('https://randomuser.me/api/');

  const data = await res.json();

  return data;
}

type Data = {
  results?: {
    name: string;
  }[];
};

function RandomPage() {
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    const random = async () => {
      const data = await getRandom();

      setData(() => data);
    };

    random();
  }, []);

  return (
    <div className='container'>
      RamdonPage
      <pre>{JSON.stringify(data?.results?.[0]?.name, null, 2)}</pre>
    </div>
  );
}

export default RandomPage;
