import { Box, Heading } from "@radix-ui/themes";
import {SignInButton, SignedOut} from "@clerk/clerk-react"
export default function Landing() {
    console.log('heheh')
    return(
        <Box maxWidth="100vw" height="100vh" className="flex justify-center items-center">
            <Box maxWidth="360px" className="text-center flex flex-col gap-2">
                <Heading size="7" textAlign="left">
                    Your idea, Documents  & Plans. Unified. Welcome to <div className="underline">Notion</div>
                </Heading>
                <div>Notion is the connected workspace where better, faster and intelligence work happens</div>
                <div>
                    <SignedOut>
                        <SignInButton appearance={{ captcha: true }} mode={'modal'}/>
                    </SignedOut>
                </div>
            </Box>
        </Box>
    )
}