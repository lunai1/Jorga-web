function checkTranslation (id, answer) {
  console.log(id);
  if (document.getElementById(id).value.toLowerCase() == answer.toLowerCase())  window.location.href = 'Correct.html'; else alert('Try again!');
}
