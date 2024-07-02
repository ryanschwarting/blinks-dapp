/**
 * Solana Actions Example
 */

import {
  ActionPostResponse,
  ACTIONS_CORS_HEADERS,
  createPostResponse,
  MEMO_PROGRAM_ID,
  ActionGetResponse,
  ActionPostRequest,
} from "@solana/actions";
import {
  clusterApiUrl,
  ComputeBudgetProgram,
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";

export const GET = async (req: Request) => {
  const requestUrl = new URL(req.url);

  const payload: ActionGetResponse = {
    title: "Actions Example - Simple On-chain Memo",
    // icon: new URL("/solana_devs.jpg", new URL(req.url).origin).toString(),
    icon: new URL(
      "data:image/png;base64,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",
      requestUrl.origin
    ).toString(),
    description: "Send a message on-chain using a Memo",
    label: "Send Memo",
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

// DO NOT FORGET TO INCLUDE THE `OPTIONS` HTTP METHOD
// THIS WILL ENSURE CORS WORKS FOR BLINKS
export const OPTIONS = GET;

export const POST = async (req: Request) => {
  try {
    const body: ActionPostRequest = await req.json();

    let account: PublicKey;
    try {
      account = new PublicKey(body.account);
    } catch (err) {
      return new Response('Invalid "account" provided', {
        status: 400,
        headers: ACTIONS_CORS_HEADERS,
      });
    }

    const connection = new Connection(
      process.env.SOLANA_RPC! || clusterApiUrl("devnet")
    );

    const transaction = new Transaction().add(
      // note: `createPostResponse` requires at least 1 non-memo instruction
      ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: 1000,
      }),
      new TransactionInstruction({
        programId: new PublicKey(MEMO_PROGRAM_ID),
        data: Buffer.from("this is a simple memo message2", "utf8"),
        keys: [],
      })
    );

    // set the end user as the fee payer
    transaction.feePayer = account;

    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash;

    const payload: ActionPostResponse = await createPostResponse({
      fields: {
        transaction,
        message: "Post this memo on-chain",
      },
      // no additional signers are required for this transaction
      // signers: [],
    });

    return Response.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    console.log(err);
    let message = "An unknown error occurred";
    if (typeof err == "string") message = err;
    return new Response(message, {
      status: 400,
      headers: ACTIONS_CORS_HEADERS,
    });
  }
};
