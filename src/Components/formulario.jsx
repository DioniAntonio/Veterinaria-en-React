import { useEffect, useState } from "react"
import Error from "./Error"
import Paciente from "./paciente"


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha,setFecha] = useState("")
    const [sintomas,setSintomas] = useState("")

    const [error, setError] = useState(false)



    useEffect(()=> {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    },[paciente])


    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);


        return random + fecha


    }

    const handlesubmit = (e) => {
        e.preventDefault();

        if([nombre,propietario,email,fecha,sintomas].includes(""))  {
            
            setError(true)
            return;
        }
        setError(false)

        const objetoPacientes = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }


        if(paciente.id){
            // Editando el Registro
            objetoPacientes.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
            paciente.id ? objetoPacientes : pacienteState)

                setPacientes(pacientesActualizados)
                setPaciente({})
        } else {
            //Nuevo Paciente
            objetoPacientes.id = generarId();
            setPacientes([...pacientes, objetoPacientes]);

        }   

        

        setPacientes([...pacientes, objetoPacientes])

        // reiniciar form
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")
       
    }
   
    return (

        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento Pacientes</h2>

                <p className="text-lg mt-5 text-center">
                    Añade pacientes y {""}
                    <span className="text-indigo-600 font-bold">Administralos</span>
                </p>

                <form
                    onSubmit={handlesubmit}
                    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                    >   
                    
                     {error && <Error mensaje={"Todos Los Campos Son Obligatorios"}
                     />}


                        <div className="mb-5" >
                            <label htmlFor="Mascota" className="block text-gray-700 uppercase font-bold">
                                Nombre Mascota
                            </label>
                            <input 
                                type="text"
                                id="Mascota"
                                placeholder="Nombre de la Mascota"
                                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">
                                Nombre de propietario
                            </label>
                            <input 
                                type="text"
                                id="propietario"
                                placeholder="Nombre de Propietario"
                                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                value={propietario}
                                onChange={(e) => setPropietario(e.target.value)}
                            
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="Email" className="block text-gray-700 uppercase font-bold">
                                Email
                            </label>
                            <input 
                                type="text"
                                id="Email"
                                placeholder="Email Contacto Propietario"
                                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="Alta" className="block text-gray-700 uppercase font-bold">
                                Alta
                            </label>
                            <input 
                                type="date"
                                id="Alta"
                                placeholder="Nombre de la Mascota"
                                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                            
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="textarea" className="block text-gray-700 uppercase font-bold">
                                Síntomas
                            </label>
                            <textarea
                                id="sintomas"
                                placeholder="Describe los sintomas"
                                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                                value={sintomas}
                                onChange={(e) => setSintomas(e.target.value)}
                            
                            />
                        </div>
                        <input 
                            type="submit"
                            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700
                            cursor-pointer transition-colors"
                            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} />
                </form>
        </div>
    )
}


export default Formulario