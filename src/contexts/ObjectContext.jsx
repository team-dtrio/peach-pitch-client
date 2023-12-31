import { createContext, useState, useMemo, useCallback } from "react";

const ObjectContext = createContext();

function ObjectProvider({ children }) {
  const [selectedObjectId, setSelectedObjectId] = useState(null);
  const [selectedObjectType, setSelectedObjectType] = useState(null);

  const selectObject = useCallback(
    (id, type) => {
      if (selectedObjectId === id && selectedObjectType === type) {
        setSelectedObjectId(null);
        setSelectedObjectType(null);
      } else {
        setSelectedObjectId(id);
        setSelectedObjectType(type);
      }
    },
    [selectedObjectId, selectedObjectType],
  );

  const deselectObject = useCallback(() => {
    setSelectedObjectId(null);
    setSelectedObjectType(null);
  }, []);

  const value = useMemo(
    () => ({
      selectedObjectId,
      selectedObjectType,
      selectObject,
      deselectObject,
    }),
    [selectedObjectId, selectedObjectType, selectObject, deselectObject],
  );

  return (
    <ObjectContext.Provider value={value}>{children}</ObjectContext.Provider>
  );
}

export { ObjectContext, ObjectProvider };
