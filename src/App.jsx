
import './App.css'
import banner from './assets/Rectangle.png';
import logo from './assets/indiaretail-logo-23 1.png';
import img1 from './assets/Link ⏵ news4.jpg.png';
import img2 from './assets/Link ⏵ news4.jpg (1).png';
import img3 from './assets/Mask group.png';
import rahul from './assets/Link ⏵ Figure ⏵ 169731-rbmaxpyfhd-1644061237.jpg.png';
import img4 from './assets/image 34.png';
import img5 from './assets/image 34 (1).png';
import img6 from './assets/image 34 (2).png';

function App() {

  return (
    <>
     <div className="header">
          <img src={banner} className="banner" alt="Vite logo" />
       </div>
       <div className="log">

        <div className="search">
        <input className='search-btn' type="search"  placeholder='search here'/>
        </div>
        
        <img src={logo} className='logo' />
        
        <div className="btns">
        <button className='sub'>Subcribe</button>
        <button className='sign'>Sign In</button>
        </div>
       </div>
       <div className="content_header">
        <div></div>
        <div className="links">
        <li><a href="Home">Home</a></li>
        <li><a href="">Categories</a></li>
        <li><a href="">IR Prime</a></li>
        <li><a href="">Events</a></li>
        <li><a href="">Bookstore</a></li>
        <li><a href="">NewsLetter</a></li>
        <li><a href="Video">Video</a></li>
       </div>
       <div className="weather">Friday, 30 June 2023</div>
       </div>
       <div className="content-header2">
        <a href="">Fashion & Lifestyle</a><a href="">Beauty & Wellness</a><a href="">Food & Beverage</a><a href="">Consumer Durables & IT</a><a href="">Entertainment</a><a href="">Home Decor & Furnishing</a><a href="">Specialty Retail</a>
       </div>
       
       <div className="kutty">
        
        <div className="img1"><img className='kutty-img' src={img1} alt="" /><div className="img-cnt"><p><span>Hotspot</span> </p>
        <p>Luxury hotspots: 5 most expensive high streets in the..</p></div></div>

        <div className="img2"><img className='kutty-img' src={img2} alt="" /><div className="img-cnt"><p><span>AI</span> </p>
        <p>Luxury hotspots: 5 most expensive high streets in the..</p></div></div>
        
        <div className="img3"><img className='kutty-img' src={img3} alt="" /><div className="img-cnt"><p><span>Shipping</span> </p>
        <p>Luxury hotspots: 5 most expensive high streets in the..</p></div></div>
       </div>

      <div className="row-col">
        <div className="col">
              <img src={rahul} className='rahul' alt="" />

              <div className="kutty2">
        
        <div className="img21"><img className='kutty1-img' src={img4} alt="" /><div className="img21-cnt"><p><span>Hotspot</span> </p>
        <p>Luxury hotspots: 5 most expensive high streets in the..</p></div></div>

        <div className="img22"><img className='kutty1-img' src={img5} alt="" /><div className="img22-cnt"><p><span>AI</span> </p>
        <p>Luxury hotspots: 5 most expensive high streets in the..</p></div></div>
        
        <div className="img23"><img className='kutty1-img' src={img6} alt="" /><div className="img23-cnt"><p><span>Shipping</span> </p>
        <p>Luxury hotspots: 5 most expensive high streets in the..</p></div></div>
       </div>

        <div className="row">
          <p>Latest News</p>
        </div>
        </div>


        </div>
    </>
  )
}

export default App
