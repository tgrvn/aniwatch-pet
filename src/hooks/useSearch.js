const { useMemo } = require("react");

export function useSearch(data, querry) {
  const filteredData = useMemo(() => {
    if (!querry) return data;

    return data.filter((o) => o.toLowerCase().includes(querry.toLowerCase()));
  }, [data, querry]);

  return filteredData;
}
