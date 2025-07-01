import { useEffect, useState } from "react";
import { useConvexAuth, useMutation } from "convex/react";
import { useUser } from "@clerk/clerk-react";
import { api } from "../convex/_generated/api"

export function useAuth() {
    const { isLoading, isAuthenticated } = useConvexAuth();
    const { user } = useUser();
    const [userId, setUserId] = useState(null);

    const userCreate = useMutation(api.user.createUser);

    useEffect(() => {
        if (!isAuthenticated) return;

        (async () => {
            const id = await userCreate();
            setUserId(id);
        })();

        return () => setUserId(null);
    }, [isAuthenticated, userCreate, user?.id]);

    return {
        isLoading: isLoading || (isAuthenticated && userId === null),
        isAuthenticated: isAuthenticated && userId !== null,
    };
}
