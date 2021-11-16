import Title from './Title'
import BotaoAlternarTema from './BotaoAlternarTema'
import useAppData from '../../data/hook/useAppData'
import AvatarUsuario from './AvatarUsuario'

interface HeaderProps {
    titulo: string
    subtitle: string
}

export default function Header(props: HeaderProps) {
    const { tema, alternarTema } = useAppData()

    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitle={props.subtitle} />
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
                <AvatarUsuario className="ml-3" />
            </div>
        </div>
    )
}