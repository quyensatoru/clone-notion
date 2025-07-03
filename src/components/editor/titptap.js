import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder'
import {SlashCommandExtension} from "./slashCommand";
import "../../assets/css/editor.css";
import {useEffect} from "react";

export default function Editor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            SlashCommandExtension,
            Placeholder.configure({
                placeholder: ({ node }) =>
                    node.type.name === 'heading' && node.attrs.level === 1
                        ? 'Add new title'
                        : '',
            }),
        ],
    });

    useEffect(() => {
        if(!editor) return;

        editor.commands.insertContent({
            type: 'heading',
            attrs: { level: 1, class: 'placeholder' },
            content: '',
        })
    }, [editor]);

    if(!editor) return null;

    return (
        <EditorContent editor={editor} className="tiptap-content" />
    )
}
