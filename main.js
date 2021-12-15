           
var images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7FMlddZpDk9P5Xp1Q_pmVXRpJxui5l7icIQ&usqp=CAU","https://image.shutterstock.com/image-vector/hand-drawing-cartoon-happy-family-260nw-152802056.jpg", "http://www.easy-to-draw.com/wp-content/uploads/How-to-draw-mom-05.jpg" , "https://i.pinimg.com/originals/f0/ca/f9/f0caf9ad93bfea30a46faa27e6ac56ba.jpg", "https://i.pinimg.com/originals/5c/77/73/5c7773c877a0e0cd4da2a3f43bf5afed.jpg", "https://rlv.zcache.com/despicable_me_agnes_fluffy_the_unicorn-r570a7267e01e4d22a2c9aeec266f8309_xvuat_8byvr_704.webp"];
           
var names = ["Family book","Suresh Vashdev Nandwani Nandwani", "Yogeeta Suresh Nandwani Babani", "Sagar Suresh Nandwani Nandwani", "Shayna Suresh Nandwani Nandwani", "Sameera Suresh Nandwani Nandwani"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}