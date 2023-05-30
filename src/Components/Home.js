import React from 'react'
import Navbar from './Navbar'
import background from '../Assets/Home-background.jpg'
import natash from '../Assets/natasha.JPG'
import banking from '../Assets/mobile_banking_app.jpg'
import food from '../Assets/food.jpg'
import greens from '../Assets/green.jpg'


const Home = () => {

  const style = {backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  width: '100%',
  height: '100%'
};


 

  return (
   
    <div style={style}>
    <Navbar/>
    <table className='center'>
      <tr>
        <td >
          <p className='rotate'>my process &nbsp; &nbsp; &nbsp;client reviews &nbsp; &nbsp; &nbsp; download cv</p>
        </td>
      <td>
        <div className="home-image-section">
          <img src={natash} alt='No Picture' className='image1' />
        </div>
        </td>
        <td >
          <p className='rotate'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<button className='blueline'></button>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;missied advice my it no sister</p>
        </td>

        <td>
    <div className="home-text-section">
          <h1 className="primary-heading">
            Why Me
          </h1>
          <p className="primary-text">
            Whether article spirits new her coverd hastily sitting her.<br/>
            Money witty books nor son add. Chicken age had evening <br></br>
            believe but proceed pretend mrs.
          </p>

          <p className="primary-text">
            At missed advice my it no sister. Miss told ham dull knew <br></br>
            see she spot mear can. Spirit her entire her called. Detract<br></br>
            yet delight written farther his general.
          </p>
          <button className='schedule'>
           schedule a call 
          </button>

          <h1 className="primary-heading">
            Latest Work
          </h1>

          <div>
            <img src={banking} alt='No picture' className='image'/>
            <img src={food} alt='No Picture' className='image'/>
            <img src={greens} alt='No Picture' className='image'/>

          </div>

          <div className='view'>
          view all
          </div>
          
        </div>
        </td>
        
        </tr>
        </table>
    </div>
  );
}

export default Home