import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "header-home": "HOME",
      "header-characteristics": "WALLET",
      "header-products": "PRODUCTS",
      "header-roadmap": "ROADMAP",
      "header-resenas": "SUPPORT",
      "header-app": "LAUNCH DAPP",
      "hero-title-amarillo": "Web 3.0 + Internet of Things (IoT)",
      "hero-title": "We are a disruptive broadcast ecosystem",
      "hero-description": "OHMIO is the solution for Broadcast Industry, using Blockchain technology and Internet of things (IoT). OHMIOBOX makes possible tokenizing the efficiency and rating of transmission stations over the world.",
      "hero-nabevent": "NAB SHOW EVENT",
      "hero-ontheair": "ON THE AIR",
      "hero-addmetamask": "ADD TOKEN TO METAMASK",

      "ohmiobox-title-azul": "We present",
      "ohmiobox-title": "The OHMIO Box",
      "ohmiobox-description": "This device is a dedicated piece of hardware that provides a node in order to interact with OHMIO Network from Broadcast Stations.",
      "ohmiobox-f1": "Monitoring Power Consumption",
      "ohmiobox-f2": "Improves Efficiency Transmission",
      "ohmiobox-f3": "Under IP76 and Engineering Standards",
      "ohmiobox-f4": "Under IP76 and Engineering Standards",

      "revolution-title-azul": "Be part of this revolution",
      "revolution-title": "Get your OHMIO Box and start to Earn!",
      "revolution-description": "With this device you will be able to generate rewards in OHMIO coins, the token with which you can carry out transactions within our ecosystem.",
      "revolution-f1title": "Radio/Tv Station",
      "revolution-f1": "Run our nodes in your station and generate a new income.",
      "revolution-f2title": "Polygon Hosted",
      "revolution-f2": "OHMIO is currently on Polygon Mainnet Network.",

      "features-title-azul": "Token and Product Features",
      "features-title": "Why Choose Us",
      "features-f1title": "Transmission Reports",
      "features-f1": "Accurate in historic data. You can ensure your processes.",
      "features-f2title": "Efficiency And Agility",
      "features-f2": "This device allows you to transmit in more agile and fast ways.",
      "features-f3title": "Advanced Technology",
      "features-f3": "You can monitor your transmission station in real time.",
      "features-f4title": "Security And Transparency",
      "features-f4": "All communication is backed by Blockchain and encrypted technologies End to End (E2E).",
      "features-f5title": "Web 3.0 Ecosystem",
      "features-f5": "OHMIO has diverse products and a clear roadmap to ensure the development and success.",
      "features-f6title": "Scalability",
      "features-f6": "The Network is prepared to have high data traffic due to streaming technology.",

      "sc-title-azul": "Smart Contracts",
      "sc-title": "Comprehensive smart contracts.",
      "sc-description1": "We are leading change in the broadcast industry using the benefits of the Internet of Value (IoV) and Internet of Things (IoT).",
      "sc-description2": "Creating innovative devices that allow the use of the IoT to monitor your Broadcast Station in a way never seen before. Now you can connect your RF transmitters, connect your OHMIO Box and start to earn OHMIO while ensuring and optimizing your processes.",
      "sc-bton": "Start to earn",
      "sc-f1title": "Verified TimeStamp Triggers",
      "sc-f1": "The token is backed by smart contracts to trigger all descentralized actions.",
      "sc-f2title": "Advanced Application Interface (API)",
      "sc-f2": "The Centralized API has been developed with the last technologies.",
      "sc-f3title": "Software Development Kit (SDK)",
      "sc-f3": "We are planning to provide tools to develop around the OHMIO Ecosystem.",
      "sc-f4title": "Java Virtual Machine (JVM)",      
      "sc-f4": "Using Polygon, an Ethereum Virtual Machine Blockchain, we are able to send and receive fast transactions.",

      "wallet-title": "Download our Wallet",
      "wallet-dewalletription": "In order to interact with our platform you need a wallet capable of using the Polygon Network, there are many options on the market, we directly suggest our multi-chain guarded wallet. Here you can centralize your funds and receive constant benefits.",
      "wallet-android": "GET ANDROID",
      "wallet-ios": "GET iOS",

      "roadmap-title-azul": "Roadmap",
      "roadmap-title": "Our OHMIO Roadmap",
      "roadmap-deroadmapription": "In order to interact with our platform you need a roadmap capable of using the Polygon Network, there are many options on the market, we directly suggest our multi-chain guarded roadmap. Here you can centralize your funds and receive constant benefits.",
      "roadmap-android": "GET ANDROID",
      "roadmap-ios": "GET iOS",

    }
  },
  sp: {
    translation: {
      "header-home": "Inicio",
      "header-characteristics": "Caracteristicas",
      "header-products": "Productos",
      "header-videos": "Video",
      "header-resenas": "Reseñas",
      "header-contact": "Contacto",
      "product-width": "Ancho:",
      "header-erotix": "Erotix Punto G",
      "header-ringbell": "Varita Vibradora",


      "hero-title": "JUGUETES DE LUJO, CON DOBLE ESTIMULACIÓN",
      "hero-description": "Sensual Dezire es el complemento perfecto para tu colección de juguetes sexuales. Con doble y simple estimulación y con siete modos diferentes de vibración, es fácil encontrar el perfecto para ti. Son resistentes al agua, por lo que son ideales para usar en el agua o en la ducha.",
      "hero-buttonorder": "ORDENAR AHORA",
      "hero-seemore": "VER MÁS",
      "hero-onlythis": "PARA PAREJAS",
      "contact-address": "Dirección",
      "product-silicone": "Silicona",

      "features-title": "Lujo Inteligente. Placer en la palma de tu mano.",
      "features-description": "Nuestros increíbles vibradores tienen una variedad de características para brindar una experiencia satisfactoria y personalizable.",
      "features-f1": "Doble Placer",
      "features-f1d": "Motores duales para estimulación interna y externa por separado.",
      "features-f2": "Fácil Configuración",
      "features-f2d": "Intensidad y patrones de vibración ajustables para un placer personalizado.",
      "features-f3": "No te preocupes por mojarte",
      "features-f3d": "Diseño a prueba de agua para usar en la ducha o el baño.",
      "features-f4": "Alta duración de batería",
      "features-f4d": "Diseño recargable e inalámbrico para un uso conveniente y ecológico.",

      "which-title": "Conoce el juguete perfecto para ti",
      "which-description": "Encuentra el estilo perfecto y las mejores prestaciones, consulta nuestros juguetes para disfrutarlos.",
      "which-double": "Doble vibración",
      "which-find": "Descúbrelo",

      "video-title": "Nos asociamos con los mejores",
      "video-description": "Da rienda suelta a tus deseos y explora nuevas sensaciones. Experimenta el placer de las entregas discretas de juguetes. Compre con confianza y privacidad, entregado directamente a su puerta. Desbloquee nuevos niveles de intimidad con entregas internacionales.",

      "review-title": "Nuestras experiencias y testimonios",
      "review-description": "Esta sección está dedicada a mostrar experiencias reales de los clientes con nuestros juguetes. Aquí encontrará una variedad de testimonios personales de personas que han usado nuestros productos y están satisfechos con los resultados. Compartirán su experiencia de cómo nuestros juguetes han mejorado sus experiencias sexuales y cómo se sienten acerca de la calidad y el diseño de nuestros productos.      ",

      "testimonial-1": "¡Nunca supe que la estimulación dual podría sentirse tan increíble! Los motores duales de este juguete golpean todos los puntos correctos y los diferentes patrones de vibración mantienen las cosas interesantes. Recomiendo encarecidamente este juguete a cualquiera que busque llevar su placer al siguiente nivel.",
      "testimonial-2": "¡Me encanta mi juguete de doble vibración! Es la combinación perfecta de estimulación interna y externa, y el diseño a prueba de agua significa que puedo llevarlo conmigo en la ducha para divertirme aún más.",
      "testimonial-3": "He estado usando este juguete por un tiempo y debo decir que ha superado mis expectativas. La función de doble vibración es perfecta para mí, me hace llegar al orgasmo cada vez que lo uso.",
      "testimonial-4": "Dudé un poco en probar un juguete de doble vibración, ¡pero me alegro mucho de haberlo hecho! El diseño inalámbrico hace que sea fácil de usar y los patrones de vibración ajustables me brindan muchas opciones para el placer. Recomiendo encarecidamente este juguete a cualquiera. buscando algo nuevo y emocionante.",

      "product-description": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "product-back": "Regreso al Inicio",
      "product-totallong": "Largo total:",
      "product-diameter": "Diametro:",
      "product-battery": "Bateria:",
      "product-quality":"Alta calidad & Placer Superior",
      "product-categories-title":"Categorias",
      "product-categories-list":"Poderoso, Fácil de usar, Larga vida útil, Mejores y Más vendidos",
      "product-categories-list2":"A Prueba de agua, Premium, Ergonómico",
      "product-general":"DESCRIPCIÓN GENERAL",
      "product-clean-title":"Limpieza:",
      "product-clean-description":"Jabón suave o limpiador de juguetes",

      "product-title-curvux": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "product-description-curvux": "Premium vibrator with long tentacles for vaginal and clitorial stimulation.",
      "product-AAA": "pilas",

      "modern-title": "Tecnología al servicio del lujo",
      "modern-description": "Juguetes fabricados bajo los más altos estándares internacionales de calidad y tecnología de alto desempeño.",
      "modern-1": "Motor G para movimientos de rotación",
      "modern-2": "Multiple modos de vibración",
      "modern-3": "Baterías recargables para uso extendido",
      "modern-4": "Ondas 3D que proveen placer extra",

      "product-description-extasix": "Presentamos la máxima experiencia de placer: Este juguete está diseñado para llevar tu placer al siguiente nivel con su función única de cuentas giratorias que crea una sensación de plenitud y movimiento en la parte superior del juguete. Las tres velocidades y los tres tipos de vibración del estimulador de clítoris ofrecen una variedad de sensaciones para un placer personalizado. La combinación de las cuentas giratorias y la vibración te hará sentir como en un paraíso de placer. Con su diseño elegante y ergonómico, este juguete seguramente se convertirá en tu nuevo compañero favorito para los más intensos orgasmos.",
      "product-extasix": "Diametro:",
      "product-longinsertable": "Largo insertable:",
      "product-longinstimulator": "Largo estimulador:",
      "product-charge": "Modo de carga:",
      "product-description-primux": "Presentamos el último juguete para el placer: un vibrador de movimiento único con perlas internas que simulan la sensación de los dedos, perfecto para estimular las paredes vaginales. Con un conejo clitoridiano agregado que vibra de forma independiente, este juguete combina movimiento interno y vibración para orgasmos explosivos. Práctico, recargable y resistente al agua, es fácil de usar y está listo para la acción en cualquier momento. Mejora tu juego de placer con este juguete revolucionario",

      "product-magnetic": "Mágnetico",
      "product-circunferencepuntog": "Circunferencia de estimulador del Punto G",
      "product-circunferenceclitorial": "Circunferencia de estimulador clitorial",
      
      "product-description-primux": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "product-description-lovex": "Presenta el juguete perfecto para una diversión discreta y llena de placer: el pequeño vibrador de doble pulsación. Con su diseño único, te llevará a nuevas alturas de placer. El estimulador del punto G cuenta con tres pequeños círculos para una mayor sensación, mientras que el estimulador del clítoris tiene una perla interna que crea un movimiento oscilante. Ambos estimuladores se pueden controlar de forma independiente, con 7 modos de vibración para elegir. Disfruta de un nuevo nivel de estimulación con este juguete versátil y potente.",
      "product-description-evilex": "Experimenta un placer alucinante con este innovador vibrador. Su motor del punto G realiza movimientos giratorios que estimulan las paredes vaginales, mientras que sus ondas 3D proporcionan una estimulación extra. El motor del punto G brinda sensaciones increíbles, las ondas 3D brindan la sensación perfecta para llevarte al orgasmo. Este vibrador está diseñado para el máximo placer, por lo que es el juguete perfecto para aquellos que quieren experimentar algo nuevo y emocionante.",
      "contact-title2": "Dejanos saber de ti",

      "product-title": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "contact-title": "Contacto",
      "contact-title2": "Dejanos saber de ti",
      "header-app": "Aplicación Móvil",

      "contact-description": "Únete a la revolución en la industria de los juguetes sexuales. Conviértete en distribuidor de nuestra marca premium de juguetes sexuales. Conéctese con nosotros y dé el siguiente paso en su viaje empresarial. Únete a nuestro equipo y crece con nosotros. Comuníquese con nosotros a través de nuestro formulario de contacto, WhatsApp o correo electrónico. Estamos emocionados de saber de ti y comenzar esta aventura juntos.",
      "contact-description2":"Nuestro equipo dedicado le proporcionará toda la información y el apoyo necesarios. No pierda esta oportunidad de ser parte de nuestro exitoso negocio. Monta las olas de placer en 3D y compártelas con el mundo mientras ganas dinero.",

      "app-title": "App Móvil",
      "app-description": "Bienvenido a la mejor aplicación para parejas y el placer íntimo. Con nuestra aplicación, pueden explorar nuevas sensaciones y experiencias juntos, en cualquier lugar y en cualquier momento.",
      "app-broadcasttile": "Funcionalidades de transmisión y pareja",
      "app-broadcastdescription": "Experimenta un nuevo nivel de intimidad con nuestras funcionalidades para parejas, diseñadas para acercarte y mejorar tu conexión, sin importar la distancia. ",
      "app-f1title": "Interacciones sociales",
      "app-f1description": "Conéctese e interactúe con otros usuarios, compartiendo consejos, trucos y experiencias.",
      "app-f2title": "Lista blanca/Lista negra",
      "app-f2description": "Crea listas personalizadas para controlar quién puede y quién no puede interactuar contigo.",
      "app-f3title": "Configuración de privacidad",
      "app-f3description": "Rastrea y controla tu placer en tiempo real, con datos como la duración y la intensidad.",
      "app-f4title": "Seguimiento de datos en tiempo real",
      "app-f4description": "Controla tu placer en tiempo real, con datos como la duración y la intensidad.",
      "app-featurestitle": "Características asombrosas",
      "app-featuresdescription": "Nuestra aplicación cuenta con una gama de características emocionantes e innovadoras para mejorar sus experiencias íntimas. Desde patrones de vibración personalizados e integración de sonido, hasta control de larga distancia y compatibilidad con múltiples juguetes, hay algo para todos. Con un toque intuitivo Controles y conexiones seguras, explorar nuevas sensaciones nunca ha sido tan fácil. ",
      "app-featuref1title": "La distancia ya no será un obstáculo",
      "app-featuref1description": "Controla el dispositivo de tu pareja desde cualquier parte del mundo.",
      "app-featuref2title": "Spotify, Youtube e integraciones de sonido",
      "app-featuref2description": "Descubre nuestras características únicas, que incluyen sonido sincronizado e integración de música con Spotify, YouTube y más, patrones de vibración personalizados y mucho más.",
      "app-featuref3title": "Patrones de vibración personalizados",
      "app-featuref3description": "Cree sus propios patrones de vibración únicos o elija entre las opciones preestablecidas.",
      "app-featuref4title": "Modo discreto y conexiones seguras",
      "app-featuref4description": "Habilite el modo discreto para el juego silencioso. También controles táctiles fáciles de usar para un juego intuitivo",
      "app-itsnotjusttitle": "No es solo otra aplicación de juguete",
      "app-itsnotjustdescription": "Lleve sus experiencias íntimas al siguiente nivel con nuestras funciones sociales interactivas y atractivas. Conéctese y comuníquese con otros usuarios en tiempo real, compartiendo consejos, trucos y experiencias. Con interfaces fáciles de usar, perfiles personalizables y notificaciones automáticas, nunca se perderá un momento de la acción. Y para mayor privacidad y seguridad, nuestra aplicación también incluye opciones de Lista blanca/Lista negra e Informes/Bloqueo. No se pierda la emoción: explore todas nuestras funciones de interacción social ¡ahora!      ",
      "app-designedtitle": "Diseñado con alta calidad",
      "app-designeddescription": "Nuestra aplicación es la elección perfecta tanto para parejas como para individuos. Entonces, ¿por qué esperar? Descárgala ahora y únete a los miles de usuarios que ya están descubriendo nuevos niveles de placer.",

      "app-designedf1title": "Alto nivel",
      "app-designedf1medium": "de Satisfacción",
      "app-designedf1description": "Nuestra aplicación recibe constantemente calificaciones altas y comentarios positivos de usuarios satisfechos.",
      "app-designedf2title": "Comunidad",
      "app-designedf2medium": "en crecimiento",
      "app-designedf2description": "Nuestro número de usuarios está creciendo rápidamente, con miles de nuevos usuarios uniéndose cada semana.",
      "app-designedf3title": "Gran cantidad",
      "app-designedf3medium": "de características",
      "app-designedf3description": "La aplicación ofrece una amplia gama de funciones, que incluyen integración de sonido, control a larga distancia e interacciones sociales.",
      "app-designedf4title": "Actualizaciones",
      "app-designedf4medium": "Constantes",
      "app-designedf4description": "Lanzamos regularmente actualizaciones y nuevas funciones para mantener nuestra aplicación actualizada y mejorar la experiencia del usuario.",

    }
  } 
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export const i18nfile = i18n

export default i18n;
