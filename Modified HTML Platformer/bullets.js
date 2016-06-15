var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var Bullet = function(x, y, moveRight)
{
    this.image = document.createElement("img");
    this.image.src = "bullet.png";
    // this.sprite = new Sprite("bullet.png");
    // this.sprite.buildAnimation(1, 1, 32, 32, -1, [0]);
    // this.sprite.setAnimationoffset(0, 0, 0);
    // this.sprite.setLoop(0, false);
    
    this.position = new Vector2();
    this.position.Set(x, y);
    this.velocity = new Vector2();
    
    this.moveRight = moveRight;
    if(this.moveRight == true)
    {
        this.velocity.Set(MAXDX *2, 0);
    }
    else
    {
        this.velocity.Set(-MAXDX *2, 0);
    }
}
Bullet.prototype.update = function(deltaTime)
{
    // this.sprite.update();
    this.position.x = Math.floor(this.position.x + (deltaTime * this.velocity.x));
    // console.log(deltaTime)
    // console.log(this.position)
}
Bullet.prototype.draw = function()
{
    var screenX = this.position.x - worldOffsetX;
    // this.sprite.draw(context, screenX, this.position.y);
    context.save();
        context.drawImage(this.image, screenX, this.position.y);
    context.restore();
    // console.log(this.position)
    // console.log(this.velocity.x)
}