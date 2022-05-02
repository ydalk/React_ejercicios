const apiKey = 'TXIreWV8ZSPofXv5RaGylPNqQvniBSPP';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key= ${apiKey}`);

//promesas en cadena, solo necesita un catch
peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        console.log(data)
    })

    .catch(console.warn);