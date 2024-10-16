
export function Intro(){
    return(
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl md:mb-3  dark:text-white font-bold">Daniel Estrada</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <img 
            src="assets/daniel.jpeg" 
            alt=""
            className="w-44 h-56 rounded-md mb-3 border-2 border-stone-700 dark:border-white md:w-56 md:h-72 lg:w-64 lg:h-80"
            />
            <p className="text-sm max-w-xl mb-6 font-bold">Estudiante de Ingeniería en Sistemas de Información con experiencia en el desarrollo web, especializado en el backend
                con ciertas habilidades de frontend. He utilizado Node.js para la creación de APIs RESTful, además, he colaborado en proyectos frontend utilizando tailwind y react.
                 Estoy familiarizado con el uso de Git y GitHub para el control de versiones y trabajo colaborativo.</p>


        </div>
    )
}