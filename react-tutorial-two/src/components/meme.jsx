import Datas from '../data'
import {useState} from 'react';

function Meme() {

    const [meme, setMeme] = useState({
      randomImg: "banner-img.jpg",
      topText: "",
      bottomText: ""
    })

    function handleOnClick(){
        const randomNum = Math.floor(Math.random() * 5);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: Datas[randomNum].coverImg
          })
        )
    }

    function handleOnChange(event){
      const {name, value} = event.target
      setMeme(prevMemeText => ({
        ...prevMemeText,
        [name]: value
      }))
    }

  return (
    <div className='meme--page'>
      <input type="text" id='top--text' placeholder='Top text' name='topText' value={meme.topText} onChange={handleOnChange}/>
      <input type="text" id='bottom--text' placeholder='Bottom text' name='bottomText' value={meme.bottomText} onChange={handleOnChange}/>
      <button onClick={handleOnClick} className='meme--btn'>Generate an img</button>

      <h1>{meme.topText}</h1>
      <img src={`images/${meme.randomImg}`} className='meme-img'></img>
      <h1>{meme.bottomText}</h1>
    </div>
  )
}

export default Meme
