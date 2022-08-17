export const getImagen = async () => {

    try {
        const apiKey = 'VfRXMRXz9Do3ps8LRWiRuqxNvnF2dHiN';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.error(error)
        return 'No se encontron la imagen'
    }

}
