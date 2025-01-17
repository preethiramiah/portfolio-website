import { ReactElement } from 'react'
import Circle from './Circle'
import LightSource from './LightSource'

const CirclesBackground = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      <div className='absolute opacity-15 inset-[0_0_-100px]'>
        <div className='bg-noise bg-repeat w-full h-full opacity-40 absolute top-0 bottom-0 left-0 right-0 bg-[size:128px]' />
      </div>
      <LightSource />
      <div className='absolute opacity-25 inset-[0_0_-69px_-6px] overflow-hidden'>
        <Circle radius='1220' />
        <Circle radius='1020' />
        <Circle radius='820' />
        <Circle radius='620' />
      </div>
      <div className='absolute top-[-30px] left-0 right-0 h-[900px] overflow-hidden bg-gradient-to-b from-[rgba(18,24,30,0)] from-[-18%] to-[#051218] to-[95%]'>
        <div className='absolute top-[30px] left-0 right-0 h-[124px] overflow-hidden bg-gradient-to-b from-[#081822] from-[0%] to-[rgba(14,28,34,0)] to-[100%] opacity-75' />
      </div>
      <div className='absolute bg-stars bg-no-repeat bg-center h-[580px] top-32 bottom-0 left-0 right-0' />
      {children}
    </div>
  )
}

export default CirclesBackground
