let matrix =
[
    [7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [7,7,7,0,0,0,0,8,8,8,0,0,0,0,0,0,0,0,0,0],
    [7,7,7,0,0,0,0,0,8,8,8,0,0,0,0,0,8,8,8,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,5,6],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0],
    [0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,5,0],
    [0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,5,0],
    [4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

let container = document.querySelector(".container");
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        let tile = document.createElement('div');
        tile.classList.add('tile')
        switch(matrix[row][col]){
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
         container.appendChild(tile)
    }
}

// -----------------Tםםך--------------------------------
let tools= ['axe','pickaxe', 'shovel']
let toolbar = document.querySelector('.toolbar');

for (let i = 0; i < tools.length; i++) {
    let tool = document.createElement('div');
    tool.classList.add('tool')
    tool.setAttribute("id",tools[i])

   console.log(tool)
   toolbar.appendChild(tool)
}

let inventory = document.createElement('div');
inventory.classList.add('inventory')
inventory.innerHTML = 'X 0'
toolbar.appendChild(inventory)



