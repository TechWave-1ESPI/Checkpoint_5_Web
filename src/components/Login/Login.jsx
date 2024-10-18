import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import Logo from '../../assets/logo/logo.png'


const Login = () => {
    const usuario = useRef();
    const senha = useRef();

    const [usuarios, setUsuarios] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    function validade() {
        for (let i = 0; i < usuarios.length; i++) {
            if (
                usuarios[i].usuario === usuario.current.value &&
                usuarios[i].senha === senha.current.value
            ) {
                return true;
            }
        }
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validade()) {
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", usuario.current.value);
            sessionStorage.setItem("senha", token);
            navigate("/");
        } else {
            setErrorMessage("Usuário ou senha incorretos. Tente novamente.");
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/usuarios/")
            .then((res) => res.json())
            .then((res) => {
                setUsuarios(res);
            });
    }, []);

    return (
        <section className="flex justify-center items-center h-[70vh]">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full">
                <div className="p-8 w-full max-w-sm">
                    <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit}>
                        <span className="text-2xl font-bold text-gray-800 mb-8 text-center">Faça seu Login</span>

                        <div className="mb-5 relative">
                            <input
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:border-orange-400 focus:bg-white focus:outline-none focus:shadow-outline"
                                id="usuario"
                                placeholder="Usuário"
                                ref={usuario}
                            />
                        </div>

                        <div className="mb-5 relative">
                            <input
                                type="password"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:border-orange-400 focus:bg-white focus:outline-none focus:shadow-outline"
                                id="senha"
                                placeholder="Senha"
                                ref={senha}
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 mt-2">{errorMessage}</p>
                        )}

                        <div className="flex justify-center mt-6">
                            <button type="submit" className="bg-orange-600 text-white rounded-lg py-3 px-6 text-lg transition duration-300 hover:bg-orange-400 w-full">
                                Login
                            </button>
                        </div>

                        <ul className="list-none mt-8 flex flex-col items-center text-gray-600 text-sm">
                            <li>
                                <span className="text-gray-800 mb-2">Não possui conta?</span>
                                <Link to="/cadastrar-usuario" className="text-blue-600 font-medium transition duration-300 hover:text-blue-700">
                                    Criar
                                </Link>
                            </li>
                        </ul>
                    </form>
                </div>
                <div className="flex justify-center items-center">
                    <img src={Logo} alt="logo imagem" className="w-72 h-72" />
                </div>
                
            </div>
        </section>
    );
};

export default Login;
