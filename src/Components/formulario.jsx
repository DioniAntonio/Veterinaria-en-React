import { useState } from "react"

const Formulario = () => {
  
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha,setFecha] = useState("")
    const [sintomas,setSintomas] = useState("")

    const [error, setError] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault();

        if([nombre,propietario,email,fecha,sintomas].includes(""))  {
            console.log("Hay Al Menos Un Campo Vacio")
            
            setError(true)
            return;
        }
        setError(false)
       
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
                    { error && (<div className="bg-red-800 text-white p-3 uppercase font-bold mb-3 rounded-md text-center">
                        <p>Todos Los Campos Son Obligatorios</p>
                            </div>)
                            
                            }


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
                            value="Agregar" />
                </form>
        </div>
    )
}


export default Formulario