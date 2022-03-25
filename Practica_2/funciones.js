function ObtenerUsuario(userId, callback) {
    console.log('Obtener usuario de la Base de Datos');
    setTimeout(() =>{
            callback({
                userId: userId,
                username: 'Leylan.'
            });
    }, 1000);
}
function ObtenerServicios(user, callback) {
    console.log(`Obtener servicio ${user.username} desde la API`);
    setTimeout(() =>{
        callback(['Email', 'VPN','CDN']);
    }, 2 * 1000);
}

function ObtenerCostodeServicios(services, callback) {
    console.log(`Calcular costo de servicios ${services}`);
    setTimeout(() =>{
        callback(services.length * 100);
    }, 3 * 1000);
}

ObtenerUsuario(100, (user) => {
    ObtenerServicios(user, (services) =>{
        ObtenerCostodeServicios(services, (costos) =>{
            console.log(`El costo del servicio es ${costos}`);
        });
    });    
});
