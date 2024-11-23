import dynamic from 'next/dynamic'
const ContendIntro = dynamic(() => import('@/components/intro/ContendIntro'), { ssr: false })

export default function Home() {

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <div className='z-0'>
        <h1>Home</h1>
      </div>
      <ContendIntro />
    </div>
  );
}
