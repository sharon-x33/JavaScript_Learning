let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue;
  if (!href.includes('://')) continue; 
  if (href.startsWith('http://internal.com')) continue; 
  link.style.color = 'orange';
}