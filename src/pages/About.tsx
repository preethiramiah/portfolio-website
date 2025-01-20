import Coder from '../assets/images/coder.png'
import DownloadButton from '../components/DownloadButton'
import GithubButton from '../components/GithubButton'
import LinkedInButton from '../components/LinkedInButton'
import { About as AboutData } from '../model'

const AvailableToWork = () => {
  return (
    <div
        className='flex justify-center items-center gap-3 bg-[#001402cc] border-solid border-2 border-[#061e17]
          rounded-lg py-2 px-4 shadow-[inset_0_-6px_0_-5px_#0e250f,0_2px_7px_0_rgb(8,24,34)]'
      >
        <span className="relative flex size-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
          <span className="relative inline-flex rounded-full size-3 bg-green-600"></span>
        </span>
        <p className='font-manrope text-sm font-semibold text-[rgba(255,255,255,0.8)]'>Available for opportunities</p>
      </div>
  )
}

const About = ({ about }: { about: AboutData }) => {
  const { title, description, linkedIn, github } = about
  return (
    <div className='relative flex flex-col items-center justify-center gap-6 pt-24'>
      <div className='flex flex-col items-center justify-center gap-0'>
        <img alt='coder' src={Coder} className='w-24' />
        <AvailableToWork />
      </div>
      <p className='font-pockota-medium text-white text-4xl max-w-80 md:max-w-md lg:max-w-xl'>{title}</p>
      <p className='font-manrope text-[rgba(255,255,255,0.4)] text-[16px] font-semibold leading-6 max-w-80 md:max-w-md lg:max-w-xl'>
        {description}
      </p>
      <div className='flex gap-4 mt-4 justify-center items-center'>
        <DownloadButton />
        <GithubButton link={github} />
        <LinkedInButton link={linkedIn} />
      </div>
    </div>
  )
}

export default About
