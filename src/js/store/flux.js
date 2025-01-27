const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favorites: []
        },
        actions: {
            addFavorite: (item) => {
                const store = getStore();
                if (!store.favorites.some((fav) => fav.uid === item.uid)) {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },
            removeFavorite: (uid) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter((fav) => fav.uid !== uid) });
            }
        }
    };
};
export default getState;
