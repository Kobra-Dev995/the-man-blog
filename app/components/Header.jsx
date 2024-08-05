import Link from 'next/link';
import LogoTheMan from './Logo';

export default function Header() {
  return (
    <>
      <header className='daisy-navbar bg-[#020019] flex items-center justify-between'>
        <div>
          <label
            htmlFor='menu'
            className='daisy-btn daisy-btn-square daisy-btn-ghost daisy-drawer-button'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-5 w-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
        </div>

        <div className='flex-none h-auto'>
          <Link href='/' className='daisy-btn daisy-btn-ghost h-auto'>
            <LogoTheMan />
          </Link>
        </div>

        <div>
          <div className='daisy-dropdown daisy-dropdown-bottom daisy-dropdown-end daisy-dropdown-hover'>
            <button
              tabIndex={0}
              role='button'
              className='daisy-btn daisy-btn-square daisy-btn-ghost'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block h-5 w-5 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                ></path>
              </svg>
            </button>

            <ul
              tabIndex={0}
              className='daisy-dropdown-content daisy-menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'
            >
              <li>
                <a className='daisy-btn daisy-btn-ghost'>Será adicionado em breve</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
