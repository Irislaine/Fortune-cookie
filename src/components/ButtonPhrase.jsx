import React from 'react';
import getRandom from '../services/getRandom';
import arrayPhrases from '../utils/phrases.json';
import arrayImages from '../utils/images.json';


const ButtonPhrase = ({ setPhrase, setImage}) => {

  const handlePhrase = () => {
    setPhrase(getRandom(arrayPhrases));
    setImage(getRandom(arrayImages));
  }

  return (
    <button onClick={handlePhrase} className='btn'>
      <b>Probar mi suerte</b>
    </button>
  )
}

export default ButtonPhrase;