
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
   <Wrapper>
       <nav>
           <Logo/>
       </nav>
       <div className='container page'>
           <div className='info'>
               <h1>job <span>tracking</span>app</h1>
               <p>I'm baby pBR&B post-ironic VHS brunch, direct trade ramps narwhal seitan pour-over yes plz helvetica tumeric vice schlitz. Food truck heirloom polaroid scenester</p>
               <Link className='btn btn-hero' to='/register'>Login/Register</Link>
           </div>
           <img src={main} alt='job hhunt' className='img main-img'/>
       </div>
   </Wrapper>
  )
}



export default Landing

