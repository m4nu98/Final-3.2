import mongoose from 'mongoose';

const jobPostingSchema = new mongoose.Schema({
  nombreApellido: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true
  },
  provincia: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  nroTelefono: {
    type: String,
    required: true
  },
  servicio: {
    type: String,
    required: true
  },
  codigoPostal: {
    type: String,
    required: true
  },
  descripcionTrabajo: {
    type: String,
    required: true
  }
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

export default JobPosting;
