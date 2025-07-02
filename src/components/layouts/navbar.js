import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { Home, Inbox, Search, ChevronDown, Pencil } from 'lucide-react'
import {Avatar, Button} from "@radix-ui/themes"
import {Outlet, useNavigate} from "react-router-dom";
import {useQuery} from "convex/react";
import {api} from "../../convex/_generated/api";

export default function NavigateBar() {
    const users = useQuery(api.user.getCurrentUser);

    const navigate = useNavigate();

    if(!users) {
        return null
    }

    const user = users[0];

    return (
        <div className="flex flex-row bg-white dark:bg-gray-900">
            <div className="h-screen w-60 bg-[#1e1e1e] text-white py-4 px-2 flex flex-col gap-4 border-r border-[#2a2a2a]">
                {/* Workspace Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar fallback={'Q'} size={'3'}/>
                        <span className="text-sm font-medium">{user.name}</span>
                        <ChevronDown className="w-4 h-4 text-gray-400"/>
                    </div>
                    <Pencil className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-200" onClick={() => navigate("/page")}/>
                </div>

                {/* Menu Items */}
                <NavigationMenu orientation="vertical" className="flex flex-col gap-2">
                    <NavigationMenuList className="flex flex-col gap-0">
                        <NavigationMenuItem className="flex items-center gap-2 p-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer">
                            <Search className="w-4 h-4" /> Search
                        </NavigationMenuItem>
                        <NavigationMenuItem className="flex items-center gap-2 p-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer">
                            <Home className="w-4 h-4" /> Home
                        </NavigationMenuItem>
                        <NavigationMenuItem className="flex items-center gap-2 p-2 rounded-md text-sm text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer">
                            <Inbox className="w-4 h-4" /> Inbox
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Private section */}
                <div className="mt-4">
                    <p className="text-xs text-gray-500 uppercase mb-1">Private</p>
                    <div className="flex flex-col gap-0">
                        {['Project Planner', 'Welcome to Notion!', 'Weekly To-do List', 'Reading List'].map((item) => (
                            <div
                                key={item}
                                className="text-sm p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer px-2"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Shared section */}
                <div className="mt-4">
                    <p className="text-xs text-gray-500 uppercase mb-1">Shared</p>
                </div>
            </div>
            <Outlet />
        </div>
    )
}
