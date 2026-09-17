function agregarTarea()
{
    var tarea = document.getElementById("tarea").value;
    if(tarea == "")
    {
        alert("Escribe una tarea");
    }
    else
    {
        var lista = document.getElementById("listaTareas");
        lista.innerHTML += '<div>' + tarea +
        ' <button onclick="eliminarTarea(this)">Eliminar</button></div>';
        localStorage.setItem("tareas", lista.innerHTML);

        document.getElementById("tarea").value = "";
    }
}
function eliminarTarea(boton)
{
    boton.parentNode.remove();
    localStorage.setItem("tareas",
        document.getElementById("listaTareas").innerHTML
    );
}
function cargarTareas()
{
    var tareas = localStorage.getItem("tareas");
    if(tareas != null)
    {
        document.getElementById("listaTareas").innerHTML = tareas;
    }
}
window.onload = cargarTareas;