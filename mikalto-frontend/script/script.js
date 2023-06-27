const bgImg = document.querySelector(".hero-section");

const welcomeImages = document.querySelectorAll(".welcome-right-images");

const roomImages = document.querySelectorAll(".room-images");
const standardRoomPrice = document.querySelector(".standard-room-price");
const standardRoomBed = document.querySelector(".standard-room-bed");
const standardRoomCapacity = document.querySelector(".standard-room-capacity");
const standardRoomSize = document.querySelector(".standard-room-size");
const standardRoomView = document.querySelector(".standard-room-view");

const deluxRoomPrice = document.querySelector(".delux-room-price");
const deluxRoomBed = document.querySelector(".delux-room-bed");
const deluxRoomCapacity = document.querySelector(".delux-room-capacity");
const deluxRoomSize = document.querySelector(".delux-room-size");
const deluxRoomView = document.querySelector(".delux-room-view");

const premiumRoomPrice = document.querySelector(".premium-room-price");
const premiumRoomBed = document.querySelector(".premium-room-bed");
const premiumRoomCapacity = document.querySelector(".premium-room-capacity");
const premiumRoomSize = document.querySelector(".premium-room-size");
const premiumRoomView = document.querySelector(".premium-room-view");

const activiteImages = document.querySelectorAll(".activite-img");

const helloBackgroundImage = document.querySelector(".hello-section");

const heroForm = document.querySelector(".hero-form");

async function getHeroData() {
    try {
        let response = await fetch(`http://localhost:5600/pageBanner`).then((response) => response.json());
        bgImg.style.background = `url(${response.data.heroLeftSection.heroBackground})`;
    } catch (error) {
        console.log(error);
    }
}

getHeroData();

async function getHomeStayData() {
    try {
        let response = await fetch(`http://localhost:5600/welcome`).then((response) => response.json());
        let i = 0;
        welcomeImages.forEach((element) => {
            element.src = response.data.welcomeRightSection.urls[i];
            i++;
        });
    } catch (error) {
        console.log(error);
    }
}

getHomeStayData();

async function getShowRoomData() {
    try {
        let response = await fetch(`http://localhost:5600/showRooms`).then((response) => response.json());
        let i = 0;
        roomImages.forEach((element) => {
            element.src = response.data.roomRightSection.urls[i];
            i++;
        });
        standardRoomPrice.innerHTML = ` ${response.data.roomLeftsection.standardRoom.price} `;
        standardRoomBed.innerHTML = `${response.data.roomLeftsection.standardRoom.bed}`;
        standardRoomCapacity.innerHTML = `${response.data.roomLeftsection.standardRoom.capacity}`;
        standardRoomSize.innerHTML = `${response.data.roomLeftsection.standardRoom.roomSize}`;
        standardRoomView.innerHTML = `${response.data.roomLeftsection.standardRoom.view}`;

        deluxRoomPrice.innerHTML = ` ${response.data.roomLeftsection.deluxRoom.price} `;
        deluxRoomBed.innerHTML = `${response.data.roomLeftsection.deluxRoom.bed}`;
        deluxRoomCapacity.innerHTML = `${response.data.roomLeftsection.deluxRoom.capacity}`;
        deluxRoomSize.innerHTML = `${response.data.roomLeftsection.deluxRoom.roomSize}`;
        deluxRoomView.innerHTML = `${response.data.roomLeftsection.deluxRoom.view}`;

        premiumRoomPrice.innerHTML = ` ${response.data.roomLeftsection.premiumRoom.price} `;
        premiumRoomBed.innerHTML = `${response.data.roomLeftsection.premiumRoom.bed}`;
        premiumRoomCapacity.innerHTML = `${response.data.roomLeftsection.premiumRoom.capacity}`;
        premiumRoomSize.innerHTML = `${response.data.roomLeftsection.premiumRoom.roomSize}`;
        premiumRoomView.innerHTML = `${response.data.roomLeftsection.premiumRoom.view}`;

    } catch (error) {
        console.log(error);
    }
}

getShowRoomData();

async function getActivitiesData() {
    try {
        let response = await fetch(`http://localhost:5600/activities`).then((response) => response.json());
        let i = 0;
        activiteImages.forEach((element) => {
            element.src = response.data[i];
            i++;
        });
    } catch (error) {
        console.log(error);
    }

}
getActivitiesData();

async function getExperienceData() {
    try {
        let response = await fetch(`http://localhost:5600/experience`).then((response) => response.json());
        document.querySelectorAll(".experience-img-1").forEach((element) => {
            element.src = response.data.experienceCards.image1;
        });
        document.querySelectorAll(".experience-img-2").forEach((element) => {
            element.src = response.data.experienceCards.image2;
        });
        document.querySelectorAll(".experience-img-3").forEach((element) => {
            element.src = response.data.experienceCards.image3;
        });
        document.querySelectorAll(".experience-img-4").forEach((element) => {
            element.src = response.data.experienceCards.image4;
        });
    } catch (error) {
        console.log(error);
    }
}

getExperienceData();

async function getHelloData() {
    try {
        let response = await fetch(`http://localhost:5600/hello`).then((response) => response.json());
        helloBackgroundImage.style.background = `url(${response.data.BackgroundImage})`;
    } catch (error) {
        console.log(error);
    }
}
getHelloData();

async function getReviewData() {
    try {
        let response = await fetch('http://localhost:5600/review').then((response) => response.json());
        document.querySelector(".first-user-image").src = response.data.reviewCardDetails.firstCard.profileImage;
        document.querySelector(".first-user-name").innerHTML = response.data.reviewCardDetails.firstCard.userName;
        document.querySelector(".first-card-date").innerHTML = response.data.reviewCardDetails.firstCard.date;
        document.querySelector(".first-card-title").innerHTML = response.data.reviewCardDetails.firstCard.reviewHeading;
        document.querySelector(".first-card-detail").innerHTML = response.data.reviewCardDetails.firstCard.reviewData;

        document.querySelector(".second-user-image").src = response.data.reviewCardDetails.secondCard.profileImage;
        document.querySelector(".second-user-name").innerHTML = response.data.reviewCardDetails.secondCard.userName;
        document.querySelector(".second-card-date").innerHTML = response.data.reviewCardDetails.secondCard.date;
        document.querySelector(".second-card-title").innerHTML = response.data.reviewCardDetails.secondCard.reviewHeading;
        document.querySelector(".second-card-detail").innerHTML = response.data.reviewCardDetails.secondCard.reviewData;

        document.querySelector(".third-user-image").src = response.data.reviewCardDetails.thirdCard.profileImage;
        document.querySelector(".third-user-name").innerHTML = response.data.reviewCardDetails.thirdCard.userName;
        document.querySelector(".third-card-date").innerHTML = response.data.reviewCardDetails.thirdCard.date;
        document.querySelector(".third-card-title").innerHTML = response.data.reviewCardDetails.thirdCard.reviewHeading;
        document.querySelector(".third-card-detail").innerHTML = response.data.reviewCardDetails.thirdCard.reviewData;
    } catch (error) {
        console.log(error);
    }
}
getReviewData();

async function getWellnessData() {
    try {
        let response = await fetch(`http://localhost:5600/wellness`).then((response) => response.json());
        document.querySelector(".wellness-first-img").src = response.data.wellnessRightSection.image1;
        document.querySelector(".wellness-second-img").src = response.data.wellnessRightSection.image2;
        document.querySelector(".wellness-third-img").src = response.data.wellnessRightSection.image3;
    } catch (error) {
        console.log(error);
    }
}

getWellnessData();

/*  slider section  */

let flag = 0;

displayData(flag);

const rightBtn = document.querySelectorAll(".right");
const leftBtn = document.querySelectorAll(".left");

rightBtn.forEach(element => {
    element.addEventListener("click", () => {
        let n1 = 1;
        flag = flag + n1;
        displayData(flag);
    });
});

leftBtn.forEach(element => {
    element.addEventListener("click", () => {
        let n1 = 1;
        flag = flag - n1;
        displayData(flag);
    });
});

function displayData(num) {
    let slider = document.getElementsByClassName("slider");

    for (let item of slider) {
        item.style.display = "none";
    }

    if (num >= slider.length) {
        flag = 0;
        num = 0;
    } else if (num < 0) {
        flag = slider.length - 1;
        num = slider.length - 1;
    }
    slider[num].style.display = "block";
}

/* Form Data send to server */

heroForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(heroForm);
    const data = Object.fromEntries(formData);
    fetch(`http://localhost:5600/formData`, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: `id=${Date.now()}&checkInDate=${data.arrive}&checkOutDate=${data.depart
            }&noOfAdults=${data.adult}&noOfchildren=${data.children}`,
    }).then((response) => {
        console.log("Request complete! response:", response);
    }).then((response) => {
        heroForm.arrive.value = "";
    });
});

/* Date disable */

let date = new Date();
let tdate = date.getDate();
let month = date.getMonth() + 1;
if (tdate < 10) {
    tdate = '0' + tdate;
} else if (month < 10) {
    month = '0' + month;
}
let year = date.getUTCFullYear();
let minDate = year + '-' + month + '-' + tdate;
document.getElementById('arrive').setAttribute('min', minDate);
let ydate = tdate + 1;
let maxDate = year + '-' + month + '-' + ydate;
document.getElementById('depart').setAttribute('min', maxDate);