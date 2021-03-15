
var lengthOfImg = Array.from(document.querySelectorAll(".header img")),
    placeOfImg = document.getElementById("header"),
    EllementNext = document.getElementById("next"),
    placeOfNum = document.getElementById("num"),
    totalOfImg = document.getElementById("totalOfImg"),
    count = 1,
    EllementPrev = document.getElementById("pre");
console.log(lengthOfImg.length)


var createElementUl = document.createElement("ul");
createElementUl.setAttribute("id", "myUl");

for (let i = 1; i <= lengthOfImg.length; i++) {

    var createElementLi = document.createElement("li");
    createElementLi.setAttribute("data", i);
    createElementLi.appendChild(document.createTextNode(i));
    createElementUl.appendChild(createElementLi);

}
placeOfNum.appendChild(createElementUl)
// createElementUl.firstElementChild.classList.add("activeLi");

var myUl = document.getElementById("myUl"),
    lengthOfLi = Array.from(document.querySelectorAll("#myUl li"));
// console.log(lengthOfLi)

for (let i = 0; i < lengthOfLi.length; i++) {

    lengthOfLi[i].onclick = function () {

        "use strict";
        count = parseInt(this.getAttribute("data"))
        countingSlide()

    }

}
console.log(lengthOfImg)
function NextImgFunction() {

    "use strict";
    if (EllementNext.classList.contains("disable")) {

        return false

    } else {

        count++;
        countingSlide();

    }
}

function previouseImgFunction() {

    "use strict";
    if (EllementPrev.classList.contains("disable")) {

        return false

    } else {

        count--;
        countingSlide();

    }

}

function countingSlide() {

    "use strict";
    totalOfImg.textContent = "slide #" + (count) + " Of " + (lengthOfImg.length)

    rmoveImgLi()

    lengthOfImg[count - 1].classList.add("activeImg")
    myUl.children[count - 1].classList.add("activeLi")

    if (count == 1) {

        EllementPrev.classList.add("disable")

    } else {

        EllementPrev.classList.remove("disable")

    }

    if (count == lengthOfImg.length) {

        EllementNext.classList.add("disable")

    } else {

        EllementNext.classList.remove("disable")

    }

}
countingSlide()

function rmoveImgLi() {

    "use strict";
    lengthOfImg.forEach(function (img) {

        "use strict";
        img.classList.remove("activeImg")

    })

    lengthOfLi.forEach(function (li) {

        "use strict";
        li.classList.remove("activeLi")

    })
}