import { Cabecera } from "../contenedor/Cabecera";
export const Inicio = () => {
  return (
    <>
    <Cabecera />
    <div className="pt-5 d-flex justify-content-center">
      <div className="col-md-6"> 
       <div className="h-100 p-5 text-bg-dark rounded-3">
        <h2>Bienvenido</h2>
        <p>
        Estamos emocionados de tenerte aquí, donde la pasión por los autos superdeportivos cobra vida. Descubre una selección impresionante de vehículos que combinan diseño, potencia y tecnología de vanguardia. Nuestro equipo está listo para ofrecerte una experiencia única y ayudarte a encontrar el auto de tus sueños.

        ¡Prepárate para vivir la adrenalina y la emoción sobre ruedas!
        </p>
        <button className="btn btn-outline-light" type="button">
          Conoce más
        </button>
       </div>
      </div>
    </div>
    </>
  );
};
