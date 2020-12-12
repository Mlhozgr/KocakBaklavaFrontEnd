

    window.onscroll = function () {
        growShrinkLogo()
    };

    function growShrinkLogo() {
        var Logo = document.getElementById("Logo")
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            Logo.style.width = '30px';
        } else {
            Logo.style.width = '60px';
        }
    }

    window.onscroll = function () {
        myFunction()
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }