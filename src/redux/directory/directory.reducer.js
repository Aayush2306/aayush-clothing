const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://static.toiimg.com/thumb.cms?msid=80482427&height=600&width=600",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
