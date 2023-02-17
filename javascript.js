window.addEventListener("scroll",function(){
    var navi = document.getElementById("logoimg");
    var arrow = document.getElementById("arrow");
    navi.classList.toggle("sticky",window.scrollY>0);
    arrow.classList.toggle("show",window.scrollY>0);
})
function scrollup(){
    window.scrollTo(0,0);
}
function nevDown(){
    var x = document.getElementById("navT");
    var y = document.getElementById("navbar");
    var z = document.getElementById("navT").getElementsByTagName("li");
    if (x.className === "navT"){
        x.className += " responsive";
        y.className = "responsive";
        for (var i = z.length - 1; i>=0;i--){
            x.appendChild(z[i]);
        }
    }else{
        x.className = "navT";
        y.className = "";
        for (var i = z.length - 1; i>=0;i--){
            x.appendChild(z[i]);
        }
    }
}
var currentTheme = "darkblue_green_white";
function themechange(){
    
    var body = document.getElementById("body");
    var bg_color = getComputedStyle(body);
  if (currentTheme === "darkblue_green_white"){
    body.style.background = "#6E5773";
    body.style.setProperty("--bg-color","#33334d");
    body.style.setProperty("--title-color","white");
    body.style.setProperty("--sec-color","#E83939");
    body.style.setProperty("--text-color","white");
    currentTheme = "darkblue_red_white";
  }else{
      if (currentTheme === "darkblue_red_white"){
//          3366cc
        body.style.background = "#3B3B3B";
        body.style.setProperty("--bg-color","#1D1D1D");
        body.style.setProperty("--sec-color","#B9B9B9");
        body.style.setProperty("--text-color","white");
        currentTheme = "blue_blue_white";
      }else{
        body.style.background = "#404B69";
          body.style.setProperty("--title-color","#DBEDF3");
        body.style.setProperty("--bg-color","#283149");
        body.style.setProperty("--sec-color","#00818A");
        body.style.setProperty("--text-color","white");
        currentTheme = "darkblue_green_white"; 
      }
  }
    
    
}
function swipright(){
    var p = document.getElementById("sliderI");
    var body = document.getElementById("body"); 
    var body_style = getComputedStyle(body);
    var start = body_style.getPropertyValue('--start');
    var end = body_style.getPropertyValue('--end');
    var left = p.style.left;
    switch_color_R();
    if( parseInt(start) === -300 ){
        p.style.transition = " left 0s";
        body.style.setProperty("--start","0%");
         start = body_style.getPropertyValue('--start');
        
    }
        p.style.transition = " left 0.5s";
        body.style.setProperty("--start",parseInt(start) - 100 +"%");
        start = body_style.getPropertyValue('--start');
        setTimeout(()=>{
        if( parseInt(start) === -300 ){
            p.style.transition = " left 0s";
            body.style.setProperty("--start","0%");  
            }
        },500);
}
   


function swipleft(){
    var p = document.getElementById("sliderI");
    var body = document.getElementById("body"); 
    var body_style = getComputedStyle(body);
    var start = body_style.getPropertyValue('--start');
    var left = p.style.left;
    switch_color_l();
     if( parseInt(start) === 0 ){
        p.style.transition = " left 0s";
        body.style.setProperty("--start","-300%");
         start = body_style.getPropertyValue('--start');
        
    }
    
        p.style.transition = " left 0.5s";
        body.style.setProperty("--start",parseInt(start)+ 100 +"%");
        start = body_style.getPropertyValue('--start');
        setTimeout(()=>{
            if( parseInt(start) === 0 ){
                p.style.transition = " left 0s";
                body.style.setProperty("--start","-300%");
                }
        },500);
}
var currentcolor = "red";
function switch_color_l(){
    var color_name = document.getElementById("color_name");
    var color_des = document.getElementById("color_des");
    color_name.style.animation = "anime 500ms";
    color_des.style.animation = "anime 500ms";
    setTimeout(() =>{
        color_name.style.animation = "";
        color_des.style.animation = "";
    },500);
    setTimeout(() =>{
    if(currentcolor === "red"){
        
        color_name.style.color = "aquamarine";
        color_name.textContent = "no man's sky";
        color_des.textContent = "coming from the farthest worlds,colored by the bluest skies,more beautiful than the open seas.";
        currentcolor = "blue";
        
    }
    else{
       if(currentcolor === "blue"){
            color_name.style.color = "black";
            color_name.textContent = "phantom's pain";
           color_des.textContent = "coming from the darkest naights,colored by tortured souls,darker than under the bed.";
            currentcolor = "black";
        }
        else{
            color_name.style.color = "#ff3333";
            color_name.textContent = "Devil May Cry";
            color_des.textContent = "Coming straight from the depths of hell, Colored by demon's blood, approved by Dante him self.";
            currentcolor = "red";
            }
    }
},250);
}
function switch_color_R(){
    var color_name = document.getElementById("color_name");
    var color_des = document.getElementById("color_des");
    color_name.style.animation = "anime 500ms";
    color_des.style.animation = "anime 500ms";
    setTimeout(() =>{
        color_name.style.animation = "";
        color_des.style.animation = "";
    },500);
    setTimeout(() =>{
    if(currentcolor === "red"){
        
            color_name.style.color = "black";
            color_name.textContent = "phantom's pain";
            color_des.textContent = "coming from the darkest naights,colored by tortured souls,darker than under the bed.";
            currentcolor = "black";
        
    }
    else{
       if(currentcolor === "black"){
            color_name.style.color = "aquamarine";
            color_name.textContent = "no man's sky";
           color_des.textContent = "coming from the farthest worlds,colored by the bluest skies,more beautiful than the open seas.";
            currentcolor = "blue";
        }
        else{
            color_name.style.color = "#ff3333";
            color_name.textContent = "Devil May Cry"; 
            color_des.textContent = "Coming straight from the depths of hell, Colored by demon's blood, approved by Dante him self.";
            currentcolor = "red";
            }
    }
},250);
}