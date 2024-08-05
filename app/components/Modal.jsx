export default function Modal({ children }) {
  return (
    <>
      <div onClick={() => document.getElementById('my_modal_1').showModal()}>
        {children}
      </div>

      <dialog id='my_modal_1' className='daisy-modal'>
        <div className='daisy-modal-box'>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>
            Press ESC key or click the button below to close
          </p>
          <div className='daisy-modal-action'>
            <form method='dialog'>
              <button className='daisy-btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
