const likeUrl = "http://localhost:3000/likes"
class Like {
  constructor(
    user_id
  ) {
    this.user_id = user_id
  }
  static getLikes() {
    document.getElementById("like_button").onclick = () => {
      console.log("like")
    }
  }
}