const handlePublishClick = () => {
    setShowForm(true); // Mostrar el formulario cuando se hace clic en "Publicar"
  };

  const handleCloseForm = () => {
    setShowForm(false); // Ocultar el formulario
  };
  const CreateJobForm = ({ onCreate }) => {
    const [formData, setFormData] = useState({
      nombreApellido: '',
      dni: '',
      provincia: '',
      direccion: '',
      nroTelefono: '',
      servicio: '',
      codigoPostal: '',
      descripcionTrabajo: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  }
    const handleSubmit = (e) => {
      e.preventDefault();
      // Generar un ID único para la publicación simulada (puedes usar uuid o algo similar)
      const id = new Date().getTime().toString();
      const newPublication = { id, ...formData };
      onCreate(newPublication); // Llama a la función onCreate para agregar la nueva publicación
      // Limpiar el formulario después de la creación exitosa
      setFormData({
        nombreApellido: '',
        dni: '',
        provincia: '',
        direccion: '',
        nroTelefono: '',
        servicio: '',
        codigoPostal: '',
        descripcionTrabajo: ''
      });
    };

    {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white dark:bg-gray rounded-lg shadow-md p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Create Job Posting</h2>
            <form>
              {/* Aquí van los campos del formulario */}
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="Nombre y apellido"
                  name="Nombre y apellido"
                  className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                  placeholder="Nombre y apellido"
                />
                {/* Más campos según necesidad */}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  DNI
                </label>
                <input
                  type="text"
                  id="Dni"
                  name="Dni"
                  className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                  placeholder="Dni"
                />
                {/* Más campos según necesidad */}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Provincias
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="Provincia"
                  className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                  placeholder="Provincia"
                />
                {/* Más campos según necesidad */}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Direccion
                </label>
                <input
                  type="text"
                  id="Direccion"
                  name="Direccion"
                  className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                  placeholder="Direccion"
                />
                {/* Más campos según necesidad */}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Numero de telefono
                </label>
                <input
                  type="text"
                  id="Nro de telefono"
                  name="Nro de telefono"
                  className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                  placeholder="Nro de telefono"
                />
                {/* Más campos según necesidad */}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  servicio
                </label>
                <input
                  type="text"
                  id="servicio"
                  name="servicio"
                  className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                  placeholder="servicio"
                />
                {/* Más campos según necesidad */}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Codigo Postal
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="Codigo postal"
                  className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                  placeholder="Codigo postal"
                />
                {/* Más campos según necesidad */}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Descripcion de trabajo
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="Descripcion de trabajo"
                  className="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full sm:text-sm border p-2"
                  placeholder="Descripcion de trabajo"
                />
                {/* Más campos según necesidad */}
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-50"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
                <button
                  type="button"  // Cambia el tipo de submit a button
                  className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:border-blue-900 focus:ring focus:ring-blue-300 disabled:opacity-50 ml-2"
                  onClick={handleCloseAlert}  
                >
                  Create
                </button>
              </div>
            </form>