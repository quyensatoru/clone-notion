import { Extension } from "@tiptap/core"
import Suggestion from "@tiptap/suggestion"
import tippy from "tippy.js"
import { ReactRenderer } from "@tiptap/react"
import CommandMenu from "./slashMenu"

const COMMANDS = [
    {
        title: 'Heading 1',
        icon: 'H1',
        command: ({ editor, range }) =>
            editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('heading', { level: 1 })
                .insertContent(' ')
                .run(),
    },
    {
        title: 'Heading 2',
        icon: 'H2',
        command: ({ editor, range }) =>
            editor
                .chain()
                .focus()
                .deleteRange(range)
                .setNode('heading', { level: 2 })
                .insertContent(' ')
                .run(),
    },
    {
        title: 'Bullet List',
        icon: '•',
        command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleBulletList().run(),
    },
    {
        title: 'Code',
        icon: '<>',
        command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleCode().run(),
    },
]

export const SlashCommandExtension = Extension.create({
    name: 'slash-command',
    addOptions() {
        return {
            suggestion: {
                char: '/',
                startOfLine: true,
                items: () => COMMANDS,
                render: () => {
                    let popup, reactRenderer
                    return {
                        onStart: props => {
                            reactRenderer = new ReactRenderer(CommandMenu, {
                                props,
                                editor: props.editor,
                            })
                            popup = tippy('body', {
                                getReferenceClientRect: props.clientRect,
                                appendTo: () => document.body,
                                content: reactRenderer.element,
                                showOnCreate: true,
                                interactive: true,
                                trigger: 'manual',
                                placement: 'bottom-start',
                                theme: 'light'
                            })
                        },
                        onUpdate: props => {
                            reactRenderer.updateProps(props)
                            popup[0].setProps({ getReferenceClientRect: props.clientRect })
                        },
                        onKeyDown: props => reactRenderer.ref?.onKeyDown(props),
                        onExit: () => {
                            popup[0].destroy()
                            reactRenderer.destroy()
                        },
                    }
                },
            },
        }
    },
    addProseMirrorPlugins() {
        return [
            Suggestion({
                editor: this.editor,
                ...this.options.suggestion,
            }),
        ]
    },
})
