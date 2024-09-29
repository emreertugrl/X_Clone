import { API } from "./api.js";
import { getLocal, removeLocal } from "./helper.js";
import { mainEle, renderLoader, renderTimeLine } from "./ui.js";

const user = getLocal("user");
//
const api = new API();

renderLoader(mainEle.tweetsarea);
document.addEventListener("DOMContentLoaded", async () => {
  const data = await api.fetchData("/timeline.php", "screenname", user.profile);
  //   console.log(data);
  renderTimeLine(user, data.timeline, mainEle.tweetsarea);
});

// çıkış yap fonksiyonu
mainEle.logoutBtn.addEventListener("click", () => {
  removeLocal("user");
  window.location = "/auth.html";
});
