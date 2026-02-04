document.addEventListener('DOMContentLoaded', function() {
    // Botones
    const cbuButton = document.getElementById('cbuButton');
    const noSaludoButton = document.getElementById('noSaludoButton');
    const editButton = document.getElementById('editButton');
    const saludoFemButton = document.getElementById('saludoFemButton'); // Nuevo botón Saludo Fem
    const infoG1Button = document.getElementById('infoG1Button'); // Nuevo botón Info G1
    
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

    // Función para obtener un saludo aleatorio
    function getRandomGreeting() {
        const userName = username.value.trim();
        const greetings = [
            `¡Holaaa${userName ? ` ${userName}` : ''}! ¿Cómo estás? 😊`,
            `¡Qué tal${userName ? `, ${userName}` : ''}❤️ ¿Cómo te va?`,
            `¡Buenas buenaas${userName ? `, ${userName}` : ''}, como estas?🙌`,
            `¡Hola${userName ? ` ${userName}` : ''}! ¿Cómo va todo? 😄`,
            `¡Hola${userName ? ` ${userName}` : ''}!  Ahora te paso❤️`,
            `¡Buenas${userName ? `, ${userName}` : ''}! ¿Qué tal todo?`,
            `¡Como estas${userName ? `, ${userName}` : ''}?`,
            `¡Buenas buenaas${userName ? `, ${userName}` : ''}!!🙌`,
            `¡Holaaa${userName ? ` ${userName}` : ''} 😄`,
            `¡Que ondaa${userName ? ` ${userName}` : ''} 😄`,
            `¡Holiis${userName ? ` ${userName}` : ''}! Te enviee ❤️`,
            `¡Holaaa${userName ? ` ${userName}` : ''}! Te dejo los datos abajo⬇️ `,
            `¡Buenaas${userName ? ` ${userName}` : ''}! Te dejo info abajo `,
            `¡Como estas${userName ? ` ${userName}` : ''}? Te envio la info `,
            `¡Holaaa${userName ? ` ${userName}` : ''}! Podes enviar aca✅ `,
            `¡Holaaa${userName ? ` ${userName}` : ''}! Te paso los datos para tu carga 😊`,
            `¡Buenaas${userName ? ` ${userName}` : ''}! Ahora te paso la data✅ `,
            `¡Heey${userName ? ` ${userName}` : ''} ¿Cómo estás? 😃`
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

    function shuffleData() {
        const data = [
            { label: 'CBU', value: cbu.value },
            { label: 'Titular', value: accountHolder.value },
            { label: 'Alias', value: alias.value }
        ];

        data.sort(() => Math.random() - 0.5);
        return data;
    }

    // Función para generar el mensaje sin saludo
    function generateMessageWithoutGreeting() {
        const startMessages = [
            "*Heey, te dejo estos datos para cargar*😀:",
            "Podes enviar aca✅:",
            "Te envié la info para tu c4rg4⬇️⬇️:",
            "Acá tienes los datos que necesitas para c4rgar:✅",
            "Estos son los datos para que cargu3s😊:",
            "Aquí tienes la información para cargar📥:",
            "Te dejo el CBU/ALIAS para envi4r👉:",
            "¡Todo listo! Acá están los datos tu c4rga😊:",
            "Aquí tienes los detalles para carg4r:",
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

    // Generar el mensaje compacto
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

    // Generar el mensaje detallado
    function generateDetailedMessage() {
        const data = shuffleData();
        const greeting = getRandomGreeting();

        return `${greeting}\n\n` +
               `${data[0].label}: ${data[0].value}\n` +
               `${data[1].label}: ${data[1].value}\n` +
               `${data[2].label}: ${data[2].value}\n\n` +
               `${getRandomWarningMessage()}`;
    }

    // Función para generar el saludo femenino
    function getRandomFemGreeting() {
        const femaleGreetings = [
            "¡Holaa preciosa, ¿cómo estás? 🌸 Te paso los datos.",
            "¡Hola bella! 🥰 Te pasé los datos, avísame si necesitas algo más.",
            "¡Buenaaass! 🤗 ¿Todo bien? Te envié lo que pediste.",
            "¡Hola geniaa! 💖 Te mandé la info.",
            "¡Holaaa, amigaa! Aquí te paso la info que necesitás ➡️",
            "¡Como estas amiga, todo bien? Aquí te mando lo que pediste 📲",
            "Buenas, ¿cómo  va? 😊 ahora te paso la data.",
            "¡Hola hermosa! Ahí te mandé los datos, cualquier cosa me avisas👀.",
            "Holiis reinaa!🥰 te pasé para cargar acá⬇️.",
            "¡Holaaa, bellaa! Te paso los datos que pediste 😊",
            "¡Amigaa como estas?❤️! Podes enviar por acá ✅",
            "Buenaas ¿cómo estas hermosa? Te envié lo que pediste.",
            "¡Holaaa, reinaa! Te paso los datos para que los puedas enviar👇",
            "¡Hola linda! aca abajo tenes toda la info⬇️",
            "¡Hola geniaa! Te pasé los datos✅, cualquier cosa me avisas.",
            "¡Buenas! ¿Cómo estás?💞 Te envié la información.",
            "¡Hola bella! Te envié los datos aca abajo⬇️⬇️",
            "Hola querida, ¿cómo estás?❣️ Te envié la info.",
            "Holaa querida!. Aca tenes los datos para cargar✅.",
            "¡Hola hermosaa! Te envié la info✅"
        ];

        const randomIndex = Math.floor(Math.random() * femaleGreetings.length);
        return femaleGreetings[randomIndex];
    }

    // Función para generar el mensaje con saludo femenino
    function generateMessageWithFemGreeting() {
        const greeting = getRandomFemGreeting();
        const data = shuffleData();

        let message = `${greeting}\n\n`;
        data.forEach(item => {
            message += `${item.label}: ${item.value}\n`;
        });

        message += `\n${getRandomWarningMessage()}`;
        return message.trim();
    }

    // Función para generar el mensaje Info G1
    function generateInfoG1Message() {
        const infoMessages = [
            "¿Cómo vas? Te cuento que desde ahora, todas las CARGAS y RETIROS los vas a gestionar desde un grupo exclusivo. En un ratito te mando el link para que te unas. Ahí nuestro equipo de atención te va a dar una mano. Este grupo es solo para vos, nadie más. Cuando entres, solo tenes que reenviar el comprobante y te cargamos. ¡Gracias! 💖",
            "¡Hola! ¿Todo bien? Te aviso que ahora las CARGAS y RETIROS se hacen en un grupo privado. Te voy a pasar el link para que te unas. En ese grupo, nuestro equipo está para ayudarte. Es solo para vos, nadie más. Una vez dentro, enviame el comprobante y te cargamos. ¡Gracias! 🌟",
            "¡Ey! ¿Cómo andas? A partir de ahora, las CARGAS y RETIROS los vas a tener que pedir desde un grupo exclusivo. Te voy a mandar el link para que te unas, y ahí nuestro equipo te va a asistir con todo lo que necesites. Este grupo es único para vos, no hay nadie más. Cuando ingreses, REENVIA el comprobante que nuestro equipo te carga al instante. ¡Gracias! 💙",
            "¿Cómo estás? Te comento que desde ahora, las solicitudes de CARGAS y RETIROS van a ir por un grupo privado. Te paso el link para que te unas, y ahí el equipo de atención te va a ayudar. Este grupo es solo para vos, nadie más. Cuando entres, ENVIAME de nuevo el comprobante ¡Gracias! 💕",
            "¡Hola! ¿Cómo va todo? Te aviso que ahora las CARGAS y RETIROS los vas a tener que gestionar desde un grupo privado. En un rato te paso el link para que te unas. En ese grupo, nuestro equipo te va a asistir. Este grupo es exclusivo para vos, nadie más. Al ingresar, reenvia el comprobante si ya cargaste ¡Gracias! ✨",
            "¿Qué tal? Desde ahora, las CARGAS y los RETIROS los vas a pedir en un grupo privado. Te mando el link para que te unas. En ese grupo está el equipo para ayudarte en todo lo que necesites. Es solo para vos, no hay nadie más. Cuando entres, solo avísame si querés RETIRAR o CARGAR. ¡Gracias! 💖",
            "¡Hola! ¿Cómo estás? Te cuento que ahora, todas las solicitudes de CARGAS y RETIROS las vas a hacer en un grupo privado. Te paso el link para que te unas. En ese grupo, el equipo de atención te va a ayudar con todo. Este grupo es solo para vos, nadie más. Una vez que entres, solo decime si querés RETIRAR o CARGAR. ¡Gracias! 🌸"
        ];

        const randomIndex = Math.floor(Math.random() * infoMessages.length);
        return infoMessages[randomIndex];
    }

    // Función para generar el mensaje Info G2
    function generateInfoG2Message() {
        const infoMessages = [
            "A partir de ahora, las CARGAS y los RETIROS tenés que solicitarlos por acá en lugar de por privado 🌟. Te recuerdo que este grupo es solo para vos, NO hay más clientes, solo nuestro equipo de atención. Si tenés alguna duda, no dudes en preguntarme 🤲🏻.",
            "Desde ahora, todas las CARGAS y RETIROS los vas a solicitar por acá, en vez de por privado 🍃. Este grupo es solo para vos, NO hay otros clientes, solo nuestro equipo listo para ayudarte. Cualquier consulta, avisame sin problema 🤗.",
            "A partir de ahora, tanto las CARGAS como los RETIROS se gestionan por aquí, no por privado 🌼. Este grupo es exclusivo para vos, NO hay más clientes, solo nuestro equipo de atención. Si necesitas algo, preguntame con confianza 🤲🏻.",
            "A partir de ahora, las CARGAS y RETIROS se solicitan aquí, en vez de por privado 🌱. Este grupo es exclusivamente para vos, NO hay otros clientes, solo nosotros para ayudarte. Si tenés alguna duda, escribime sin problema 🤗.",
            "Desde ahora, tanto las CARGAS como los RETIROS los vas a pedir por acá en lugar de por privado 🌟. Te recuerdo que este grupo es solo para vos, NO hay más clientes, solo nuestro equipo de atención. Cualquier cosa, no dudes en consultarme 🤲🏻."
        ];

        const randomIndex = Math.floor(Math.random() * infoMessages.length);
        return infoMessages[randomIndex];
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

    saludoFemButton.addEventListener('click', async function() {
        const message = generateMessageWithFemGreeting();

        document.getElementById('previewText').innerText = message;

        try {
            await navigator.clipboard.writeText(message);
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }

        username.value = '';
    });

    infoG1Button.addEventListener('click', async function() {
        const message = generateInfoG1Message();

        document.getElementById('previewText').innerText = message;

        try {
            await navigator.clipboard.writeText(message);
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }

        username.value = '';
    });

    // Agregar el evento para el botón Info G2
    infoG2Button.addEventListener('click', async function() {
        const message = generateInfoG2Message();

        document.getElementById('previewText').innerText = message;

        try {
            await navigator.clipboard.writeText(message);
        } catch (err) {
            console.error('Error al copiar el texto: ', err);
        }
    });

    editButton.addEventListener('click', toggleEditMode);
});




