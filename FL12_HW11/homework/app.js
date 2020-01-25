const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here

function renderFiles(file, parentNode){
  file.forEach(element => {
    if (element.folder) {
      let folder = createFolder(element);
      parentNode.append(folder);
      if (element.children) {
        renderFiles(element.children, folder);
      } else {
        renderFiles([{folder: false, title: 'Folder is empty', empty: true}], folder)
      }
    }else{
      parentNode.append(createFile(element));
    }
  });
}

function createFolder(element){
  let folder = document.createElement('ul');
  folder.classList.add('closed');
  folder.innerHTML = `
  <li>
    <i class="material-icons folder">folder</i>
    ${element.title}
  </li>
  `;

  return folder;
}

function createFile(element){
  let file = document.createElement('li');
  if (!element.empty) {
    file.classList.add('padding-left');
    file.innerHTML = `
      <i class="material-icons file">insert_drive_file</i>
      ${element.title}
    `; 
  } else {
    file.classList.add('empty');
    file.textContent = element.title;
  }

  return file;
}

function closeFolder(folder){
  folder.classList.add('closed');
  folder.children[0].children[0].innerHTML = 'folder';
  
}

function openFolder(folder){
  folder.classList.remove('closed');
  folder.children[0].children[0].innerHTML = 'folder_open';
}

renderFiles(structure, rootNode);

Array.from(document.querySelectorAll('ul > li:first-of-type')).forEach(list => {
  list.addEventListener('click', () => {
    let parent = list.parentNode;
    parent.getAttribute('class') === 'closed' ? openFolder(parent) : closeFolder(parent);
  });
})