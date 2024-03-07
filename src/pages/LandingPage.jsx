import logo from '../assets/images/Group 1.png'
import tiktokImage from '../assets/images/Vector.png'
import instagramImage from '../assets/images/instagram 1.png'
import Bg from '../assets/images/image 18.png'

const LandingPage = () => {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
        <img src={Bg} alt="" className='absolute object-cover w-full h-full' />
        <div className="bg-black opacity-70 h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="pt-12">
                    <img src={logo} alt="" className="object-contain" />
                </div>
                <div className="pt-64">
                    <h1 className="text-3xl md:text-6xl font-extrabold text-center text-white">NEW WEBSITE </h1>
                    <h1 className="text-3xl md:text-6xl font-extrabold text-center text-white">COMING SOON </h1>
                    <div className="flex justify-center items-center space-x-5 mt-6">
                    <img src={tiktokImage} alt="" className="object-contain" />
                    <img src={instagramImage} alt="" className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default LandingPage