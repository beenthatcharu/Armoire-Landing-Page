import Image from 'next/image';

export default function Logo() {
  return (
    <a href="#" className="flex items-center justify-center">
      <Image
        src="https://res.cloudinary.com/demfgmwjk/image/upload/v1775196854/Armoire_logo-01_zds0id.png"
        alt="AluEmpire Logo"
        width={225}
        height={50}
        priority
        className="h-12 w-auto"
      />
    </a>
  );
}
