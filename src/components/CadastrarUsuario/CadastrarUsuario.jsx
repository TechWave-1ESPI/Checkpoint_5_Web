import { MdCancel } from "react-icons/md";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Usuario = () => {
    let { id } = useParams();

    const [usuarios, setUsuarios] = useState({
        id,
        usuario: '',
        senha: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
    }

    let metodo = id ? "put" : "post";

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/usuarios/${id ? id : ''}`, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuarios),
        }).then(() => {
            navigate("/login");
        });
    };

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/usuarios/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setUsuarios(data);
                });
        }
    }, [id]);

    return (
        <section className="flex justify-center items-center p-5 h-[70vh] ">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-10 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Cadastro de Usuários</h1>
                <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <input
                            type="text"
                            name="usuario"
                            value={usuarios.usuario}
                            placeholder="Digite seu usuário"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:border-orange-600 focus:bg-white focus:outline-none focus:shadow-outline"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-5">
                        <input
                            type="password"
                            name="senha"
                            value={usuarios.senha}
                            placeholder="Digite sua senha"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:border-orange-600 focus:bg-white focus:outline-none focus:shadow-outline"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex justify-center mt-6">
                        <button type="submit" className="bg-orange-600 text-white rounded-lg py-3 px-6 text-lg transition duration-300 hover:bg-orange-400 w-full">
                            Cadastrar
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <Link to="/login" className="text-orange-400 font-medium transition duration-200 hover:text-orange-600">
                            <MdCancel className="inline-block mr-2" />
                            Já tem uma conta?
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Usuario;
