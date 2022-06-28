import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );

  const { item, loading, error, sincronizedItem } = state;
  //Action Creators
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  };
  const onSuccess = (parsedItem) => {
    dispatch({ type: actionTypes.success, payload: parsedItem });
  };
  const onSave = (saveItem) => {
    dispatch({ type: actionTypes.save, payload: saveItem });
  };
  const onSincronizedItem = () => {
    dispatch({ type: actionTypes.sincronizedItem });
  };
  const onDeleteRender = () => {
    dispatch({ type: actionTypes.deleteRender });
  };

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 500);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };
  const sincronizeItem = () => {
    onSincronizedItem();
  };
  const deleteRenderItems = () => {
    onDeleteRender();
  };
  return {
    deleteRenderItems,
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}
const initialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  sincronizedItem: true,
  item: initialValue,
});
const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronizedItem: "SINCRONIZEDITEM",
  deleteRender: "DELETERENDER",
};
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    sincronizedItem: true,
    item: payload,
    error: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronizedItem]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
  [actionTypes.deleteRender]: {
    ...state,
    item: [],
  },
});
const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
export { useLocalStorage };
