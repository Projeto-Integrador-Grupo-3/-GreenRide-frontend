import { Link, useNavigate } from "react-router-dom"

function Dirigir() {

    const navigate = useNavigate()

    function retornar() {
        navigate('/login')
    }

    return (
        <div className="">

            <div className="flex items-center justify-between gap-7 pt-8">

                <div className=" flex items-center h-52 ml-12">
                    <h2 className=" text-6xl font-extrabold">Viaje com a
                        <span className="font-bold text-primary-500" > GREENRIDE</span>
                    </h2>
                </div>

                <div className="mt-14">
                    <img
                        className='w-100 h-80 object-cover pt-7'
                        src="https://wordpress.ft.unicamp.br/mats/wp-content/uploads/sites/29/2021/07/Como-ter-um-carro-sustentavel-pemavel.jpg"
                        alt="imagen viajar" />
                </div>

            </div>
            <div className="relative flex flex-col items-start h-52 ml-12">
                <p className="text-2xl font-serif font-semibold mb-4">Aqui na Greenride você granha mais e sai no lucro </p>
                <p className=" font-serif font-semibold mb-4">Além de contribuir com a preservação do meio-ambiente para as futuras gerações</p>

                <div className="absolute inset-x-0 bottom-10  flex justify-center items-center">
                    <Link
                        to="/login"
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
  Comece Agora
                    </Link>
                </div>

            </div>




        </div>
    )
}

export default Dirigir