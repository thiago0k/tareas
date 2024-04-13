document.addEventListener('DOMContentLoaded', function() { 
    let textoTarea = document.getElementById('textoTareas');
    let btn = document.getElementById('btn')

  btn.addEventListener('click',function(){
    let tareaTexto = textoTarea.value.trim();
    if(tareaTexto){
        let ul = document.getElementById('tareas-ul');
        let li = document.createElement('li');
        li.className = 'item'

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('change', () =>{
            tacharTarea(checkbox,li);
        });

        let btn = document.createElement('button');
        btn.innerHTML =  ` <i class="fa-solid fa-trash"></i>`
        btn.className = 'btn-eliminar';
        btn.addEventListener('click', () => {
            eliminarTarea(ul,li);
        });

        let span = document.createElement('span');
        span.className = 'span-texto'
        span.textContent = tareaTexto;
    
        let temporizado = document.createElement('span');
        temporizado.className = 'temporizado'
        let minutos = 0;
        function actualizarTemporizador(){
            temporizado.textContent = `hace ${minutos} minutos`;
        }

        actualizarTemporizador();

        setInterval(function() {
        minutos++;
        actualizarTemporizador();
        }, 60000); 

        li.appendChild(checkbox);
        li.appendChild(btn);
        li.appendChild(span);
        li.appendChild(temporizado);
        ul.appendChild(li);

        btn.addEventListener('click', () => {
            clearInterval(intervaloTemporizador);
        });
    }

    textoTarea.value = '';
  });
      
    function tacharTarea(checkbox, li) {
        let span = li.querySelector('span');
        span.classList.toggle('tachado', checkbox.checked);
    }

    function eliminarTarea(ul, li) {
        ul.removeChild(li);
    }
});



  