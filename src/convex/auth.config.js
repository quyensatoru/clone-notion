export default {
    providers: [
        {
            domain: process.env.REACT_APP_CLERK_FRONTEND_API_URL,
            applicationID: "convex",
        },
    ],
};
