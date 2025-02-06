document.addEventListener('DOMContentLoaded', function() {
    // Botones
    const cbuButton = document.getElementById('cbuButton');
    const noSaludoButton = document.getElementById('noSaludoButton');
    const editButton = document.getElementById('editButton');
    const saludoFButton = document.getElementById('saludoFButton'); // Nuevo botón para Saludo F
    
    // Campos de usuario
    const username = document.getElementById('username');
    const accountHolder = document.getElementById('accountHolder');
    const cbu = document.getElementById('cbu');
    const alias = document.getElementById('alias');
    
    let isEditing = false;

    // Función para guardar los datos en localStorage
    function saveData() {
        localStorage.setItem('accountHolder', accountHolder.value);
        localStorage.setItem('cbu', cbu.value);
        localStorage.setItem('alias', alias.value);
    }

    // Función para cargar los datos desde localStorage
    function loadData() {
        if (localStorage.getItem('accountHolder')) {
            accountHolder.value = localStorage.getItem('accountHolder');
        }
        if (localStorage.getItem('cbu')) {
            cbu.value = localStorage.getItem('cbu');
        }
        if (localStorage.getItem('alias')) {
            alias.value = localStorage.getItem('alias');
        }
    }

    // Cargar los datos al inicio de la página
    loadData();

    // Función para activar o desactivar el modo de edición
    function toggleEditMode() {
        const accountHolderLabel = document.querySelector('label[for="accountHolder"]');
        const cbuLabel = document.querySelector('label[for="cbu"]');
        const aliasLabel = document.querySelector('label[for="alias"]');
        
        if (isEditing) {
            editButton.innerHTML = '<i class="bi bi-pencil-square"></i> Editar';
            accountHolderLabel.textContent = 'Titular de la cuenta: ' + accountHolder.value;
            cbuLabel.textContent = 'CBU: ' + cbu.value;
            aliasLabel.textContent = 'Alias: ' + alias.value;
            accountHolder.disabled = true;
            cbu.disabled = true;
            alias.disabled = true;
            saveData();  // Guardar los datos después de editar
        } else {
            editButton.innerHTML = '<i class="bi bi-save"></i> Guardar';
            accountHolder.disabled = false;
            cbu.disabled = false;
            alias.disabled = false;
        }

        isEditing = !isEditing;
    }

    // Función para obtener un saludo aleatorio (incluye los nuevos saludos para "Saludo F")
    function getRandomGreetingF() {
        const userName = username.value.trim();
        const greetings = [
            `¡Holisss${userName ? ` ${userName}` : ''} ¿Cómo va todo? ❤️`,
            `¡Hola, reinaa${userName ? ` ${userName}` : ''}! ¿Cómo va todo? 😄`,
            `¡Holaaa, bellaa${userName ? ` ${userName}` : ''}! Te paso los datos que pedis 😊`,
            `¡Qué tal lindaa${userName ? `, ${userName}` : ''}❤️ Acá tenes los datos`,
            `¡Holaaa, amigaa${userName ? ` ${userName}` : ''}! Podes enviar por acá ✅`,
            `¡Holaaa, bellaa${userName ? ` ${userName}` : ''}! Te dejo los datos abajo⬇️`,
            `¡Hola, reinaa${userName ? ` ${userName}` : ''}! ¿Cómo estás? 😘 Te envie la info`,
            `¡Buenaas amigaa${userName ? ` ${userName}` : ''}! ¿Todo en orden? 😊`,
            `¡Holaaa, amigaa${userName ? ` ${userName}` : ''}! Aquí te paso la info que necesitás ➡️`,
            `¡Como estas amiga${userName ? `, ${userName}` : ''}, todo bien? Aquí te mando lo que pediste 📲`,
            `¡Holaaa, reinaa${userName ? ` ${userName}` : ''}! Te paso los datos para que los puedas enviar👇`
        ];

        const randomIndex = Math.floor(Math.random() * greetings.length);
        return greetings[randomIndex];
    }

    // Función para obtener un mensaje de advertencia aleatorio
    function getRandomWarningMessage() {
        const warningMessages = [
            "*¡Acordate de verificar el ALIAS o CBU antes de transferir!*⚠️❗️",
            "*No olvides revisar que el CBU o el ALIAS sean correctos antes de realizar la transferencia.*",
            "*Por favor, revisá los datos antes de confirmar la operación✅.*",
            "*Asegúrate de que los datos (ALIAS o CBU) sean correctos antes de proceder*❗️.",
            "Siempre es recomendable verificar que el ALIAS y el CBU estén correctos antes de hacer la transferencia.⚠️",
            "*No te olvides* de comprobar bien los datos antes de enviar el dinero❗️.",
            "Es importante *verificar* que el ALIAS o el CBU sean correctos antes de continuar con la transferencia.",
            "*Revisa* los datos nuevamente para evitar errores en la transferencia.❗",
            "Antes de transferir, confirma que el ALIAS o CBU sean correctos. ⚠️",
            "Verifica que el CBU o el ALIAS estén bien antes de continuar con la operación. ✅",
            "Es clave revisar los datos antes de proceder con la transferencia. ❗️",
            "No olvides chequear que el ALIAS y el CBU sean correctos antes de enviar el dinero. ⚠️",
            "Revisa bien los datos (CBU o ALIAS) antes de confirmar la transferencia. ✅",
            "Siempre asegúrate de que el CBU o ALIAS estén bien ingresados antes de hacer la transferencia. ❗️",
            "Asegúrate de revisar el ALIAS o CBU antes de hacer la transferencia⚠️❗️."
        ];

        const randomIndex = Math.floor(Math.random() * warningMessages.length);
        return warningMessages[randomIndex];
    }

    // Función para generar el mensaje completo con el saludo de Saludo F
    function generateSaludoFMessage() {
        const greeting = getRandomGreetingF();
        const data = shuffleData();

        let message = `${greeting}\n\n`;
        data.forEach(item => {
            message += `${item.label}: ${item.value}\n`;
        });

        message += `\n${getRandomWarningMessage()}`;
        return message.trim();
    }

    // Función para mezclar los datos
    function shuffleData() {
        const data = [
            { label: 'CBU', value: cbu.value },
            { label: 'Titular', value: accountHolder.value },
            { label: 'Alias', value: alias.value }
        ];

        data.sort(() => Math.random() - 0.5);
        return data;
    }

    // Función para generar el mensaje compacto
    function generateCompactMessage() {
        const greeting = getRandomGreeting();
        const data = shuffleData();

        let message = `${greeting}\n\n`;
        data.forEach(item => {
            message += `${item.label}: ${item.value}\n`;
        });

        message += `\n${getRandomWarningMessage()}`;
        return message.trim();
    }

    // Función para generar el mensaje detallado
    function generateDetailedMessage() {
        const data = shuffleData();
        const greeting = getRandomGreeting();

        return `${greeting}\n\n` +
               `${data[0].label}: ${data[0].value}\n` +
               `${data[1].label}: ${data[1].value}\n` +
               `${data[2].label}: ${data[2].value}\n\n` +
               `${getRandomWarningMessage()}`.trim();
    }

    // Función para generar mensaje sin saludo
    function generateMessageWithoutGreeting() {
        const startMessages = [
            "*Heey, te dejo estos datos para cargar*😀:",
            "Podes enviar aca✅:",
            "Te envié la info⬇️⬇️:",
            "Acá tienes los datos que necesitas:✅",
            "Estos son los datos para que cargues😊:",
            "Aquí tienes la información para cargar📥:",
            "Te paso los datos que necesitas👉📋:",
            "¡Todo listo! Acá están los datos que pediste😊:",
            "Aquí tienes los detalles para cargar:",
            "Ahi te mando, te los dejo por aquí👇:",
            "Todo en orden? Acá están los datos✅:",
            "Te envie los datos justo aquí:",
            "Ahi te paso😊",
            "Te enviee😊",
            "¡Listo! Te paso la info a continuación📩:",
            "A continuación te dejo la información que necesitas:",
            "Aquí están los datos para que puedas cargarlos✅:",
            "Dale, te paso los datos a continuación🥳:"
        ];

        const startMessage = startMessages[Math.floor(Math.random() * startMessages.length)];
        const data = shuffleData();

        return `${startMessage}\n\n` +
               `${data[0].label}: ${data[0].value}\n` +
               `${data[1].label}: ${data[1].value}\n` +
               `${data[2].label}: ${data[2].value}\n\n` +
               `${getRandomWarningMessage()}`;
    }

    // Asignar eventos a los botones
    cbuButton.addEventListener('click', async function() {
        let message;
        if (Math.random() < 0.5) {
            message = generateCompactMessage();
        } else {
            message = generateDetailedMessage();
        }

        document.getElementById('previewText').innerText = message;

        try {
            await navigator.clipboard.writeText(message);
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }

        username.value = '';
    });

    noSaludoButton.addEventListener('click', async function() {
        const message = generateMessageWithoutGreeting();

        document.getElementById('previewText').innerText = message;

        try {
            await navigator.clipboard.writeText(message);
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }

        username.value = '';
    });

    saludoFButton.addEventListener('click', async function() {
        const message = generateSaludoFMessage();

        document.getElementById('previewText').innerText = message;

        try {
            await navigator.clipboard.writeText(message);
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }

        username.value = '';
    });

    editButton.addEventListener('click', function() {
        toggleEditMode();
    });
});
