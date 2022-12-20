// import React, { useState } from 'react';
// import { InputBox } from './InputBox';
// import {Configuration, OpenAIApi} from 'openai'

// const configuration = new Configuration({
//     apiKey: process.env.API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// function OpenAI() {
//     const [userPrompt, setUserPrompt] = useState("");
//     const [number, setNumber] = useState(1);
//     const [size, setSize] = useState("720x720");
//     const [imageUrl, setImageUrl] = useState("");
    
//     const generateImage = async () => {
//         const imageParameters = {
//             prompt: userPrompt,
//             n: parseInt(number),
//             size: size,
//         }
//         const response = await openai.createImage(imageParameters);
//         const urlData = response.data.data[0].url;
//         setImageUrl(urlData);
//     }


//     return(
//         <div className='App'> 
//             {imageUrl && <img src={imageUrl} className="image"alt="ai"/>}
//             <InputBox label={"Description"} setAttribute={setUserPrompt}/>
//             <InputBox label={"Amount"} setAttribute={setNumber}/>
//             <InputBox label={"Size"} setAttribute={setSize}/>
//             <button className='main_button' onClick={generateImage}>Generate</button>
//         </div>
//     )
// }

// export default OpenAI;