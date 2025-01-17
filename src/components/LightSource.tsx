import Light from '../assets/images/light.png'

const LightSource = () => {
  return(
    <div className='absolute top-0 bottom-0 left-0 right-0 mix-blend-color-dodge inset-[0_-96px]'>
      <img src={Light} className='h-full w-full object-fill object-center opacity-40' />
    </div>
  )
}

export default LightSource
