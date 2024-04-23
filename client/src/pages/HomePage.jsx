import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-zinc-800 flex justify-center items-center">
      <header className="bg-zinc-800 p-10">
        <h1 className="text-5xl py-2 font-bold">TO DO LIST: LOS LEGENDARIOS 🚀</h1>
        <p className="text-md text-gray-200">
          El siguiente trabajo hace parte de la Asignatura: Tendencias Avanzadas de Ingeniería de Software.
        </p>
        <p>
          Integrantes del grupo:
        </p>
        <ul>
          <li>
            Jonnathan Sotelo Rodríguez - 20202020040
          </li>
          <li>
            Jhostyn David García Urrego - 20191020112
          </li>
          <li>
            Daniel Cuesta Forero - 20182020147
          </li>
        </ul>

        <Link
          className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
          to="/register"
        >
          Empezemos!
        </Link>
      </header>
    </section>
  );
}

export default HomePage;
