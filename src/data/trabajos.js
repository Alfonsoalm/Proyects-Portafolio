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
        'descripcion':'----'
    },

    {
        'id': 'arm-robot-ESP32',
        'nombre':'Brazo robotico con ESP32',
        'url': 'linkedin.com',
        'tecnologias': 'ESP32, Servomotores, Motor Stepper, Arduino/C++',
        'categorias': 'Impresion 3D, Electronica, Programacion',
        'descripcion':'----'
    },

    {
        'id': 'webserver-ESP32',
        'nombre':'Servidor web con ESP32',
        'url': 'https://github.com/Alfonsoalm/ESP32_Webserver',
        'tecnologias': 'ESP32, JS, HTML, CSS, Arduino/C++', 
        'categorias': 'Programacion, Interfaces WEB',
        'descripcion':'----'
    },

    {
        'id': 'domotic-server-raspberry',
        'nombre':'Servidor domotico Home Assistant con Rapsberry Pi',
        'url': 'https://github.com/Alfonsoalm/ESP32_Webserver',
        'tecnologias': 'Linux, HomeAssistant, DHT22-Sensor',
        'categorias': 'Domotica, Electronica',
        'descripcion':'----'
    },

    {
        'id': 'speaker-matriz-led',
        'nombre':'Gran Altavoz Bluetooth Matriz LED',
        'url': 'https://github.com/Alfonsoalm/Altavoz-Con-Analizador-De-Espectro',
        'tecnologias': 'ESP8266, Arduino/C++, Microfono, Modulo Bluetooth',
        'categorias': 'Electronica, Programacion',
        'descripcion':'----'
    },
    {
        'id': 'mini-speaker-Bluetooth',
        'nombre':'Mini Altavoz Bluetooth Inalambrico',
        'url': 'https://github.com/Alfonsoalm/Altavoz-Con-Analizador-De-Espectro',
        'tecnologias': 'Bluetooth, Bateria 12V',
        'categorias': 'Electronica',
        'descripcion':'----'
    }
]