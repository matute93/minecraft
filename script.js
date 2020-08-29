let matrix =
    [
        [7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [7, 7, 7, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [7, 7, 7, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 8, 8, 8, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 5, 0],
        [4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];

let container = document.querySelector(".container");
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        let tile = document.createElement('div');
        tile.classList.add('tile')
        switch (matrix[row][col]) {
            case 0:
                tile.setAttribute("id", "sky");
                break;
            case 1:
                tile.setAttribute("id", "grass");
                break;
            case 2:
                tile.setAttribute("id", "soil");
                break;
            case 3:
                tile.setAttribute("id", "stone");
                break;
            case 4:
                tile.setAttribute("id", "water");
                break;
            case 5:
                tile.setAttribute("id", "treetrunk");
                break;
            case 6:
                tile.setAttribute("id", "treebranch");
                break;
            case 7:
                tile.setAttribute("id", "sun");
                break;
            case 8:
                tile.setAttribute("id", "cloud");
                break
        }
        container.appendChild(tile);
    }
}

// -----------------TOOLS--------------------------------
let tools = ['axe', 'pickaxe', 'shovel', 'reset'];
let toolbar = document.querySelector('.toolbar');
let toolTitle = document.createElement('div');
toolTitle.classList.add('tool-title');
toolTitle.innerHTML = "Tools";
toolbar.appendChild(toolTitle);

for (let i = 0; i < tools.length; i++) {
    let tool = document.createElement('div');
    tool.classList.add('tool');
    tool.setAttribute("id", tools[i]);
    toolbar.appendChild(tool);
}

let title = document.createElement('div')
title.classList.add('inventory-title');
title.innerHTML = "Inventory";
toolbar.appendChild(title);

let invArr = ['treebranch', 'treetrunk', 'grass', 'soil', 'stone']
for (let i = 0; i < invArr.length; i++) {
    let inventory = document.createElement('div');
    inventory.classList.add('inventory');
    switch (invArr[i]) {
        case 'treebranch':
            inventory.setAttribute("id", "treebranchCounter");
            break;
        case 'treetrunk':
            inventory.setAttribute("id", "treetrunkCounter");
            break;
        case 'grass':
            inventory.setAttribute("id", "grassCounter");
            break;
        case 'soil':
            inventory.setAttribute("id", "soilCounter");
            break;
        case 'stone':
            inventory.setAttribute("id", "stoneCounter");
            break;}
    toolbar.appendChild(inventory);
}


// --------------------------Functions----------------------
// AXE FUNC
let axeChoose = document.getElementById('axe');
axeChoose.addEventListener('click', axe);

function axe() {
    console.log('here')
    let treeTrunckSelect = document.querySelectorAll('#treetrunk');
    let treeBranchSelect = document.querySelectorAll('#treebranch');
    for (let i = 0; i < treeTrunckSelect.length; i++) {
        treeTrunckSelect[i].addEventListener('click', (event) => {
            if (event.target.id) {
                treeTrunckSelect[i].removeAttribute('id', 'treetrunk');
                treeTrunckSelect[i].setAttribute('id', 'sky');
                document.querySelector('.inventory').setAttribute('id', 'treetrunk');
                document.querySelector('#treetrunk').removeEventListener('click', axe);
            }
        });
    }
    for (let i = 0; i < treeBranchSelect.length; i++) {
        treeBranchSelect[i].addEventListener('click', (event) => {
            if (event.target.id) {
                treeBranchSelect[i].removeAttribute('id', 'treebranch');
                treeBranchSelect[i].setAttribute('id', 'sky');
                document.querySelector('.inventory').setAttribute('id', 'treebranch');
                document.querySelector('#treebranch').removeEventListener('click', axe);
            }
        });
    }
}

// PICKAXE FUNC
let pickaxeTool = document.getElementById('pickaxe');
pickaxeTool.addEventListener('click', pickaxe);

function pickaxe() {
    console.log('here')
    let stoneSelect = document.querySelectorAll('#stone');
    for (let i = 0; i < stoneSelect.length; i++) {
        stoneSelect[i].addEventListener('click', (event) => {
            if (event.target.id) {
                stoneSelect[i].removeAttribute('id', 'stone');
                stoneSelect[i].setAttribute('id', 'sky');
                document.querySelector('.inventory').setAttribute('id', 'stone');
                document.querySelector('#stone').removeEventListener('click', pickaxe);
            }
        });
    }

}

// SHOVEL FUNC
let shovelSelect = document.getElementById('shovel');
shovelSelect.addEventListener('click', shovel);

function shovel() {
    console.log('here')
    let soilSelect = document.querySelectorAll('#soil');
    let grasSelect = document.querySelectorAll('#grass');
    for (let i = 0; i < soilSelect.length; i++) {
        soilSelect[i].addEventListener('click', (event) => {
            if (event.target.id) {
                soilSelect[i].removeAttribute('id', 'soil');
                soilSelect[i].setAttribute('id', 'sky');
                document.querySelector('.inventory').setAttribute('id', 'soil');
                document.querySelector('#soil').removeEventListener('click', shovel);
            }
        });
    }
    for (let i = 0; i < grasSelect.length; i++) {
        grasSelect[i].addEventListener('click', (event) => {
            if (event.target.id) {
                grasSelect[i].removeAttribute('id', 'grass');
                grasSelect[i].setAttribute('id', 'sky');
                document.querySelector('.inventory').setAttribute('id', 'grass');
                document.querySelector('#grass').removeEventListener('click', shovel);
            }
        });
    }
}

// RESET FUNC
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', handleReset);
    function handleReset() {
        location.href="index.html"
    }



