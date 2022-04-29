import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

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
        setItems(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 500)
  });


  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItems(newItem); 
    }catch(error){
      setError(error);
    }
  };
  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage };