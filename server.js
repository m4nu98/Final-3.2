import dotenv from 'dotenv';
import connectDB from './src/lib/db.js';
import express from 'express';
import RegistroUsuario from './src/models/user.js';
import JobPosting from "./src/models/jobs.js";
import cors from 'cors';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

// Conexión a la base de datos
connectDB();

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Habilitar CORS (puedes personalizar las opciones según tu entorno)
app.use(cors());

// Ruta para manejar el registro de usuarios
app.post('/api/usuarios', async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        // Ejemplo: Guardar el usuario en la base de datos
        const nuevoUsuario = new RegistroUsuario({ nombre, email, password });
        await nuevoUsuario.save();

        // Respuesta exitosa
        res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error); 
        if (error.code === 11000) { // Verifica si es un error de correo duplicado
            res.status(409).json({ 
                error: 'duplicate_email', 
                mensaje: 'Este correo electrónico ya está registrado. Por favor, utiliza otro.' 
            });
        } else {
            res.status(500).json({ 
                error: 'server_error', 
                mensaje: 'Error al registrar usuario. Inténtalo de nuevo más tarde.' 
            });
        }
    }
});


// Ruta para manejar el inicio de sesión de usuarios
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Datos recibidos:", req.body);  // Añadir registro para ver los datos recibidos

        // Verifica si los campos email y password están presentes
        if (!email || !password) {
            return res.status(400).json({ mensaje: 'Faltan credenciales' });
        }

        // Busca el usuario por email en la base de datos
        const usuario = await RegistroUsuario.findOne({ email });

        // Si no encuentra el usuario, devuelve un error
        if (!usuario) {
            return res.status(400).json({ mensaje: 'Usuario no encontrado' });
        }

        // Compara la contraseña ingresada con la almacenada en la base de datos
        const isMatch = await usuario.comparePassword(password);

        // Si las contraseñas no coinciden, devuelve un error
        if (!isMatch) {
            return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Si las credenciales son correctas, devuelve los datos del usuario
        res.status(200).json({
            id: usuario._id, // Asegúrate de incluir el ID del usuario
            email: usuario.email,
            nombre: usuario.nombre,
            // Otros datos que quieras devolver
        });

    } catch (error) {
        console.error("Error en el login:", error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});






// Endpoint para guardar un nuevo job posting
app.post('/api/jobs', async (req, res) => {
    try {
        const { nombreApellido, dni, provincia, direccion, nroTelefono, servicio, codigoPostal, descripcionTrabajo } = req.body;

        // Crear un nuevo documento Job con los datos del formulario
        const nuevoJob = new JobPosting({ 
            nombreApellido, 
            dni, 
            provincia, 
            direccion, 
            nroTelefono, 
            servicio, 
            codigoPostal, 
            descripcionTrabajo 
        });
        

        // Guardar el nuevo job en la base de datos
        await nuevoJob.save();

        // Enviar una respuesta exitosa
        res.status(201).json({ mensaje: 'Job posting creado exitosamente' }); 

    } catch (error) {
        console.error('Error al crear job asdasd:', error); 
        console.log(error); // <-- Agrega esta línea para mostrar el error en la consola
        res.status(500).json({ mensaje: 'Error al crear job posting' });
    }
});



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
