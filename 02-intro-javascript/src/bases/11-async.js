//async vuelve una fncion en promesa

// const getImagen = async () => {

//     return 'https://jsfhafaf.com';
// }

// getImagen().then(console.log)


const getImagen = async () => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfT09mykeuShdqFYSGC';
        //el awai espera a que esta promesa termine antes de ejecutar la siguiente parte del código
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key= ${apiKey}`);
        const data = await resp.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (err) {

        console.log(err)
    }


}

getImagen();