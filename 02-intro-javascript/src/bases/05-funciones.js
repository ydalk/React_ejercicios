const getUsuarioActivo = ( nombre ) => (
    {
        uid: 'ABC456',
        username: nombre
    }
);

const usuarioActivo = getUsuarioActivo('Carolina');
console.log( usuarioActivo);