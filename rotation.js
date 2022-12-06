AFRAME.registerComponent("island-rotation",{
    schema: {
        speedOfRotation:{type:"number",default:0}
    },
    init: function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="ArrowRight"){
                if(this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation += 0.1
                }
                
            }

            if(e.key==="ArrowLeft"){
                if(this.data.speedOfRotation > -0.1){
                    this.data.speedOfRotation -= 0.1
                }
                
            }
        })
    },
    tick: function(){
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation
        this.el.setAttribute("rotation",{
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z
        })
    }
})

AFRAME.registerComponent("scuba-rotation",{
    schema: {
        speedOfRotation:{type:"number",default:0},
        speedOfAscent:{type:"number",default:0}
    },
    init: function(){
        window.addEventListener("keydown",(e)=>{
           this.data.speedOfRotation=this.data.el.getAttribute("rotation")
           this.data.speedOfAscent=this.data.el.getAttribute("position")

           var scubaRotation=this.data.speedOfRotation
           var scubaPosition=this.data.speedOfAscent

           if(e.key==="ArrowRight"){
            if(scubaRotation.x < 10){
               scubaRotation.x += 0.5
               this.el.setAttribute("rotation",scubaRotation)

            }
        }
        if(e.key==="ArrowLeft"){
            if(scubaRotation.x > -10){
               scubaRotation.x -= 0.5
               this.el.setAttribute("rotation",scubaRotation)
            }
        }
        if(e.key==="ArrowUp"){
            if(scubaRotation.z < 20){
               scubaRotation.z += 0.5
               this.el.setAttribute("rotation",scubaRotation)

            }
            if(scubaPosition.y < 2){
                scubaPosition.y +=0.01
                this.el.setAttribute("position",scubaPosition)
            }
        }

        if(e.key==="ArrowDown"){
            if(scubaRotation.z > -10){
               scubaRotation.z -= 0.5
               this.el.setAttribute("rotation",scubaRotation)
            }
            if(scubaPosition.y > -2){
                scubaPosition.y -=0.01
                this.el.setAttribute("position",scubaPosition)
            }
        }
        })
    }
})