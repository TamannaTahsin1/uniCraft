import logo from '../../assets/img/Logo.png';
import logo1 from '../../assets/img/Logo 1.png'
import logo2 from '../../assets/img/Logo 2.png'
import logo3 from '../../assets/img/Logo 3.png'
import logo4 from '../../assets/img/Logo 4.png'
import logo5 from '../../assets/img/Logo 5.png'



const Banner = () => {
    return (
        <div className="hero lg:h-[70vh] w-full" style={{backgroundImage: 'url(./banner.png)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-6xl font-bold text-black">Elevate Your Presence with <br /> Seamless Design and Innovation.</h1>
            <p className="mb-5 text-gray-400 font-semibold">From strategic planning to digital presence, we are your dedicated partner in achieving solo success.</p>
            <button className="btn bg-black text-white px-8 border-none">View Pricing</button>
            <p className="mt-48 text-xs font-bold text-gray-400">Trusted By 250+ Companies</p>
            <div className='lg:flex justify-around items-center mt-8 p-5'>
                <img src={logo} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;