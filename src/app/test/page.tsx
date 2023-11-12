'use client';

import { Button } from 'stories/Button';

const Page = () => {
  return (
    <div>
      바디 from test
      <Button
        label="asasas"
        onClick={() => {
          console.log('clicked');
        }}
        primary
        size="large"
      />
    </div>
  );
};

export default Page;
