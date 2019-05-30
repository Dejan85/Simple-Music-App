class UI {
  static dom = () => {
    const sound = [...document.querySelectorAll(".pads")];
    const visual = document.querySelector(".visual");
    const bubble = document.createElement("div");

    return { sound, visual, bubble };
  };
}
