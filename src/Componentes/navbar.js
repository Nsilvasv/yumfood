import { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from "react-icons/bs";

const Nav = () => {

    const [sidenav, setSidenav] = useState(false)
    console.log(sidenav);

    return(
        <div className='max-w-[1520px] mx-auto flex justify-between itens-center p-4'>

            <div className='flex items-center'>

                <div onClick={() => setSidenav(!sidenav) } className="cursor-pointer">
                    <AiOutlineMenu size={25}/> 
                </div>

                <h1 className='text-2xl sm:text-2xl lg:text-3xl px-2 '>Yum 
                    <span>Food</span>
                </h1>
               
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-orange-700 text-white rounded-full p-2 text-bold">Free</p>
                    <p className="p-2 text-bold">Delivery</p>
                </div>
            </div>

            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25} />
                <input
                className="bg-transparent p-2 w-full focus:outline-none"
                type="text"
                placeholder="Pesquise sua comida..."
                />
             </div>

            <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full">
                <BsFillCartFill size={20} /> Carrinho
            </button>

            {
                sidenav ? (
                    <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"  ></div>
                ) : ("")
            }

            <div className={sidenav
                ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300" } >

                <AiOutlineClose onClick={() => setSidenav(!sidenav)} size={25} className='absolute right-4 top-4 cursor-pointer'/>
                
            </div>


        </div>
    )
}

export default Nav