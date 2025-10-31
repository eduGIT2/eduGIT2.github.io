document.addEventListener('DOMContentLoaded', () => {

    // --- Configuración de WhatsApp ---
    // *** REEMPLAZA ESTE NÚMERO ***
    const phoneNumber = '34958123456'; // Incluye el prefijo de país (34 para España)
    const whatsappMessage = encodeURIComponent('Hola VetGranada, me gustaría pedir una cita.');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // 1. Botón Flotante de WhatsApp
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.href = whatsappLink;
        whatsappBtn.setAttribute('target', '_blank');
    }

    // 2. Enlace de WhatsApp en el Footer
    const footerWhatsappLink = document.getElementById('footer-whatsapp-link');
    if (footerWhatsappLink) {
        footerWhatsappLink.href = whatsappLink;
        footerWhatsappLink.setAttribute('target', '_blank');
    }


    // 3. Lógica del NUEVO Formulario de Contacto
    const contactoForm = document.getElementById('contacto-form');
    if (contactoForm) {
        const formMessageEl = document.getElementById('contact-form-message');
        
        contactoForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Previene el envío real
            
            // Simulación de envío exitoso
            formMessageEl.textContent = '¡Mensaje enviado! Gracias por contactarnos. Te responderemos pronto. 😃';
            formMessageEl.style.color = 'var(--primary-color)';
            formMessageEl.style.backgroundColor = '#e0ffe0';
            formMessageEl.style.display = 'block';

            // Resetear el formulario después de 3 segundos
            setTimeout(() => {
                contactoForm.reset();
                formMessageEl.style.display = 'none';
            }, 3000);
        });
    }


    // 4. Lógica del Formulario de Satisfacción (Estrellas)
    const satisfaccionForm = document.getElementById('satisfaccion-form');
    if (satisfaccionForm) {
        const stars = satisfaccionForm.querySelectorAll('.form-group.rating .stars i');
        const valoracionInput = satisfaccionForm.querySelector('#valoracion');
        const formMessageEl = satisfaccionForm.querySelector('#form-message');

        // Manejar la selección de estrellas
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                valoracionInput.value = rating;

                stars.forEach((s, index) => {
                    if (index < rating) {
                        s.classList.remove('far');
                        s.classList.add('fas');
                    } else {
                        s.classList.remove('fas');
                        s.classList.add('far');
                    }
                });
            });
        });

        // Manejar el envío del formulario de satisfacción
        satisfaccionForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Previene el envío real

            if (!satisfaccionForm.querySelector('#servicio').value || !valoracionInput.value) {
                formMessageEl.textContent = 'Por favor, selecciona un servicio y una valoración.';
                formMessageEl.style.color = 'red';
                formMessageEl.style.backgroundColor = '#ffe0e0';
                formMessageEl.style.display = 'block';
                return;
            }
            
            formMessageEl.textContent = '¡Gracias! Tu opinión ha sido enviada con éxito. 😊';
            formMessageEl.style.color = 'var(--primary-color)';
            formMessageEl.style.backgroundColor = '#e0ffe0';
            formMessageEl.style.display = 'block';

            setTimeout(() => {
                satisfaccionForm.reset();
                valoracionInput.value = '';
                stars.forEach(s => { s.classList.remove('fas'); s.classList.add('far'); });
                formMessageEl.style.display = 'none';
            }, 3000);
        });
    }

});