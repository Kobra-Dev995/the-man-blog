import Image from 'next/image';
import photo from '../../public/photo-default.svg';

export default function ImagePerfil() {
  return (
    <Image
      src={photo}
      alt='LOGO'
      sizes='100vw'
      style={{
        width: '25vw',
        height: 'auto',
      }}
    />
  );
}
