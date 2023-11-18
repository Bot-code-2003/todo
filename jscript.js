const inputBox = $("#input-box");
const list = $(".list");

function addTask() {
  if (inputBox.val() === "") {
    alert("You must write something");
  } else {
    let li = $("<li></li>").html(inputBox.val());
    list.append(li);
    let span = $("<span></span>").html("\u00d7");
    li.append(span);
  }
  inputBox.val("");
  saveData();
}

inputBox.keypress(function (e) {
  if (e.which === 13) {
    addTask();
  }
});

$(document).on("click", "li", function () {
  $(this).toggleClass("checked");
  saveData();
});

$(document).on("click", "span", function () {
  $(this).parent().remove();
  saveData();
});

function saveData() {
  localStorage.setItem("data", $(".list").html());
}

function getData() {
  $(".list").html(localStorage.getItem("data"));
}

getData();
