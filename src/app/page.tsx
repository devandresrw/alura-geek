import dynamic from 'next/dynamic'
const ContendIntro = dynamic(() => import('@/components/intro/ContendIntro'), { ssr: false })
export default function Home() {
  return (
    <div className='h-screen w-screen overflow-hidden bg-[#5d04d9]'>
      <ContendIntro />
    </div>
  );
}
