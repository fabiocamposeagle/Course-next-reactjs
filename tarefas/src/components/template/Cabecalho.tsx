export default function Cabecalho(props) {
 return (
     <div className="flex h-1/3 bg-img-tarefas bg-no-repeat   bg-cover">
         <div className={`
             flex flex-1 h-full justify-center items-center
             bg-gradient-to-r from-gray-200 via-transparent to-black-400
         `}>
             {props.children}
         </div>
     </div>
 )
}