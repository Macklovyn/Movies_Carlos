const Book = require('../models/movie.model');

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json({
            message: "Consulta de peliculas.",
            data: movies
        }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al consultar peliculas.",
                data: error
            }
        );
    }
};

exports.getMovieById = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        const movie = await Movie.findById(movieId);
        return res.status(200).json(
            {
                message: "Consultando película por Id: " + movieId,
                data: movie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al consultar peliculas.",
                data: error
            }
        );
    }
};

exports.newMovie = async (req, res) => {
    try {
        const {id, nombre, director, año, duración, género} = req.body;
        const newMovie = new Movie({id, nombre, director, año, duración, género});
        await newMovie.save();
        return res.status(200).json(
            {
                message: "Película creada.",
                data: newMovie                
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al crear película.",
                data: error
            }
        );
    }
};

exports.updateMovie = async (req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    
    try {
        const updateMovie = await Movie.findByIdAndUpdate(movieId, newData, {new: true});
        return res.status(201).json(
            {
                message: "Actualizar película por Id: " + movieId,
                data: updateMovie
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al actualizar película.",
                data: error
            }
        );
    }
};

exports.deleteMovie = async (req, res) => {
    const movieId = req.params.movieId;
    try {
        await Movie.findByIdAndDelete(movieId);
        return res.status(201).json(
            {
                message: "Película eliminada con Id: " + movieId
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error al eliminar película.",
                data: error
            }
        );
    }
};


