var ListaTarefas = new function () {

    this.tarefas = []
    
    this.adicionaTarefa = () => {
        if(document.getElementById('novaTarefa').value == ''){
            alert('Escreva uma tarefa válida')
        }
        else{    
            this.tarefas.push(document.getElementById('novaTarefa').value)
            document.getElementById('novaTarefa').value = ''
            this.mostraTarefas()
        }
    }

    this.excluiTarefa = (posicao) => {
        this.tarefas.splice(posicao, 1)
        this.mostraTarefas()
    }

    this.editaTarefa = (posicao) => {
        document.getElementById('editar').type = 'text'
        document.getElementById('editar').value = this.tarefas[posicao]
        salvar.innerHTML = '<input class="botao" style="background-color: rgb(29, 109, 29); color: white;" type="submit" value="Salvar" onclick="ListaTarefas.salvaEditaTarefa('+ posicao +')">'
    }

    this.salvaEditaTarefa = (posicao) => {
        var editada = document.getElementById('editar').value
            for(var i in this.tarefas){
                if (i == posicao){
                    this.tarefas[i] = editada
                }
            }
        document.getElementById('editar').type = 'hidden'
        salvar.innerHTML= ''
        this.mostraTarefas()  
    }

    this.mostraTarefas = () => {
        lista.innerHTML = ''
        for (i=0; i<this.tarefas.length; i++){
            if (this.tarefas[i] != ''){
                lista.innerHTML += '<tr><td class="lista">' + 
                (i + parseInt(1)) + '. ' + this.tarefas[i] + '</td>' + 
                '<td><button class="botao" style="background-color: lightyellow;" onclick="ListaTarefas.editaTarefa('+ i +')">Editar</button></td>' + 
                '<td><button class="botao" style="background-color: lightcoral;" onclick="ListaTarefas.excluiTarefa('+ i +')">Excluir</button></td></tr><br>'            
            }
        }
        if (this.tarefas.length == 1){
            contador.innerHTML = 'Você possui ' + this.tarefas.length + ' tarefa'  
        }
        else if (this.tarefas.length == 0){
            contador.innerHTML = 'Você não possui tarefas'
        }
        else {
            contador.innerHTML = 'Você possui ' + this.tarefas.length + ' tarefas'   
        } 
    }
    this.modoNoturno = () => {
        lua.innerHTML = '<input type="image" id="img" src="sol.png" class="imagem" onclick="ListaTarefas.modoDiurno()"></input>'
        document.getElementById('body').style ='background-color: black;'
    } 
    this.modoDiurno = () => {
        lua.innerHTML = '<input type="image" id="img" src="lua.png" class="imagem" onclick="ListaTarefas.modoNoturno()"></input>'
        document.getElementById('body').style ='background-color: white;'
    }
}
 