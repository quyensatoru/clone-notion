import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { Home, Inbox, Search, ChevronDown, Pencil } from 'lucide-react'
import { Avatar } from "radix-ui";

export default function NavigateBar() {
    return (
        <div className="h-screen w-64 bg-[#1e1e1e] text-white p-4 flex flex-col gap-4 border-r border-[#2a2a2a]">
            {/* Workspace Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 text-xs bg-gray-600">G</Avatar>
                    <span className="text-sm font-medium">Gojo Quyen's Notion</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
                <Pencil className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>

            {/* Menu Items */}
            <NavigationMenu orientation="vertical" className="flex flex-col gap-2">
                <NavigationMenuList className="flex flex-col gap-1">
                    <NavigationMenuItem className="flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer">
                        <Search className="w-4 h-4" /> Search
                    </NavigationMenuItem>
                    <NavigationMenuItem className="flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer">
                        <Home className="w-4 h-4" /> Home
                    </NavigationMenuItem>
                    <NavigationMenuItem className="flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer">
                        <Inbox className="w-4 h-4" /> Inbox
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Private section */}
            <div className="mt-4">
                <p className="text-xs text-gray-500 uppercase mb-1">Private</p>
                <div className="flex flex-col gap-1">
                    {['Project Planner', 'Welcome to Notion!', 'Weekly To-do List', 'Reading List'].map((item) => (
                        <span
                            key={item}
                            className="text-sm text-gray-300 hover:text-white cursor-pointer px-2"
                        >
                          {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Shared section */}
            <div className="mt-4">
                <p className="text-xs text-gray-500 uppercase mb-1">Shared</p>
            </div>
        </div>
    )
}