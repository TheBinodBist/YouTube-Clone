import Image from "next/image";
import logo from '../../../public/logo.png'

export default function Home() {
  return (
    <div>
    <Image src={logo} width={60} height={40} alt="logo" />
    <p>NewTube</p>
    </div>
   );
}
