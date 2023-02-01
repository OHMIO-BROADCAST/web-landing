import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "header-home": "Home",
      "header-characteristics": "Features",
      "header-products": "Products",
      "header-videos": "Video",
      "header-resenas": "Reviews",
      "header-contact": "Contact",
      "header-erotix": "Spot G Erotix",
      "header-ringbell": "Ring Bell Vibrating Wand",


      "hero-title": "LUXURY SEX TOYS, WITH DOUBLE STIMULATION",
      "hero-description": "Sensual Dezire is the perfect addition to your collection of sex toys. With single and double stimulation and seven different modes of vibration, it's easy to find the perfect one for you. All of our toys are waterproof, making it ideal for use in the water or in the shower.",
      "hero-buttonorder": "ORDER NOW",
      "hero-seemore": "SEE MORE",
      "hero-onlythis": "BRAND FOR COUPLES",

      "features-title": "Smart Luxury. Pleasure in the palm of your hand.",
      "features-description": "Our amazing vibrators have a variety of features to provide a satisfying and customizable experience.",
      "features-f1": "Double Pleasure",
      "features-f1d": "Dual motors for separate internal and external stimulation.",
      "features-f2": "Easy Configuration",
      "features-f2d": "Adjustable vibration intensity and patterns for personalized pleasure.",
      "features-f3": "Getting wet? No worries",
      "features-f3d": "Waterproof design for use in the shower or bath.",
      "features-f4": "High Battery Duration",
      "features-f4d": "Wireless or rechargeable design for convenient and eco-friendly use.",

      "which-title": "Meet your perfect toy, here",
      "which-description": "Find the perfect style and best features in our exclusive selection of toys.",
      "which-double": "Double vibration",
      "which-find": "Find it out!",

      "video-title": "We are partnering with the best",
      "video-description": "Unleash your desires and explore new sensations. Experience the pleasure of discreet sex toy deliveries. Shop with confidence and privacy, delivered right to your doorstep. Unlock new levels of intimacy with international deliveries.",

      "review-title": "Our Experiencies and Testimonials",
      "review-description": "This section is dedicated to showcasing real customer experiences with our sexual toys. Here, you will find a variety of personal testimonials from individuals who have used our products and have been satisfied with their results. They will share their experience of how our toys have improved their sexual experiences, and how they feel about the quality and design of our products. ",

      "testimonial-1": "I never knew dual stimulation could feel so amazing! The dual motors in this toy hit all the right spots and the different vibration patterns keep things interesting. I highly recommend this toy to anyone looking to take their pleasure to the next level.",
      "testimonial-2": "I love my double vibration toy! It's the perfect combination of internal and external stimulation, and the waterproof design means I can take it with me in the shower for even more fun.",
      "testimonial-3": "I have been using this toy for a while now and I must say that it has exceeded my expectations. The double vibration feature is perfect for me, it makes me reach orgasm every time I use it.",
      "testimonial-4": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
    
      "testimonial-4": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "testimonial-4": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "testimonial-4": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",

      "product-description": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "product-back": "Back to Home",

      "product-totallong": "Total long:",
      "product-diameter": "Diameter:",
      "product-battery": "Battery:",
      "product-width": "Width:",
      "contact-address": "Address",


      "product-quality":"High Quality & High Pleasure",
      "product-categories-title":"Categories",
      "product-categories-list":"Powerful, Easy to use, Long life, Best seller",
      "product-categories-list2":"Waterproof, Premium, Ergonomic",
      "product-general":"GENERAL DESCRIPTION",
      "product-clean-title":"Clean method:",
      "product-clean-description":"Mild soap or toy cleaner",
      "product-longinsertable": "Insertable lenght:",
      "product-longinstimulator": "Stimulator lenght:",
      "product-charge": "Modo of charge:",
      "product-magnetic": "Magnetic",

      "modern-title": "Our Tech Specs",
      "modern-description": "Expect high performance from our toys, manufactured with the latest technology.",
      "modern-1": "G-spot motor that performs rotating movements",
      "modern-2": "Multiple vibration modes",
      "modern-3": "Rechargeable battery for extended use",
      "modern-4": "3D waves that provide extra pleasure",

      "product-silicone": "Silicone",

      "product-title-curvux": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "product-description-curvux": "Premium vibrator with long tentacles for vaginal and clitorial stimulation.",
      "product-description-primux": "Introducing the ultimate pleasure toy - a unique movement vibrator featuring internal pearls that simulate the sensation of fingers, perfect for stimulating the vaginal walls. With an added clitoral rabbit that vibrates independently, this toy combines internal movement and vibration for explosive orgasms. Convenient, rechargeable, and waterproof, it's easy to use and ready for action whenever you are. Upgrade your pleasure game with this revolutionary toy.",
      
      "product-circunferencepuntog": "Circunference stimulator Point G",
      "product-circunferenceclitorial": "Circunference stimulator clitorial",

      "product-description-extasix": "Introducing the ultimate pleasure experience - the Premium Rotating Beads Vibrator. This toy is designed to take your pleasure to the next level with its unique rotating beads feature that creates a sensation of fullness and movement on top of the toy. The three speeds and three types of vibration on the clitoral stimulator offer a variety of sensations for personalized pleasure. The combination of the rotating beads and vibration will make you feel like in a pleasure heaven. With its sleek and ergonomic design, this toy is sure to become your new favorite companion for mind-blowing orgasms.",
      "product-description-lovex": "Introduce the perfect toy for discreet and pleasure-packed fun: the small dual-pulsation vibrator. With its unique design, it will take you to new heights of pleasure. The G-spot stimulator features three small circles for extra sensation, while the clitoral stimulator has an internal pearl that creates a rocking motion. Both stimulators can be controlled independently, with 7 vibration modes to choose from. Enjoy a new level of stimulation with this versatile and powerful toy.",
      "product-AAA": "units",
      "product-description-evilex": "Experience mind-blowing pleasure with this innovative vibrator. Its G-spot motor performs rotating movements that stimulate the vaginal walls, while its 3D waves provide extra stimulation. The G-spot motor provides incredible sensations, the 3D waves provides the perfect sensation to bring you to orgasm. This vibrator is designed for maximum pleasure, making it the perfect toy for those who want to experience something new and exciting.",

      "product-title": "I was a bit hesitant to try a double vibration toy, but I'm so glad I did! The wireless design makes it easy to use and the adjustable vibration patterns give me so many options for pleasure. I highly recommend this toy to anyone looking for something new and exciting.",
      "contact-title": "Contact us",
      "contact-title2": "Let us hear about you",
      "contact-description": "Join the revolution in the sex toy industry. Become a distributor of our premium brand of sex toys. Connect with us and take the next step in your business journey. Join our team and grow with us. Reach out to us via our contact form, WhatsApp or email. We are excited to hear from you and start this adventure together.",
      "contact-description2": "Our dedicated team will provide you with all the necessary information and support. Don't miss this opportunity to be part of our successful business. Ride the 3D waves of pleasure and share it with the world while earning money.",

      "header-app": "Mobile App",

      "app-title": "Mobile App",
      "app-description": "Welcome to the ultimate couples app for intimate pleasure. With our app, you can explore new sensations and experiences together, anywhere and anytime.",
      "app-broadcasttile": "Broadcast & Partner functionalities",
      "app-broadcastdescription": "Experience a new level of intimacy with our couple functionalities, designed to bring you closer and enhance your connection, regardless of the distance.      ",
      "app-f1title": "Social Interactions",
      "app-f1description": "Connect and interact with other users, sharing tips, tricks and experiences.      ",
      "app-f2title": "Whitelist/Blacklist      ",
      "app-f2description": "Create custom lists to control who can and can't interact with you.      ",
      "app-f3title": "Privacy Settings      ",
      "app-f3description": "Track and monitor your pleasure in real-time, with data such as duration and intensity.      ",
      "app-f4title": "Real-time Data Tracking      ",
      "app-f4description": "Track and monitor your pleasure in real-time, with data such as duration and intensity.      ",

      "app-featurestitle": "Amazing Features      ",
      "app-featuresdescription": "Our app boasts a range of exciting and innovative features to enhance your intimate experiences. From custom vibration patterns and sound integration, to long-distance control and multiple toy support, there is something for everyone. With intuitive touch controls and secure connections, exploring new sensations has never been easier.      ",
      "app-featuref1title": "Distance will no longer be an obstacle      ",
      "app-featuref1description": "Control your partner's device from anywhere in the world.      ",
      "app-featuref2title": "Spotify, Youtube and Sound integrations      ",
      "app-featuref2description": "Discover our unique features, including synchronized sound and music integration with Spotify, YouTube and more, custom vibration patterns and much more.      ",
      "app-featuref3title": "Custom Vibration Patterns      ",
      "app-featuref3description": "Create your own unique vibration patterns or choose from pre-set options.      ",
      "app-featuref4title": "Discrete Mode & Secure Connections      ",
      "app-featuref4description": "Enable discreet mode for silent play. Also Easy-to-use touch controls for intuitive play.      ",
      
      "app-itsnotjusttitle": "It's not just another Toy App      ",
      "app-itsnotjustdescription": "Take your intimate experiences to the next level with our interactive and engaging social features. Connect and communicate with other users in real-time, sharing tips, tricks and experiences. With user-friendly interfaces, customizable profiles and push notifications, you'll never miss a moment of the action. And for added privacy and security, our app also includes Whitelist/Blacklist and Reporting/Blocking options. Don't miss out on the excitement - explore all of our social interaction features now!      ",
      "app-designedtitle": "Designed with high quality",
      "app-designeddescription": "Our app is the perfect choice for couples and individuals alike. So why wait? Download now and join the thousands of users already discovering new levels of pleasure.      ",

      "app-designedf1title": "High User",
      "app-designedf1medium": "Satisfaction",
      "app-designedf1description": "Our app consistently receives high ratings and positive feedback from satisfied users.      ",
      "app-designedf2title": "Growing",
      "app-designedf2medium": "Community",
      "app-designedf2description": "Our community is rapidly growing, with thousands of new users joining every week.      ",
      "app-designedf3title": "Wide Range",
      "app-designedf3medium": "of Features      ",
      "app-designedf3description": "App offers a wide range of features, including sound integration, long-distance control, and social interactions.      ",
      "app-designedf4title": "Constantly      ",
      "app-designedf4medium": "Updating",
      "app-designedf4description": "We regularly release updates and new features to keep our app current and improve user experience.      ",
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
