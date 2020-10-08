const  mycv = () => {
  const menu = document.getElementById('cv');
  menu.appendChild(document.createElement('a'));
  menu.id = 'anchor-id';
  menu.setAttribute('href', './resume.pdf');
  menu.setAttribute('download', './resume.pdf')
}