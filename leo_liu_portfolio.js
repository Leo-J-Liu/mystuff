document.addEventListener("DOMContentLoaded", function() {


    document.getElementById("color-btn").addEventListener("click", function() {
        var topsection = document.getElementById("topsection");
        var computedStyle = window.getComputedStyle(topsection);
        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
          topsection.style.backgroundColor = "rgb(71, 207, 59)";
        } else {
          topsection.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      
        var logoroom = document.getElementById("logoroom");
        computedStyle = window.getComputedStyle(logoroom);
        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
          logoroom.style.backgroundColor = "rgb(247, 244, 238)";
        } else {
          logoroom.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      
        var section1 = document.getElementById("section1");
        computedStyle = window.getComputedStyle(section1);
        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
          section1.style.backgroundColor = "rgb(139, 139, 226)";
        } else {
          section1.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      
        var section1box1 = document.getElementById("section1box1");
        computedStyle = window.getComputedStyle(section1box1);
        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
          section1box1.style.backgroundColor = "rgb(247, 243, 213)";
        } else {
          section1box1.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      
        var section2 = document.getElementById("section2");
        computedStyle = window.getComputedStyle(section2);
        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
          section2.style.backgroundColor = "rgb(241, 129, 129)";
        } else {
          section2.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      
        var section2box1 = document.getElementById("section2box1");
        computedStyle = window.getComputedStyle(section2box1);
        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
          section2box1.style.backgroundColor = "rgb(230, 222, 245)";
        } else {
          section2box1.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      
        var cvs = document.getElementById("cvs");
        computedStyle = window.getComputedStyle(cvs);
        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
          cvs.style.backgroundColor = "rgb(224, 241, 225)";
        } else {
          cvs.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      
        var cvs2 = document.getElementById("cvs2");
        computedStyle = window.getComputedStyle(cvs2);
        if (computedStyle.backgroundColor === "rgba(0, 0, 0, 0)") {
          cvs2.style.backgroundColor = "rgb(232, 239, 243)";
        } else {
          cvs2.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      });




      const workBtn = document.querySelector('#work-btn');
      const aboutSection = document.querySelector('#aboutsection');
      
      workBtn.addEventListener('click', () => {
        window.scrollTo(0, window.innerHeight * 0.73 + aboutSection.getBoundingClientRect().height);
      });

























});



