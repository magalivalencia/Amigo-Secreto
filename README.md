Funcionamiento de la Aplicación

    **Agregar nombres**
    El usuario escribe el nombre de un amigo en el campo de texto y hace clic en el botón "Añadir".
    Si el campo está vacío, se muestra una alerta pidiendo un nombre válido.
    Los nombres válidos se agregan a una lista visible en la pantalla.

    Cada nombre añadido se muestra en una lista (<ul>) justo debajo del campo de entrada, actualizándose automáticamente.

    **Sortear al amigo secreto**
    Al hacer clic en el botón "Sortear amigo", la aplicación:
    Verifica que haya al menos un nombre en la lista.
    Elige aleatoriamente uno de los nombres ingresados.
    Muestra el nombre sorteado en pantalla como el amigo secreto.


    Validación de entrada para evitar nombres vacíos.
    Utiliza  arrays para almacenar los nombres.
    Selección aleatoria mediante Math.random() y Math.floor().
