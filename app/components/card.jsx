import { useState } from 'react';

export default function Card({ Name, Commented, Email }) {
  // const [pictureUser, setPictureUser] = useState('');
  // console.log(pictureUser);

  return (
    <>
      <div className='daisy-card bg-base-100 w-96 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img src="https://via.placeholder.com/150/92c952" alt="foto" />
          {/* <img src={pictureUser} id='img' className='rounded-xl' /> */}
        </figure>
        <div className='daisy-card-body items-center text-center'>
          <h2 className='card-title'>{Name}</h2>
          <p>{Commented}</p>
          {/* <span>{Email}</span> */}
          <div className='daisy-card-actions'>
            <button className='daisy-btn daisy-btn-primary'>{Email}</button>
            {/* <label htmlFor='inputFile' className='daisy-btn daisy-btn-primary'>
              <span>Editar Foto</span>
            </label>
            <input
              type='file'
              accept='image/*'
              id='inputFile'
              formEncType='multipart/form-data'
              name='image_file'
              className='hidden fixed left-0'
              onChange={function handleCurriculum(e) {
                if (e.target.files && e.target.files[0]) {
                  var reader = new FileReader();
                  reader.onload = async function (event) {
                    //console.log(event.target.result);

                    // let { data, error } = await supabase
                    //   .from('Usuarios_comum')
                    //   .update({ Picture: event.target.result })
                    //   .eq('Email', props.AuthEmail);

                    setPictureUser(event.target.result);
                  };
                  reader.readAsDataURL(e.target.files[0]);
                } else {
                  alert('Erro ao carregar imagem! :(');
                  setPictureUser('/');
                }
              }}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
