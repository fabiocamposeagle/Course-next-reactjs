import Selecao from './Selecao'

interface ListaItemProps {
    valor: string
    concluido: boolean
    alterarStatus: () => void
}

export default function ListaItem(props: ListaItemProps) {
    const estiloTexto = props.concluido ? 
        'line-through text-gray-300' : 'text-gray-500' 

    return (
        <li onClick={props.alterarStatus} className={`
            text-black-200          
            flex items-center p-3 text-xl
            border-b border-gray-600 cursor-pointer
        `}>
            <Selecao valor={props.concluido} />
            <span className={`font-bold ml-3 ${estiloTexto}`}>
                {props.valor}
            </span>
        </li>
    )
}