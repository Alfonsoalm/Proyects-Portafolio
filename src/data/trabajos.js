export const trabajos = [
    {
        'id': `LoRa_Dron`,
        'nombre': `Dron comunicado por LoRa`,
        'url': `https://github.com/Alfonsoalm/LoRaDRON`,
        'tecnologias': `LoRa, Arduino UNO, Arduino/C++, Protocolos I2C-SPI`,
        'categorias': `Electronica, Programacion, Control`,

        'descripcion': `Este proyecto comenzo con la idea de desarrollar un dron propio desde cero usando un arduino, 
         4 motores y algunos sensores para medir el ángulo y estabilidad durante el vuelo. Se ha vuelto el mayor reto
         al que me he enfrentado debido al tiempo de desarrollo y los problemas surgidos.`,
        
         'objetivos': {
            'principal': `Desarrollar un dron controlado por LoRa que pueda ser operado a largas distancias`,
            'secundarios': [
                'Ejecutar pruebas de medicion de la posicion angular del dron, bateria y altura',
                'Ejecutar pruebas de envio de datos con el mando desarrollado en LoRa',
                'Integrar motores y realizar la calibracion y ajustes para el control',
                'Establecer la logica del programa para los diferentes estados del dron',
                'Conseguir la estabilizacion del dron por medio de un sistema de control PID',
                'Optimizar el consumo de energía para aumentar el tiempo de vuelo',
                'Implementar características de seguridad para evitar pérdidas o daños'
            ]
        },

        'proceso': `Se ha comenzado haciendo pruebas de medicion
         de sensores con Arduino en concreto un MPU 6500, y aplicando 
         tecnicas de filtrado software y hardware. Se ha optado por aplicar 
         tecnica de filtrado hardware y filtros de media con 3000 mediciones
         ademas de usar dos MPUs. Tras esto se ha pasado a probar el sensor 
         ADC`,

        'esquema': '',

        'desafios': [
            `Problemas con IMU MPU9250 Falso -> MPU 6500`,
            `Problemas de comunicaciones Bluetooth iniciales`,
            `Problemas de estabilidad y robustez de la estructura impresa 3D`,
            `Dificultad de tunning de los 15 parametros PID`,
        ],

        'soluciones': [
            `Uso de MPU 6050 en conjunto con MPU 6500`,
            `Uso de comunicacion Lora`,
            `Cambio de estructura a un material mas robusto`,
            `Aun en proceso`,
        ],

        'lecciones aprendidas': 
        `Familiarizacion con ADC, diferentes IMUs, sistema de
         calibracion de motores brushless y protocolo lora`,

        'imagenes': [
            `LoRa_Dron_adc.png`,
            `LoRa_Dron_bateria.png`,
            `LoRa_Dron_motores.png`,
            `LoRa_Dron_zumbador.png`,
            `LoRa_Dron_Lora-sx1278.png`,
            `LoRa_Dron_hc-sr04.png`,
            `LoRa_Dron_mpu6050.png`,
            `LoRa_Dron_mpu6500-bmp280.png`,
        ],

        'estado': 'En desarrollo',
    },

    {
        'id': 'remote-control-LoRa',
        'nombre':'Mando con protocolo LoRa',
        'url': 'https://github.com/Alfonsoalm/LoRaDRON',
        'tecnologias': 'LoRa, Arduino Micro, Arduino/C++, Protocolos I2C-SPI',
        'categorias': 'Electronica, Programacion',

        'descripcion': `Este proyecto es complementario al del Dron LoRa, y se 
        ejecutó antes para poder hacer las pruebas con el dron. Funciona con un
        arduino Micro y un modulo LoRa que conecta con el dron.`,

        'objetivos': {
            'principal': `Diseño de un mando capaz de conectarse por LoRa con el dron diseñado`,
            'secundarios': [
                `Lectura analógica de los potenciometros`,
                `Muestra por pantalla OLED y por puerto Serie de los valores enviados`,
                `Envio por LoRa de los valores al dron`,
                `Pruebas de calibracion de motores con el mando`,
            ]
        },

        'proceso': `Se comenzo con un esquema eléctrico de los diferentes componentes
        y de los pines empleados en el Arduino Micro, posteriormente se diseña en Solidworks
        las partes del mando. Se conectan los potenciometro y se hacen pruebas de medición.
        Se conecta el modulo LoRa para enviar los datos y se hacen las pruebas finales`,
        
        'esquema': ``,

        'desafios': [
            `Diseño ergonómico del mando`,
            `Organizacion espacial de los componentes en el mando`,
        ],

        'soluciones': [
            `Diseño de un segundo mando con mejoras aplicadas`,
            `Diseño del esquema electrico y correcta colocación`,
        ],

        'lecciones aprendidas': [
            `Empleo del modulo LoRa SX1278`,
            `Diseño de un MVP de mando conectado por LoRa`
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Terminado',
    },

    {
        'id': 'arm-robot-ESP32',
        'nombre':'Brazo robotico con ESP32',
        'url': 'linkedin.com',
        'tecnologias': 'ESP32, Servomotores, Motor Stepper, Arduino/C++',
        'categorias': 'Impresion 3D, Electronica, Programacion',

        'descripcion': `El proyecto comienzo imprimiendo parte por parte de un
         brazo robotico obtenido de internet, luego ensamblandolo con 
         los servomotores y probando el conjunto con los drivers de los motores`,

        'objetivos': {
            'principal': `Impresion y Ensamblaje del brazo y sus componentes`,
            'secundarios': [
                `Impresion de cada parte del brazo`,
                `Ensamblaje de cada parte y diseño de mejoras`,
                `Pruebas de los motores`,
            ]
        },

        'proceso': `Se comenzó diseñando con una Ender 3 las partes del brazo
        robótico para su ensamblaje posterior. Luego debido a los problemas de
        impresión se paso a un Elegoo Neptune 4 PLUS de reciente adquisición 
        que obtuvo muchos mejores resultados. Finalmente se ajustaron tras imprimir
        los componentes determinadas uniones y se realizaron las pruebas de 
        movimiento de los servomotores y del motor Paso a Paso del eje.`,

        'esquema': ``,

        'desafios': [
            `Impresión correcta de las piezas`,
            `Amplia cantidad de piezas impresas`,
        ],

        'soluciones': [
            `Impresion en una impresora más fiable`,
            `Paciencia en la fabricación`,
        ],

        'lecciones aprendidas': [
            `Pruebas del driver I2C para los servomotores`,
            `Creación de un MVP de brazo robotico`,
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Terminado',
    },

    {
        'id': 'webserver-ESP32',
        'nombre':'Servidor web con ESP32',
        'url': 'https://github.com/Alfonsoalm/ESP32_Webserver',
        'tecnologias': 'ESP32, JS, HTML, CSS, Arduino/C++', 
        'categorias': 'Programacion, Interfaces WEB',

        'descripcion': `El proyecto comenzo con la idea de medir una serie de 
        variables ambientales de diversos entorno del hogar, registrar 
        dichos datos y mostrar en una interfaz sencilla`,

        'objetivos': {
            'principal': `Creacion de un servidor web para la visualizacion y 
            almacenamiento de variables de temperatura, humedad, luz y CO2`,
            'secundarios': [
                `Conexionado de los sensores al ESP32`,
                `Comunicacion WiFi del ESP32`,
                `Diseño de la interfaz de visualizacion IoT`
            ]
        },

        'proceso': `Se comenzo haciendo pruebas de medicion con los sensores
        de medición de las variables del entorno, luego se conecto el ESP32 por 
        WiFi a la red local para observar la interfaz y finalmente se ajusto 
        para un diseño mas estético.`,

        'esquema': ``,

        'desafios': [
            `Desarrollo de la interfaz y comunicación WiFi`,
        ],

        'soluciones': [
            `Diseño del codigo de la interfaz en ESP32`,
        ],

        'lecciones aprendidas': [
            `Diseño de interfaz web`,
            `Uso de sensores de CO2 y Luz digital`,
            `Almacenamiento de datos en el ESP32`,
            `Compilación de código para ESP32`,
            `Empleo de PlatformIo y VSCode para la programacion`
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Terminado',
    },

    {
        'id': 'domotic-server-raspberry',
        'nombre':'Servidor domotico Home Assistant con Rapsberry Pi',
        'url': 'https://github.com/Alfonsoalm/ESP32_Webserver',
        'tecnologias': 'Linux, HomeAssistant, DHT22-Sensor',
        'categorias': 'Domotica, Electronica',

        'descripcion': `Se comenzo con la idea de diseñar un servidor domotico
        en mi habitacion para el control de luces led rgb, y añadieron otros 
        dispositivos para establecer un servidor domótico con HomeAssistant
        controlado de forma remota por red VPN Tailscale`,

        'objetivos': {
            'principal': `Creación del servidor domótico con Raspberry Pi`,
            'secundarios': [
                `Comunicación de los dispositivos bluetooth/wifi`,
                `Instalación de HomeAssistant`,
                `Pruebas de control remoto con VPN`,
            ]
        },

        'proceso': `Se comienza haciendo pruebas de encendido de una tira LED bluetooth
        mediante una raspberry Pi con HomeAssistant instalado, luego se añade diversos
        dispositivos como ESP32 con sensores de temperatura y humedad, y varias luces
        con conexión WiFi. Finalmente se prueba la conexión remota con VPN.`,
        'esquema': ``,
        'desafios': [
            `Multiples instalaciones posibles de HomeAssistant`,
            `Control remoto fuera de red local del hogar`
        ],

        'soluciones': [
            `Investigación de la mejor opción`,
            `Empleo de VPN y dominio DNS para la conexión remota`
        ],

        'lecciones aprendidas': [
            `Familiarización con HomeAssistant`,
            `Uso de VPN y redes`
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Terminado',
    },

    {
        'id': 'speaker-matriz-led',
        'nombre':'Gran Altavoz Bluetooth Matriz LED',
        'url': 'https://github.com/Alfonsoalm/Altavoz-Con-Analizador-De-Espectro',
        'tecnologias': 'ESP8266, Arduino/C++, Microfono, Modulo Bluetooth',
        'categorias': 'Electronica, Programacion',

        'descripcion': `Este proyecto comenzo con la idea de desarrollar un gran altavoz que fuese
        capaz de mostrar por una matriz led las frecuencia de la musica que reproduce. Emplea un micrófono 
        y analisis del las frecuencia del audio para iluminar la matriz.`,
        
        'objetivos': {
            'principal': `Fabricar un gran altavoz con gran calidad de sonido, y un
            sistema de retroiluminacion LED mediante el análisis de las frecuencias`,
            'secundarios': [
                `Hacer pruebas de sonido con la bocina, el amplificador y un modulo bluetooth`,
                `Conectar el modulo receptor de audio con microfono a un ESP32, que analice las frecuencia`,
                `Conectar la matriz Led al ESP32 para terminar el sistema`,
            ]
        },

        'proceso': `Se comenzó con la fabricación de la estructura del altavoz y
        la realizacion de los orificios para el potenciometro del audio, el interruptor
        y la bocina. Posteriormente tras el pintado, se colocan los componentes de audio, el
        modulo bluetooth, el amplificador  y la bocina y se prueba la calida de sonido.
        Tras esto, se coloca el microcontrolador y el dispositivo receptor para analizar el
        audio reproducido, y se conecta la matriz led para mejorar la estetica. La pantalla 
        transparente de los leds se fabrica en impresora 3d con filamento transparente.`,
        
        'esquema': '',

        'desafios': [
            `Los problemas de ruido inducido en los cables del audio emitido`,
            `Funcionamiento incorrecto de la matriz led`,
        ],

        'soluciones': [
            `Adicion de componente filtrador de ruido`,
            `Pruebas de conexionado de los leds mas rigurosas`,
        ],

        'lecciones aprendidas': [
        `Analisis frecuencial del sonido`,
        `Familiaridad con una matriz led`,
        `Familiaridad con amplificador de sonido`,
        `Familiaridad con modulo bluetooth`,
        ],

        'imagenes': [
            ``,

        ],
        'estado': 'Terminado',
    },
    {
        'id': 'mini-speaker-Bluetooth',
        'nombre':'Mini Altavoz Bluetooth Inalambrico',
        'url': 'https://github.com/Alfonsoalm/Altavoz-Con-Analizador-De-Espectro',
        'tecnologias': 'Bluetooth, Bateria 12V',
        'categorias': 'Electronica',

        'descripcion': `Este proyecto comenzo como una necesidad de crear un altavoz de escritorio 
        para reproducir musica de forma inalámbrica sin depender de cable de alimentacion ni de conector
        de audio. Se alimenta con una bateria de 12 V y tiene un modulo bluetooth para conectar con los
        dispositivos.`,

        'objetivos': {
            'principal': `Montar un altavoz 100% inalambrico`,
            'secundarios': [
                `Conectar modulo Bluetooth con amplificador y bocinas`,
                `Alimentar el sistema con una batería`,
                `Hacer las pruebas del sistema completo`,
            ]
        },
        'proceso': `Se comenzo fabricando la estructura de madera y haciendo el 
        orificio de la bocina, luego mediante el conexionado de las diferentes 
        partes del sistema de audio se prueba la calidad de sonido y finalmente
        las pruebas de autonomia de la bateria para alcanzar las 3/4h de duración`,

        'esquema': ``,

        'desafios': [
            `Obtener una calidad de sonido aceptable con el amplificador disponible`,
            `Alcanzar una autonomia razonable con un buen diseño de bateria`,
        ],

        'soluciones': [
            `Mejora con componentes adicionales`,
            `Diseño de una bateria con celdas de buena calidad`
        ],

        'lecciones aprendidas': [
            `Diseño de bateria en función del consumo del altavoz`,
            `Conocimiento en varios amplificadores del mercado`
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Terminado',
    }
]