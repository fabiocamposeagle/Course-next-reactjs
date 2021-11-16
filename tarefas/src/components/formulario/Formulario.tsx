import { useState } from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Tarefa from "../../model/Tarefa"

interface FormularioProps {
    novaTarefaCriada: (tarefa: Tarefa) => void
}

export default function Formulario(props: FormularioProps) {
    const [descricao, setDescricao] = useState('')

    function criarNovaTarefa() {
        if(descricao?.trim().length > 0) {
            const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao)
            props.novaTarefaCriada(novaTarefa)
            setDescricao('')
        }
    }

    return (
        <div className="flex flex-1 justify-center">
            <input type="text" value={descricao}
                placeholder="Informe sua próxima tarefa"
                onChange={e => setDescricao(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? criarNovaTarefa() : false}
                className={`
                    w-1/2 py-2 px-3 rounded-lg border-1 text-2xl
                    focus:outline-none font-bold
                    focus:ring-2 focus:ring-black-600
                `}
            />
            <button onClick={criarNovaTarefa} className={`
                ml-3 px-5 py-4 focus:outline-none rounded-lg
                bg-blue-300 text-white text-xl focus:ring-black-600
            `}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}