

let imagesData = [{
    photo: "images/Project1.png",
    title: "Toolbox",
    description: "This is the first of many"
},
{
    photo: 'images/Project2.png',
    title: 'Mite Life',
    description: 'A card game about little creatures'
},
{
    photo: 'images/Project3.png',
    title: 'Project#3',
    description: 'An idea basically not even a prototype'
},
{
    photo: 'images/Project4.png',
    title: 'Project#4',
    description: 'A mini card game for 2 on the wild west'
},{
    photo: 'images/Project5.png',
    title: 'The Luck of Selene',
    description: 'A group effort created on BoardGame12 2020'
}]

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
}
let loadTitle = (photoNumber) => {
    $('#title').html(imagesData[photoNumber].title);
}
let loadDescription = (photoNumber) => {
    $('#description').html(imagesData[photoNumber].description);
}
setInterval(function(){
    if (currentPhoto < imagesData.length-1) {
        currentPhoto++;
        loadPhoto(currentPhoto);
        loadTitle(currentPhoto);
        loadDescription(currentPhoto);
    }
    currentPhoto = 0;
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
},5000);

loadPhoto(currentPhoto);
loadTitle(currentPhoto);
loadDescription(currentPhoto);

$('#nextbutton').click(() => {
    if(currentPhoto < imagesData.length-1) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto), loadTitle(currentPhoto), loadDescription(currentPhoto);
}
)

$('#backbutton').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto), loadTitle(currentPhoto), loadDescription(currentPhoto);
}
)



