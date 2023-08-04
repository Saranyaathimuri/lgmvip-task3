let submit = document.getElementById("enroll");

const info = {
    studentname: '',
    email: '',
    phone: '',
    gender: '',
    skillsArr: [],
    city: '',
}

const getData = () => {
    info.studentname = document.getElementById('name').value;
    info.email = document.getElementById('email').value;
    info.phone = document.getElementById('phone').value;
    info.gender = document.querySelector('input[name="selectgender"]:checked').value;
    let skills = document.querySelectorAll('.checkbox:checked');
    info.city = document.getElementById('city').value;

    info.skillsArr = [];
    skills.forEach((item) => {
        info.skillsArr.push(item.value);
    })

    if (localStorage.getItem("infoSection") === null) {
        infoItem = [];
    }
    else {
        infoItem = JSON.parse(localStorage.getItem("infoSection"))
    }
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
}

const showData = () => {
    let card = document.getElementById("card");

    let cards = '';

    let getLocalStorage = localStorage.getItem("infoSection");

    if (getLocalStorage === null) {
        console.log("null");
    }
    else {
        cardDivArr = JSON.parse(getLocalStorage);

        cardDivArr.forEach((item, index) => {

            cards += `<div class="activity">
            <div class="info">
                <p>Name : ${item.studentname}</p>
                <p>Email : ${item.email}</p>
                <p>PhoneNo:${item.phone}</p>
                <p>Gender : ${item.gender}</p>
                <p>Skills : ${item.skillsArr.join(", ")}</p>
                <p>City :${item.city}</p>
                <button onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
        })
    }
    card.innerHTML = cards;
}

const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);

    localStorage.setItem("infoSection", JSON.stringify(getList));
    window.location.reload();
}

showData();

submit.addEventListener(('click'), () => {
    getData();
    showData();
})
 