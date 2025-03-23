const userUtils = {
  getNickname: (text: string) => text.split("#")[0] || "",
  getHashtag: (text: string) => text.split("#")[1] || "",
};

export default userUtils;
