import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import Modal from "./modal";

export default function useUrlSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // setParams and removeParams share this timeout, so calling both in quick
  // succession (e.g. setting a filter while also clearing "page") would let
  // the second call cancel the first's pending write. Both accept an extra
  // "also remove/set these keys" argument so combined updates go through a
  // single scheduled write instead of racing each other.
  const removeParams = useCallback(
    (keys: string[], alsoSet: { key: string; value: string }[] = []) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        keys.forEach((key) => params.delete(key));
        alsoSet.forEach(({ key, value }) => params.set(key, value));
        router.replace(`?${params.toString()}`, { scroll: false });
      }, 200);
    },
    [router, searchParams],
  );

  const setParams = useCallback(
    (
      keys: {
        key: string;
        value: string;
      }[],
      alsoRemove: string[] = [],
    ) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        keys.forEach(({ key, value }) => params.set(key, value));
        alsoRemove.forEach((key) => params.delete(key));
        router.replace(`?${params.toString()}`, { scroll: false });
      }, 200);
    },
    [router, searchParams],
  );

  const getParams = useCallback(
    (key: string) => searchParams.get(key),
    [searchParams],
  );

  return { setParams, removeParams, Modal, getParams };
}
