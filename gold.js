class Gold{
    x;
    y;
    width;
    height;
    src;
    constructor(x,y,width,height,src) {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.src=src;
    }
    get x(){
        return this.x;
    }
    set x(value){
        this.x=value;
    }
    get y(){
        return this.y;
    }
    set y(value){
        this.y=value;
    }
    get width(){
        return this.width;
    }
    set width(value){
        this.width=value;
    }
    get height(){
        return this.height;
    }
    set height(value){
        this.height=value;
    }
    get src(){
        return this.src;
    }
    set src(value){
        this.src=value;
    }
    drawGold(ctx){
        let image=new Image();
        image.src=this.src;
        ctx.drawImage(image,this.x,this.y,this.width,this.height)
    }
}