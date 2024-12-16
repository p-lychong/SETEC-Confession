const token = '7843229922:AAGGqwMiiFsdanSs26o34M0u3LuAznaDZyg';
const group_id = '-4537348553';

const form = document.getElementById('form-telegram');


const sendMessage = (text) => {

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "chat_id": group_id,
      "text": text,
    })
  }).then(res => {
    if(!res.ok) {
      throw new Error(res.statusText, res.status, res.url);
    }
    return res.json();
  }).then(res => {
    console.log(res);
    alert('Pesan Berhasil Terkirim');
  }).catch(err => {
    console.log(err);
    alert('Error: Gagal Mengirim Pesan');
  });
}

form.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  let text = '';

  for(const [key, val] of formData) {
    text += `\n\n${key}:\n${val}`;
  }

  text = text.replace('\n\n', '');

  sendMessage(text);
}

let img = document.getElementById('img');
let input = document.getElementById('input');

input.onchange = (e) => {
  if (input.files[0])
    img.src = URL.createObjectURL(input.files[0]);
};

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})


let popup = document.getElementById("popup")

function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}



// const token = '7843229922:AAGGqwMiiFsdanSs26o34M0u3LuAznaDZyg';
// const chatId = '20240817235409';
// const textMessage = 'this is test msg to test the chatbot';

// const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(textMessage)}`;

// fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         alert('Comment sent successfully!');
//         document.getElementById('commentText').value = '';
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });