import {defineSchema, defineTable} from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    pages: defineTable({
        title: v.string(),
    }),

    users: defineTable({
        name: v.string(),
        email: v.string(),
        picture: v.string(),
        tokenIdentifier: v.string(),
    }).index("by_token", ["tokenIdentifier"]),

})