import { Extension } from "@tiptap/core"
import Suggestion from "@tiptap/suggestion"
import tippy from "tippy.js"
import { ReactRenderer } from "@tiptap/react"
import CommandMenu from "./slashMenu"

const COMMANDS = [
    {
        title: 'Heading 1',
        icon: 'H1',
        // ❶ xoá chuỗi `/…`, ❷ chuyển block, ❸ chèn khoảng trắng để có chỗ gõ
        command: ({ editor, range }) =>
            editor
                .chain()
                .focus()                      // trả focus  :contentReference[oaicite:1]{index=1}
                .deleteRange(range)           // xoá trigger  :contentReference[oaicite:2]{index=2}
                .setNode('heading', { level: 1 })
                .insertContent(' ')           // để con trỏ nằm trong heading
                .run(),
    },
    {
        title: 'Bullet List',
        icon: '•',
        command: ({ editor, range }) =>
            editor.chain().focus().deleteRange(range).toggleBulletList().run(),
    },
    // … các lệnh khác
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
                editor: this.editor,               // ← FIXED
                ...this.options.suggestion,
            }),
        ]
    },
})
