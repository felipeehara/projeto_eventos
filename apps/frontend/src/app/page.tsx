import { Pagina } from "@/components/template/Pagina";
import Image from "next/image";
import {Evento} from '@/core'

export default function Home() {
  
  const e: Partial<Evento> = {};

  return (
    <Pagina>
      <div>Inicio</div>
    </Pagina>
  );
}
