const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

      pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwFields =>{
                if(pwFields.type === "password"){
                    pwFields.type = 'text';

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye")
                    })
                }else{
                    pwFields.type = 'password';

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash")
                    })
                }
            })
        })
      })

var swiper = new Swiper('.swiper-container',{
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        Shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    }
});
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}



