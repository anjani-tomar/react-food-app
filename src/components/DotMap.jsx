import React from 'react'
import {  mg1, mg6 } from '../assets'
import './boot.css';
import './DotMap.css';

const DotMap = () => {
  const clients  = [{
    logo: mg1,
    text: "Hygienic Food",
    paragraph:"Lorem Ipsum is simply dummy printing and typesetting.",
},
{  logo: mg1,
  text: "Hygienic Food",
  paragraph:"Lorem Ipsum is simply dummy printing and typesetting.",


}]
  const styles = {
    borderRadius: "58px",
    backgroundImage: "linear-gradient(#800006 0%, #000 100%)",
    borderTop: "4px solid #450b0b",
    boxShadow: "0 2px 5px 0px #050505, 0px 3px 5px 0px #850000",
    transition: ".8s cubic-bezier(.22, .75, 1, 1)",
    marginBottom: "40px",
  padding: "30px 20px 40px 20px"
  }
  return (
    <>
    {
      clients.map((client)=>
      <div key={client} style={styles}>
    <div className='image'> <img src={mg6} /></div>
        <h2 className='text '>{client.text}</h2>
        <p className='para'>{client.paragraph}</p>
     
      </div>
      )
    }
    </>
  );
}

export default DotMap