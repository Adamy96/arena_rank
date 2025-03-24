import { fetchTest, revalidateTeste } from "@/services";
import { ReactNode, ReactPortal, Key } from "react";

const TestPage = async () => {
  const testData = await fetchTest();

  return (
    <div style={{ color: "white" }}>
      <h1>Test page</h1>
      <button onClick={revalidateTeste}>Revalidate</button>
      {testData?.map(
        (
          item: {
            id:
              | string
              | number
              | bigint
              | boolean
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactPortal
                  | Iterable<ReactNode>
                  | null
                  | undefined
                >
              | null
              | undefined;
          },
          idx: Key | null | undefined
        ) => (
          <p key={idx}>{item.id}</p>
        )
      )}
    </div>
  );
};

export const revalidate = 5;

export default TestPage;
