import Link from "next/Link";

interface MenuItemProps {
  url?: string
  text: string
  icon: any
  className?: string
  onClick?: (event: any) => void
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <a className={`
            flex flex-col justify-center items-center
            h-20 w-full text-indigo-700 dark:text-gray-200
            ${props.className}
      `}>
            {props.icon}
            <span className={`
                  text-xs font-light text-gray-600
              `}>
                {props.text}
            </span>
      </a>
    )
  }
  return (
    <li onClick={props.onClick} className={`
        hover:bg-gray-100 cursor-pointer
        dark:hover:bg-gray-700
    `}>
        {props.url ? (
           <Link href={props.url}>
                {renderizarLink()}
             </Link>
        ) : (
              renderizarLink()
        )}
    </li>
  )
}