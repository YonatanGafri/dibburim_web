const translations = {
    he: {
        title: "זמן האיכות שלך עם ה'",
        subtitle: "אפליקציית Dibburim עוזרת לך לעקוב אחרי זמני ההתבודדות שלך, לנהל יומן רוחני, ולהתחבר פנימה באווירה רגועה וקדושה.",
        comingSoon: "בקרוב בחנויות האפליקציות!",
        feature1Title: "טיימר התבודדות",
        feature1Desc: "הגדר זמנים קבועים וצא למסע פנימי של דיבור עם בורא עולם ללא הסחות דעת.",
        feature2Title: "מעקב והתמדה",
        feature2Desc: "עקוב אחרי הרצף היומי שלך וחזק את הקשר הרוחני שלך יום אחר יום.",
        feature3Title: "אווירה רגועה",
        feature3Desc: "עיצוב נעים ומרגיע שעוזר לך להיכנס לאווירה הנכונה של שלווה וקדושה.",
        footerText: "כל הזכויות שמורות."
    },
    en: {
        title: "Your Quality Time with God",
        subtitle: "The Dibburim app helps you track your Hitbodedut time, keep a spiritual journal, and connect deeply in a calm and holy atmosphere.",
        comingSoon: "Coming soon to App Stores!",
        feature1Title: "Hitbodedut Timer",
        feature1Desc: "Set a dedicated time and embark on an inner journey of talking with the Creator without distractions.",
        feature2Title: "Track & Persist",
        feature2Desc: "Track your daily streak and strengthen your spiritual connection day by day.",
        feature3Title: "Calm Atmosphere",
        feature3Desc: "A pleasant and relaxing design that helps you enter the right mindset of peace and holiness.",
        footerText: "All rights reserved."
    },
    fr: {
        title: "Votre temps de qualité avec D.ieu",
        subtitle: "L'application Dibburim vous aide à suivre vos moments de Hitbodedut, à tenir un journal spirituel et à vous connecter profondément dans une atmosphère calme et sainte.",
        comingSoon: "Bientôt disponible sur les App Stores !",
        feature1Title: "Minuteur de Hitbodedut",
        feature1Desc: "Fixez un temps dédié et embarquez pour un voyage intérieur de discussion avec le Créateur sans distractions.",
        feature2Title: "Suivi et Persévérance",
        feature2Desc: "Suivez votre série quotidienne et renforcez votre connexion spirituelle jour après jour.",
        feature3Title: "Atmosphère Calme",
        feature3Desc: "Un design agréable et relaxant qui vous aide à entrer dans le bon état d'esprit de paix et de sainteté.",
        footerText: "Tous droits réservés."
    },
    es: {
        title: "Tu tiempo de calidad con Dios",
        subtitle: "La aplicación Dibburim te ayuda a rastrear tus momentos de Hitbodedut, mantener un diario espiritual y conectarte profundamente en una atmósfera tranquila y santa.",
        comingSoon: "¡Próximamente en las tiendas de aplicaciones!",
        feature1Title: "Temporizador Hitbodedut",
        feature1Desc: "Establece un tiempo dedicado y emprende un viaje interior para hablar con el Creador sin distracciones.",
        feature2Title: "Seguimiento y Persistencia",
        feature2Desc: "Haz un seguimiento de tu racha diaria y fortalece tu conexión espiritual día a día.",
        feature3Title: "Atmósfera Tranquila",
        feature3Desc: "Un diseño agradable y relajante que te ayuda a entrar en el estado mental adecuado de paz y santidad.",
        footerText: "Todos los derechos reservados."
    }
};

document.getElementById('language-select').addEventListener('change', (e) => {
    const lang = e.target.value;
    const t = translations[lang];
    
    // Set text contents
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('coming-soon').textContent = t.comingSoon;
    document.getElementById('feature1-title').textContent = t.feature1Title;
    document.getElementById('feature1-desc').textContent = t.feature1Desc;
    document.getElementById('feature2-title').textContent = t.feature2Title;
    document.getElementById('feature2-desc').textContent = t.feature2Desc;
    document.getElementById('feature3-title').textContent = t.feature3Title;
    document.getElementById('feature3-desc').textContent = t.feature3Desc;
    document.getElementById('footer-text').textContent = t.footerText;
    
    // Change document direction for non-Hebrew
    if (lang === 'he') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'he');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
});
