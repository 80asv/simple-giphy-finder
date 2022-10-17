import React, { useState, useEffect } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function GifList({ params }){

    const { keyword } = params;

    const [gifs, setGifs] = useState([]);

    // hace el llamado a la API de Giphy para obetener las imagenes
	useEffect(() => {
		getGifs({ keyword }).then(gifs => setGifs(gifs));
	}, [keyword])

    return(
        <>
        {
			// rendeiza todos links de los gif
		    gifs.map(({ title, id, url}) => <Gif title={title} id={id} url={url} key={id}/>)
		}
        </>
    )
}