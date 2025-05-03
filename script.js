let buttonAdd = document.querySelector("#form-adicionar button");
let inputNewItem = document.querySelector("#novo-item");
let buttonClear = document.querySelector("#limpar-lista");
let lista = document.querySelector(".lista-compras");

buttonAdd.addEventListener("click", addLiCart);
buttonClear.addEventListener("click", clearCart);

function addLiCart(event) {
    event.preventDefault();

    let inputNewItemVal = document.querySelector("#novo-item").value;
    if (inputNewItemVal == "") {
        alert("Preencha o campo corretamente");
    } else {
        lista.innerHTML += `
        <li>
            <span class="item-text">${inputNewItemVal}</span>
            <div class="acoes">
                <input type="checkbox">
                <button class="excluir">excluir</button>
            </div>
        </li>`;
        inputNewItem.value = "";
    }

    if (lista.children.length > 0) {
        buttonClear.style.display = "block";
    } else {
        buttonClear.style.display = "none";
    }
    let newCheckbox = lista.querySelectorAll("li input[type='checkbox']");
    newCheckbox.forEach((item) => {
        item.addEventListener("change", completeTask);
    });
    removeTask();
}

function clearCart(event) {
    event.preventDefault();

    lista.innerHTML = "";
    buttonClear.style.display = "none";
}

function completeTask() {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((item) => {
        let li = item.closest("li");
        let itemText = li.querySelector(".item-text");

        if (item.checked) {
            itemText.style.textDecoration = "line-through";
            itemText.style.color = "gray";
        } else {
            itemText.style.textDecoration = "none";
            itemText.style.color = "black";
        }
    });
}

function removeTask() {
    document.querySelectorAll(".acoes .excluir").forEach((item) => {
        item.addEventListener("click", () => {
            let li = item.closest("li");

            li.remove();

            if (lista.children.length > 0) {
                buttonClear.style.display = "block";
            } else {
                buttonClear.style.display = "none";
            }
        });
    });
}
