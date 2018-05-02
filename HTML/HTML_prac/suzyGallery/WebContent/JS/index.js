     var type=0;

     var modelSrc = ["sz01.jpg", "sz02.jpg", "sz03.jpg","sz04.jpg","sz05.jpg","sz06.jpg","sz07.jpg"];

     var dramaSrc = ["sz01.gif", "sz02.gif", "sz03.gif","sz04.gif","sz05.gif","sz06.gif","sz07.gif"];
     var cfSrc = ["sz01.gif", "sz02.gif", "sz03.gif","sz04.gif","sz05.gif","sz06.gif","sz07.gif"];
     var missASrc = ["sz01.gif", "sz02.gif", "sz03.gif","sz04.gif","sz05.gif","sz06.gif","sz07.gif"];
     var lifeSrc = ["sz01.gif", "sz02.gif", "sz03.gif","sz04.gif","sz05.gif","sz06.gif","sz07.gif"];
     var movieSrc = ["sz01.gif", "sz02.gif", "sz03.gif","sz04.gif","sz05.gif","sz06.gif","sz07.gif"];
     var festivalSrc =  ["sz01.gif", "sz02.gif", "sz03.gif","sz04.gif","sz05.gif","sz06.gif","sz07.gif"];
     var virietySrc = ["sz01.gif", "sz02.gif", "sz03.gif","sz04.gif","sz05.gif","sz06.gif","sz07.gif"];


    /*0: 모델 화보 , 1: 드라마 , 2: CF , 3:노래 4: 일상, 5: 영화, 6: 행사, 7: 예능*/
     var videoSrc=[
         "https://www.youtube.com/embed/L8FkJaL_ZEw?autoplay=1&loop=20&rel=0",
          "https://www.youtube.com/embed/PYwbMfH5GYs?&autoplay=1&loop=20&rel=0",
         "https://www.youtube.com/embed/5dnEnOesxxk?&autoplay=1&loop=20&rel=0",
         "https://www.youtube.com/embed/WfYgbFBFe1E?autoplay=1&loop=20&rel=0",
         "https://www.youtube.com/embed/2iNybOwhei8?autoplay=1&loop=20&rel=0",
         "https://www.youtube.com/embed/qj3v-FXhVmY?autoplay=1&loop=20&rel=0",
         "https://www.youtube.com/embed/R1qAx5_l0Go?autoplay=1&loop=20&rel=0",
         "https://www.youtube.com/embed/3CHD9B8GSo4?autoplay=1&loop=20&rel=0"
    ];
    function suzyModel(a)
     {
         window.scrollTo(0, -10000);
         type =a;
         var textA = "";
         switch(a)
         {
             case 1: textA="수지 화보"; break;
             case 2: textA="수지 드라마"; break;
             case 3: textA="수지 CF"; break;
             case 4: textA="수지 노래"; break;
             case 5: textA="수지 일상"; break;
             case 6: textA="수지 영화"; break;
             case 7: textA="수지 행사"; break;
             case 8: textA="수지 예능"; break;
         }
         document.getElementById("contentTop").style.display = "block";
         document.getElementById("galleyTitle").innerHTML=textA;
         b =0;
         choiceImage(1);

     }
     function closeGallery()
     {
         document.getElementById("contentTop").style.display = "none";
//             document.getElementById("suzyVideo").src = videoSrc[3]; 
     }
     var b=0;
     function choiceImage(val)
     {
         var dir="";
         var arr=[];
         switch(type)
         {
             case 1: dir="model"; 
                 arr=modelSrc; 
                 break;
             case 2: dir="drama";  
                 arr=dramaSrc; 
                 break;
             case 3: dir="cf"; 
                  arr=cfSrc; 
                 break;
             case 4: dir="missA"; 
                  arr=missASrc; 
                 break;
             case 5: dir="life"; 
                  arr=lifeSrc; 
                 break;
             case 6: dir="movie"; 
                  arr=movieSrc; 
                 break;
             case 7: dir="festival"; 
                  arr=festivalSrc; 
                 break;
             case 8: dir="viriaty"; 
                  arr=virietySrc; 
                 break;
         }             
         document.getElementById("gallery01").src = "img/"+dir+"/" + arr[b];
         b+=val;
         if(arr.length<=b || b<1)
         {
             b=0;
         }
     }

     function changeVedio()
     {             
         document.getElementById("suzyVideo").src = videoSrc[type-1]; 
         closeGallery();
         window.scrollTo(0, 5000);
     }