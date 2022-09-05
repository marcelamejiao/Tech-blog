const logout = async (event, shouldRedirect) => {
  event.preventDefault();
  
  if (shouldRedirect === undefined) {
    shouldRedirect = true;
  }

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    if (shouldRedirect) {
      document.location.replace('/');
    }
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

// Log the user out if idle for 15 minutes
setTimeout(() => {
  logout({}, false);
}, 15 * 60 * 1000);
