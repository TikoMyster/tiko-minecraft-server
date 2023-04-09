import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted';
const Hero = () => 
   (
    <section id="home" className={` flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
            <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
            <p className={`${styles.paragraph} ml-2`}>
              <span className='text-white'>Hello</span>{ " " } there { " " }
              <span className='text-white'>my</span> friend
            </p>
        </div>
          <div className='flex flex-row justify-between items-center w-full'>
              <h1 className=' flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] mr-2'>
                Tiko's <br className='sm:block hidden'/> { " " }
                <span className='text-gradient'>Outrageous</span> { " " }
                Servers
              </h1>
              <div className='ss:flex hidden md:mr-4 mr-0'>
                <GetStarted/> 

              </div>
          </div>

          <h1 className=' font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Lets Have Fun</h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>The sole purpose of this site is to provide information about the servers I am sharing with you. You will abide to my rules.</p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='pepe dancing' className='w-full h-full relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />

      </div>

    </ section>
  )


export default Hero