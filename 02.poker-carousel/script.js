const poker = {

  imgs: [],
  img_index: 0,
  poker_eles: {},
  transform_datas: [
    "rotate(-10deg)",
    "rotate(-6deg) translate(35%, -12%)",
    "rotate(-2deg) translate(65%, -19%)",
    "rotate(2deg) translate(95%, -26%)",
    "rotate(6deg) translate(125%, -23%)",
  ],
  init() {
    for (let i = 0; i < 10; i++) {
      let img = new Image()
      img.src = `./images/photo (${i}).webp`
      this.imgs.push(img)
    }

    this.poker_eles = [...document.getElementsByClassName("poker")]
    this.poker_eles.forEach((obj, index) => {
      obj.nums = index
    });

    this.img_index = this.poker_eles.length
  },
  move(){
    this.poker_eles.forEach((ele) => {
      let nums = ele.nums;
      if(nums + 1 >= this.poker_eles.length){
        nums = 0
        ele.style.transition = ""
        ele.querySelector("img").src = this.imgs[this.img_index].src;
        this.img_index++;
        if(this.img_index >= this.imgs.length){
          this.img_index = 0
        }
      }else{
        nums += 1;
        ele.style.transition = "transform 0.3s ease"

      }
      ele.style.zIndex = nums;
      ele.style.transform = this.transform_datas[nums]
      ele.nums = nums;
    })
  }

}

poker.init()
