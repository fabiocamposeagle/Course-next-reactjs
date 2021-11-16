interface ListaBotaoProps {
 selecionado?: boolean
 className?: string
 children: any
 onClick: (evento: any) => void
}

export default function ListaBotao(props: ListaBotaoProps) {
 const borda = props.selecionado ? 
     'border-b-1 border-gray-100' : ''
 return (
     <button onClick={props.onClick} className={`
         text-black-4100 font-black hover:text-black
         focus:outline-none ${borda} ${props.className}
     `}>
         {props.children}
     </button>
 )
}