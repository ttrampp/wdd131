
  const currentDate = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = currentDate.toLocaleDateString('en-US', options);

  document.getElementById('full-date').innerText = fullDate;

 