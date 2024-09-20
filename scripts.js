function getDados() {

    // Obtém o elemento da lista de tarefas onde as novas tarefas serão adicionadas
    let taskList = document.getElementById("task-list");

    // Cria um novo elemento div que conterá cada tarefa individual
    let div = document.createElement("div");
    div.className = "task"; // Adiciona a classe "task" para aplicar os estilos CSS

    // Obtém o valor do campo de entrada (onde o usuário digita a nova tarefa)
    let input = document.getElementById("entrada").value;

    // Cria um elemento de parágrafo (<p>) para exibir o texto da tarefa
    let tarefa = document.createElement("p");
    tarefa.textContent = input; // Define o conteúdo do parágrafo como o texto inserido pelo usuário

    // Cria um checkbox para marcar a tarefa como completa ou incompleta
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // Define o tipo do input como checkbox

    // Adiciona um evento ao checkbox que será ativado quando o estado mudar (marcar/desmarcar)
    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            // Se o checkbox estiver marcado, adiciona a classe "completed" que risca a tarefa
            tarefa.classList.add("completed");  
        } else {
            // Se o checkbox for desmarcado, remove a classe "completed"
            tarefa.classList.remove("completed"); 
        }
    });

    // Cria um botão para excluir a tarefa
    let butao = document.createElement("button");
    butao.textContent = "Excluir tarefa"; // Define o texto do botão

    // Adiciona um evento ao botão para excluir a tarefa quando clicado
    butao.addEventListener("click", () => {
        div.remove(); // Remove a div que contém a tarefa (checkbox, texto e botão)
    });

    // Adiciona o checkbox, o texto da tarefa e o botão de excluir dentro da div
    div.append(checkbox, tarefa, butao);

    // Adiciona a nova tarefa (div) na lista de tarefas (taskList)
    taskList.append(div); 
}
