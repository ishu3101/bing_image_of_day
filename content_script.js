var baseurl = "https://www.bing.com";
var url = baseurl +"/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US";
console.log(url); 

fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    image_url = data.images[0].url
    console.log(image_url);

    bing_image_of_the_day_url = baseurl + image_url;
    console.log(bing_image_of_the_day_url);

    const el = document.getElementById("bing")
    el.src = bing_image_of_the_day_url;
})