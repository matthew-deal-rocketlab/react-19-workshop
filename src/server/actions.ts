// server/actions.ts
"use server";

export async function updateName(
  state: any,
  formData: FormData
): Promise<{ name?: string; error?: string }> {
  const name = formData.get("name") as string;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!name || name.length < 1) {
    return { error: "Name must be at least 1 character long" };
  }

  return { name };
}

export async function deliverMessage(message: string) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
