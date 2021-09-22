import getHeight from "../helpers/getHeight";

export default class Alert {
  constructor() {
    this.box = document.querySelector(".alert");
    this.text = "";
  }
  getError(err) {
    return err;
  }
  setError(err) {
    return (this.text = err);
  }
  getBoxHeight() {
    return getHeight(this.box);
  }
}
