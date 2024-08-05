import Image from 'next/image';
import photo from '../../public/monkey-logo.svg';

export default function LogoTheMan() {
  return (
    <Image
      src={photo}
      alt='LOGO'
      sizes='100vw'
      style={{
        width: '50vw',
        height: 'auto',
      }}
    />
  );
}
