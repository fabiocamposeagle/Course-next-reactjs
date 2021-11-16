import { IconBell, IconHome, IconLogout, IconSettings } from '../Icons'
import MenuItem from './MenuItem'
import Logo from './Logo'

export default function MenuLateral() {
  return (
    <aside
      className={`
          flex flex-col
          bg-gray-200 text:gray-700
          dark:bg-gray-900 
      `}
    >
      <div
        className={`
          flex flex-col items-center justify-center
          bg-gradient-to-r from-indigo-500
          via-blue-200 to-green-500 h-20 w-20
        `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Start" icon={IconHome} />
        <MenuItem url="/settings" text="Settings" icon={IconSettings} />
        <MenuItem url="/notifications" text="Notifications" icon={IconBell} />
      </ul>
      <ul>
        <MenuItem text="Logout" icon={IconLogout}
          onClick={() => console.log('Logout')}
          className={`
            text-indigo-700 dark:text-indigo-400
            hover:bg-indigo-300 hover:text-white
            dark:hover:text-white
        `}
      />
      </ul>
    </aside>
  )
}
