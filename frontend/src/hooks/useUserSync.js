import { useEffect } from "react";
import { syncUser } from "../lib/api";
import { useMutation } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";

// the best way to implement this is by using webhooks
function useUserSync() {
    const { isSignedIn } = useAuth();
    const { user } = useUser();

    const { mutate: syncUserMutation, isPending, isSuccess } = useMutation({
        mutationFn:
            syncUser
    });

    useEffect(() => {
        if (isSignedIn && user && !isPending && !isSuccess) {
            syncUserMutation({
                email: user.primaryEmailAddress?.emailAddress,
                name: user.fullName || user.firstName,
                imageUrl: user.imageUrl,
            });
        }
    }, [isSignedIn, user, syncUserMutation, isPending, isSuccess])

    return { isSignedIn: isSuccess };
};

export default useUserSync;