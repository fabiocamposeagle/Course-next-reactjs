import MenuLateral from './MenuLateral'
import Header from './Header'
import Content from './Content'
import ForcarAutenticacao from '../auth/ForcarAutenticacao'
import useAppData from '../../data/hook/useAppData'

interface LayoutProps {
    titulo: string
    surtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useAppData()
    return (
        <ForcarAutenticacao>
            <div className={`${tema} flex h-screen w-screen`}>
                <MenuLateral />
                <div className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-800
            `}>
                    <Header titulo={props.titulo} subtitle={props.surtitle} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </ForcarAutenticacao>
    )
}