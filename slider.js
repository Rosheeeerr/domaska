let offset=0;//смещение от левого края
const sliderline =document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click',function(){
    offset=offset+350;
    if(offset>1050){
        offset=0;
    }
    sliderline.style.left=-offset+'px'
})
document.querySelector('.slider-prev').addEventListener('click',function(){
    offset=offset-350;
    if(offset<0){
        offset=1050;
    }
    sliderline.style.left=-offset+'px'
})