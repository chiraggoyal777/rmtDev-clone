import { ReactNode, createContext } from "react";
import { useActiveId } from "../hooks/useActiveId";
import { TJobItemId } from "../lib/types";

type ActiveIdContextType = { activeId: TJobItemId | null };

export const ActiveIdContext = createContext<ActiveIdContextType | null>(null);

export default function ActiveIdContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const activeId = useActiveId();

  return (
    <ActiveIdContext.Provider value={{ activeId }}>
      {children}
    </ActiveIdContext.Provider>
  );
}
