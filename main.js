var images = [ "https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.pinimg.com/474x/fc/77/61/fc7761096fb740e90838586f2a544aec.jpg","https://www.the-arcade.ie/wp-content/uploads/2016/03/8e7454cc14a8afd6b0f57c8eee8e4c20-300x216.jpg","https://i.pinimg.com/originals/01/cf/e9/01cfe9dcc3c6127bffb5211e2860dcd8.jpg", "https://wallpapercave.com/wp/wp5575166.jpg"];
var names = ["Family Book","Father", "Mother", "Sister", "Me"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
