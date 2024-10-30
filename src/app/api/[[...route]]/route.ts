import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";
import workspaces from "@/features/workspaces/server/route";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/health", (c) => c.json({ status: "ok" }));

const routes = app.route("/auth", auth).route("/workspaces", workspaces);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
