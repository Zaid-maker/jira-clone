import { createAdminClient } from "@/lib/appwrite";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { ID } from "node-appwrite";
import { AUTH_COOKIE } from "../constants";
import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    console.log({ email, password });

    return c.json({
      email,
      password,
    });
  })
  .post("/register", zValidator("json", registerSchema), async (c) => {
    const { name, email, password } = c.req.valid("json");

    const { account } = await createAdminClient();
    const user = await account.create(ID.unique(), email, password, name);

    const session = await account.createEmailPasswordSession(email, password);

    setCookie(c, AUTH_COOKIE, session.secret, {
      path: "/", // all routes
      httpOnly: true, // don't allow javascript access
      secure: true, // only send over https
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return c.json({
      data: user,
    });
  });

export default app;
