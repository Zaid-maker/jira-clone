import "server-only";

import { Account, Client } from "node-appwrite";

/**
 * Creates an instance of the Appwrite client that can be used to perform
 * administrative actions (i.e. actions that don't require authentication
 * as a user).
 *
 * @returns An object with an `account` property that is an instance of the
 *          Account service.
 */
export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    /**
     * An instance of the Account service.
     *
     * @remarks
     * The Account service allows you to manage the current user session and
     * account information.
     */
    get account() {
      return new Account(client);
    },
  };
}
