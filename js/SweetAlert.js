 const button2 = document.querySelector('.yes');
        
        button2.addEventListener('click', () => {
            Swal.fire({
               
                html:
                    '<div class="container-yes"> <h2>Graciaaaas</h2> <div class="container-img"><img class="img-love" src="https://scontent.fpiu2-2.fna.fbcdn.net/v/t1.6435-9/95303710_101101704933102_1942279958957129728_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=973b4a&_nc_ohc=zkkYaXaeRjwAX816dqi&_nc_ht=scontent.fpiu2-2.fna&oh=00_AT8k_xPxHnM-XaGwyxNvOlqGWm-lePSq8gL-CChKhqHdKg&oe=61EAEDF1" alt=""> </div> <p>Voy a ser muy feliz con eso</p></div>',
              
              
                confirmButtonText: `Aceptar`,
                
                    
            });
              
        })

        
        const button1 = document.querySelector('.no');
        
        button1.addEventListener('click', ()=> {
            width = window.innerWidth - 150;
            height = window.innerHeight - 150;

            newWidth = (Math.random() * width);
            newHeight = (Math.random() * height);

            document.getElementById('btnNo').style.position = "absolute";
            document.getElementById('btnNo').style.left = newWidth + "px";
            document.getElementById('btnNo').style.top = newHeight + "px";
        })
