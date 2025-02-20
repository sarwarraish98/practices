# practices
// basic of the javaScript
<br>
/* component , array and function */


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(https://previews.123rf.com/images/tayo76/tayo761811/tayo76181100014/119884110-beautiful-paddy-field-against-a-background-of-green-mountains-scenery-and-the-beauty-of-nature-far.jpg);
    background-size: cover;
    /* Ensures the image covers the entire area */
    background-repeat: no-repeat;
    /* Prevents the image from repeating */
    /* background-position: center; */
    /* position: absolute; */
min-height: 100vh;

}

.slider-wrapper {
    width: 50%;
   /* height: 500px; */
   /* overflow: hidden; */
    display: flex;
    align-items: center;
    justify-content: center;

    /* background-color: blue; */
    
    /* background-color: red; */
}
.slider{
    position: relative;

    display: flex;
    width: 100%;
    height: 200px;
}
.imgs {
    /* margin: 50px 175px; */
    width: 100%;
    height: 100%;
    align-items: center;
    border-radius: 20px;
    /* box-shadow: 0px 0px 5px 5px red; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    /* padding: 30px 100px; */
}

#slider-nav {
    background-color: white;
    border-radius: 10px;
}
#slider-nav :hover{
    background-color: limegreen;
}
.upper{
    background-color: black;
    width: 100%;
    height: 20px;
}