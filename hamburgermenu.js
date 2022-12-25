function updateScreen() {
    const mq = window.matchMedia("(min-width: 768px)");

    if (mq.matches) {
        // window width is at least 768px
        var line = document.getElementsByClassName("line");
        var slider = document.getElementsByClassName("slide-menu")[0];

        line[0].style.opacity = "1";
        line[1].style.transform = "rotate(0deg)";
        line[2].style.marginTop = "5px";
        line[2].style.transform = "rotate(0deg)";
        slider.style.left = "-45%";
    } else {
        // window width is less than 768px
    }
}

function hamburgerOpenClose() {
    var line = document.getElementsByClassName("line");
    var slider = document.getElementsByClassName("slide-menu")[0];
    if (line[0].style.opacity == "0") {
        line[0].style.opacity = "1";
        line[1].style.transform = "rotate(0deg)";
        line[2].style.marginTop = "5px";
        line[2].style.transform = "rotate(0deg)";
        slider.style.left = "-45%";
        //closing all that is opened already.
        var slideMenu = document.getElementsByClassName("slide-menu")[0];
        var ul = slideMenu.firstElementChild;
        var listItems = ul.children;


        for (item of listItems) {

            var len = item.children.length;
            if (len > 1) {
                var a = item.children[0];
                var subUl = item.children[1];
                subUl.style.display = "none";
                a.firstElementChild.style.transform = "rotate(0deg)";
            } else {}
        }
    } else {
        line[0].style.opacity = "0";
        line[1].style.marginTop = "5px";
        line[1].style.transform = "rotate(-45deg)";
        line[2].style.marginTop = "-5px";
        line[2].style.transform = "rotate(45deg)";
        slider.style.left = "0px";



    }

}

function collapse(index) {
    var slideMenu = document.getElementsByClassName("slide-menu")[0];
    var ul = slideMenu.firstElementChild;
    var listItems = ul.children;
    var a = listItems[index].children[0];

    var subUl = listItems[index].children[1];

    subUl.style.display == "block" ? subUl.style.display = "none" : subUl.style.display = "block";
    subUl.style.display == "block" ? a.firstElementChild.style.transform = "rotate(180deg)" : a.firstElementChild.style.transform = "rotate(0deg)";
    var sublistItems = subUl.children;
    for (item of sublistItems) {
        item.firstElementChild.style.paddingLeft = "20px";
        item.firstElementChild.style.backgroundColor = "#212F3D";
    }

}