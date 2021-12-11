let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', function (e) {
  const name = document.getElementById('name').value;
  const link = document.getElementById('link').value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem('users'))
    ? JSON.parse(localStorage.getItem('users'))
    : [];

  user_records.push({
    name: name,
    url: link,
  });
  localStorage.setItem('users', JSON.stringify(user_records));
});

// show item
function showNotes() {
  let notes = localStorage.getItem('users');
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = '';
  notesObj.forEach(function (element, index) {
    console.log(element);

    html += `
         <div class="note">
            <a href=${element.url} target='_blank'>${element.name}</a>
            <button  class="note-btn"><i class="fas fa-trash-alt"></i></button>
         </div>
             `;
  });

  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.style.fontSize = '2rem';
    notesElm.style.color = 'rgb(156, 156, 156)';

    notesElm.innerHTML = `hey copy  url and paste  👆   click 🔥 Add site`;
  }
}
showNotes();

// delete items
const some_function = (inx) => {
  return (e) => {
    window.location.reload();

    let notes = localStorage.getItem('users');
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(inx, 1);
    localStorage.setItem('users', JSON.stringify(notesObj));
    showNotes();
  };
};
var deletebtn = document.querySelectorAll('.note-btn');
deletebtn.forEach((delet, inx) => {
  delet.addEventListener('click', some_function(inx));
});
