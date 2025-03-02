const slider = document.querySelector(".slider"),
firstImg = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".Logo-section i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 350;

arrowIcons.forEach(icon =>{
    icon.addEventListener("click", () =>{
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
})

const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    slider.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
     slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    slider.classList.remove("dragging");
}


slider.addEventListener("mouseup", dragStart)
slider.addEventListener("mousemove", dragging)
document.addEventListener("mousedown", dragStop)