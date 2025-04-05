import { VFX } from "https://esm.sh/@vfx-js/core";
class ButtonEffect {
  constructor(button) 
  {
    this.vfx = this.vfx = new VFX();
    button.addEventListener("mouseenter", (e) => {
      this.vfx.add(button, { shader: "glitch", overflow: 100 });
    });

    button.addEventListener("mouseleave", (e) => {
      this.vfx.remove(button);
    });

    document.body.style.backgroundColor = "black";

    const bin = document.querySelector("button"); //changed this

    bin.addEventListener("click", () => 
    {
      if (document.body.style.backgroundColor === "black")
      {
        document.body.style.backgroundColor = "pink";
      }
      else if (document.body.style.backgroundColor === "pink")
      {
        document.body.style.backgroundColor = "blue";
      }
      else if (document.body.style.backgroundColor === "blue")
      {
        document.body.style.backgroundColor = "yellow";
      }
      else if (document.body.style.backgroundColor === "yellow")
      {
        document.body.style.backgroundColor = "black";
      }
      
    });


  }
}

document.addEventListener("DOMContentLoaded", () => {
  new ButtonEffect(document.querySelector("button"));
});