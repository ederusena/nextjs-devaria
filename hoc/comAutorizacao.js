import { useRouter } from "next/router";

export default function comAutorizacao(Componente) {

  const estaLogado = true;

  return (props) => {
    const router = useRouter();

    if (estaLogado) {
      return <Componente {...props} />
    }

    typeof window !== 'undefined' && router.push('/login');
  }
}