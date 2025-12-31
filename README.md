# Varatech

Website-ul oficial al Varatech, oferind servicii digitale și tehnice moderne pentru afaceri mici din România.

## Despre

Varatech oferă soluții complete pentru prezența și dezvoltarea afacerii tale locale, inclusiv:
- Creare site-uri și aplicații web
- Sisteme de rezervări
- Optimizare SEO și UX
- Promovare Google Ads și social media
- Servicii foto și video
- Suport IT și configurații PC
- Meniuri digitale cu QR
- Instalare CCTV și rețele
- Smart home și multimedia
- Soluții de digitalizare pentru eficiență

Website-ul este minimalist, modern și realizat integral în limba română.

## Tehnologii

- HTML5
- CSS3
- JavaScript
- EmailJS pentru formulare

## Configurare EmailJS

Pentru ca formularul să trimită email-uri automat:

1. Înregistrează-te pe [EmailJS](https://www.emailjs.com/).
2. Creează un serviciu de email (ex: Gmail) și obține Service ID (`service_oi33mbj`).
3. Creează un template de email cu variabilele: `{{name}}`, `{{email}}`, `{{phone}}`, `{{service}}`, `{{message}}`. Setează destinatarul la `pavelrosca@yahoo.com`.
4. Obține Template ID (`template_cg1uwn3`) și Public Key (`S15vBRm9ZaDcrZRVx`).
5. Dacă ID-urile sunt diferite, înlocuiește-le în `main.js`.

**Notă securitate:** Cheile EmailJS sunt publice și pot fi văzute în codul sursă. Nu expun parole sau informații sensibile.

## Funcționalități

Formularul de contact trimite email-uri automat folosind EmailJS, fără a deschide clientul de email.

## Deploy

Acest site este găzduit pe GitHub Pages.