import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {SlashCommandExtension} from "./slashCommand";
import "../../assets/css/editor.css";

export default function Editor() {
    const editor = useEditor({
        extensions: [StarterKit,SlashCommandExtension],
        content: '<div>Gõ “/” để mở menu</div>',
    });

    if(!editor) return null;

    return (
        <div className="tiptap-editor">
            <EditorContent editor={editor} className="tiptap-content" />
        </div>
    )
}
