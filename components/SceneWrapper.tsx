'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./Scene'), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-[#0a0a1a]">
      <div className="size-32 animate-spin rounded-full border-y-2 border-cyan-500"></div>
    </div>
  ),
});

const SceneWrapper = () => {
  return <Scene />;
};

export default SceneWrapper; 