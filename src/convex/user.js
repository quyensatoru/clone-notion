import {mutation, query} from "./_generated/server";

export const getCurrentUser = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity(); // đọc JWT đã xác thực
        if (!identity) throw new Error("Not authenticated");

        return await ctx.db
            .query("users")
            .filter((q) => q.eq(q.field("email"), identity.email))
            .collect();
    },
});

export const createUser = mutation({
    args: {},
    async handler(ctx) {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error("Not authenticated");

        const existing = await ctx.db
            .query("users")
            .withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier))
            .unique();

        if (existing) {
            if (existing.name !== identity.name) {
                await ctx.db.patch(existing._id, { name: identity.name });
            }
            return existing._id;
        }

        console.log("identity: ", identity);
        return await ctx.db.insert("users", {
            name: identity.name ?? "Anonymous",
            email: identity.email,
            picture: identity.pictureUrl ?? "",
            tokenIdentifier: identity.tokenIdentifier,
        });
    },
});
