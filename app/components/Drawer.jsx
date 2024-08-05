import Image from 'next/image';
import ImagePerfil from './Perfil';

export default function Drawer({ children }) {
  return (
    <>
      <div className='daisy-drawer flex'>
        <input id='menu' type='checkbox' className='daisy-drawer-toggle' />
        <div className='w-full'>{children}</div>

        <div className='daisy-drawer-side w-screen'>
          <label
            htmlFor='menu'
            aria-label='close sidebar'
            className='daisy-drawer-overlay'
          ></label>

          <ul className='bg-[#01000f] daisy-menu text-base-content min-h-full w-80 p-4'>
            
              <label
                htmlFor='menu'
                aria-label='close sidebar'
                className='w-full flex justify-end daisy-btn daisy-btn-sm daisy-btn-circle daisy-btn-ghost text-lg hover:bg-transparent'
              >
                ✕
              </label>
            
            <li>
              <figure className='daisy-menu-title w-[100%] h-auto hover:bg-transparent flex items-center justify-center'>
                <ImagePerfil />
              </figure>
              <span className='daisy-menu-title cursor-default text-center'>
                Nome do Usário
              </span>
            </li>

            <li>
              <h2 className='daisy-menu-title cursor-default'>Conta</h2>
              <ul>
                <li>
                  <button>Editar</button>
                </li>
              </ul>
            </li>
            <li>
              <h2 className='daisy-menu-title cursor-default'>Postagem</h2>
              <ul>
                <li>
                  <button>Criar</button>
                </li>
                <li>
                  <button>Editar</button>
                </li>
              </ul>
            </li>
            <li>
              <h2 className='daisy-menu-title cursor-default'>Categorias</h2>
              <ul>
                <li>
                  <button>Eventos</button>
                </li>
                <li>
                  <button>Dia a Dia</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
