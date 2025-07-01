import {Container, Section} from "@radix-ui/themes";
import Tiptap from "../../components/editor/titptap";
export default function Page() {
    return(
        <div className="w-full h-full">
            <Container size="1">
                <Section size="1">
                    <Tiptap />
                </Section>
            </Container>
        </div>
    )
}