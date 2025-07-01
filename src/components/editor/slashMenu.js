import React from 'react'
import { Command } from 'cmdk'

export default function CommandMenu(props) {
    return (
        <Command label="Slash commands" className="cmdk-root p-2 bg-white dark:bg-[#333] shadow-lg rounded-lg w-72">
            <Command.Input
                className="cmdk-input text-black w-full px-3 py-2 rounded border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type a command…"
                autoFocus={true}
            />
            <Command.List className="cmdk-list max-h-60 overflow-auto py-1">
                {props?.items.length ? props.items.map((item, i) => (
                    <Command.Item
                        key={i}
                        onSelect={() => {
                            item.command(props)
                            props.command(props)
                        }}
                        className="cmdk-item flex items-center px-3 py-2 rounded cursor-pointer aria-selected:bg-blue-100 aria-selected:text-blue-800"
                    >
                        <span className="w-6 text-center text-gray-600">{item.icon}</span>
                        <div className="ml-2">
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                    </Command.Item>
                )) : (
                    <Command.Empty className="cmdk-empty px-3 py-2 text-gray-500">No results</Command.Empty>
                )}
            </Command.List>
        </Command>
    )
}
