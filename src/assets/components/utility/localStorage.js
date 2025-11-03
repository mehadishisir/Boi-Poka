import { toast } from "react-toastify";

const getBookData = () => {
  const storeBook = localStorage.getItem("rading-list");
  if (storeBook) {
    const storeBookData = JSON.parse(storeBook);
    return storeBookData;
  } else {
    return [];
  }
};

const addToLocalstorage = (id) => {
  const storeBookData = getBookData();
  if (storeBookData.includes(id)) {
    toast.info("Book already marked as read", {
      position: "top-center",
    });
  } else {
    storeBookData.push(id);
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("rading-list", data);
  }
};
export { addToLocalstorage, getBookData };
