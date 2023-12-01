const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://carlostrigueros:Circa1400@cluster0.3k2tjue.mongodb.net/peliculas.peliculas?retryWrites=true&w=majority').then(() => console.log('Conexión exitosa a MongoDB')).catch(err => console.log('Error al conectar a MongoDB: ', err));

module.exports = mongoose;
