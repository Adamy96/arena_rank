import { revalidateTag } from "next/cache";

const fetchTest = async () => {
  "use server";

  try {
    const response = await fetch(
      "https://67e0f4d958cc6bf78523890d.mockapi.io/teste"
    );
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch {
    throw new Error("Failed to fetch test");
  }
};

const revalidateTeste = async () => {
  "use server";
  await revalidateTag("teste");
};

export { fetchTest, revalidateTeste };
