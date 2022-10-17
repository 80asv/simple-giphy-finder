const api_key = 'GubYEsLHwdJH9JPK4wahePL9GoK2k3rX&q';

export default async function getGifs({ keyword }){
    let apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    const res = await fetch(apiURL);
    const response = await res.json();
    const { data } = response;
    const gifs = data.map(image => {
        const { images, title, id } = image;
        const url = image.images.downsized_medium.url;

        return { title, id, url };
    });

    return gifs;
}