# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Light Cyan: hsl(193, 38%, 86%)
- Neon Green: hsl(150, 100%, 66%)

### Neutral

- Grayish Blue: hsl(217, 19%, 38%)
- Dark Grayish Blue: hsl(217, 19%, 24%)
- Dark Blue: hsl(218, 23%, 16%)

## Typography

### Body Copy

- Font size (quote): 28px

### Font

- Family: [Manrope](https://fonts.google.com/specimen/Manrope)
- Weights: 800


.cover{
    height: 100%;
    width: 100%;
    background-color:  hsl(218, 23%, 16%);
    display: flex;
    justify-content: center;
}
.box{
    height: 18em;
    width: 30em;
    background-color: hsl(217, 19%, 24%);
    border-radius: 13px;
    margin-top: 14%;
    box-shadow: 0px 1px 200px 0px rgba(0, 0, 0, 0.185);
}
.fest{
    color:hsl(150, 100%, 66%) ;
    letter-spacing: 7px;
    font-size: 12px;
    font-weight: 800;
    text-align: center;
    margin-top: 8%;
}
.maintext{
    text-align: center;
    color: hsl(193, 38%, 86%) ;
    font-size: 28px;
    width: 84%;
    margin: auto;
    margin-top: 4%;
    margin-bottom: 6.4%;
}
.line{
    display: flex;
    justify-content: center;
}
.lin{
    width: 80%;
}
.circle{
    height: 56px;
    width: 56px;
    background-color:hsl(150, 100%, 66%) ;
    border-radius: 28px;
    margin: auto;
    margin-top: 16.5%;
}
.circle:hover{
    box-shadow: 1px 1px 34px 4px hsl(150, 100%, 66%) ;
}
.dic{
    margin-left: 28%;
    margin-top: 28%;
}

@media(max-width:576px){
  
}





@media(min-width:900px){

    .box{
        margin-top: 13%;
        width: 550px;
        height: 330px;
    }
.fest{
    margin-top: 8%;
    font-size: medium;
    letter-spacing: 5px;
}
.maintext{
    font-weight: 600;
    font-size: 190%;
    line-height: 40px;
    margin-top: 4%;
}
.circle{
    height: 56px;
    width: 56px;
    border-radius: 63px;
    margin: auto;
    position: absolute;
    left: 48.0%;
    margin-top: 22.1%;
}
}


