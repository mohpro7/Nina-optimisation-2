document.addEventListener('DOMContentLoaded', function() {
    const schema = {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": "Nina Carducci - Photographe Professionnel",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "68 avenue Alsace-Lorraine",
            "addressLocality": "Bordeaux",
            "postalCode": "33200",
            "addressCountry": "FR"
        },
        "telephone": "+33556677889",
        "openingHours": "Mo,Tu,We,Th,Fr 10:00-19:00",
        "image": "./assets/images/camera.avif"
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
});
