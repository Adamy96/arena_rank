"use server";

export async function register(gameName: string, tagLine: string) {
  if (!tagLine || !gameName) {
    throw new Error("tagLine e gameName são obrigatórios");
  }

  try {
    const apiUrl = `https://arenaapi.zapto.org:3002/api/Player/register?tagLine=${tagLine}&gameName=${gameName}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return { status: 404 };
      }

      if (response.status === 400) {
        return { status: 400 };
      }
      return { status: 500 };
    }

    const data = await response.json();
    return { status: 200, ...data };
  } catch (error) {
    console.log("catch error:", error);
    throw new Error(`Erro ao tentar registrar o jogador ${error}`);
  }
}
