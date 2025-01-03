export const trabajos = [
    {
        'id': 'react-app-web-job',
        'nombre': 'React Web Aplicacion for Job Searching',
        'url': 'https://github.com/Alfonsoalm/Pied-Piper-Frontend',
        'tecnologias': 'React, NodeJS, JWT, MongoDB, JS',
        'categorias': 'Programming',
    
        'descripcion': `This project arose due to the multiple shortcomings that I have been observing on LinkedIn.`,
    
        'objetivos': {
            'principal': `Build a React Web Application for Job Searching`,
            'secundarios': [
            ]
        },
        'proceso': `Programming now`,
        
        'esquema': ``,
    
        'desafios': [
            `Organization of application sections`,
        ],
    
        'soluciones': [
            `Development of interfaces, and 
            functional and non-functional requirements`,
        ],
    
        'lecciones aprendidas': [
            `Desarrollo de aplicaciones Web con REACT`,
            `Trabajar con APIs`,
        ],
    
        'imagenes': [
            ``,
        ],
    
        'estado': 'In development',
    },
    {
        'id': `LoRa_Dron`,
        'nombre': `Drone communicated via LoRa`,
        'url': `https://github.com/Alfonsoalm/LoRaDRON`,
        'tecnologias': `LoRa, Arduino UNO, Arduino/C++, I2C-SPI Protocols`,
        'categorias': `Electronics, Programming, Control`,

        'descripcion': `This project began with the idea of developing a custom drone from scratch using an Arduino, 4 motors, and some sensors to measure angle and stability during flight. It has become the biggest challenge I have faced due to development time and arising issues.`,
        
        'objetivos': {
            'principal': `Develop a LoRa-controlled drone that can operate over long distances`,
            'secundarios': [
                'Conduct tests to measure the drone’s angular position, battery, and altitude',
                'Perform data transmission tests with the developed LoRa controller',
                'Integrate motors and carry out calibration and control adjustments',
                'Establish the logic for the drone’s different states',
                'Achieve drone stabilization through a PID control system',
                'Optimize energy consumption to increase flight time',
                'Implement safety features to prevent losses or damages'
            ]
        },

        'proceso': `Started with sensor measurement tests on Arduino, specifically with an MPU 6500, and applying hardware and software filtering techniques. Opted for hardware filtering and averaging filters with 3000 measurements, using two MPUs. Subsequently, tested the ADC sensor.`,
        
        'esquema': '',

        'desafios': [
            `Issues with false IMU MPU9250 -> MPU 6500`,
            `Initial Bluetooth communication issues`,
            `Stability and robustness problems with 3D printed structure`,
            `Difficulty in tuning 15 PID parameters`,
        ],

        'soluciones': [
            `Use of MPU 6050 alongside MPU 6500`,
            `Use of LoRa communication`,
            `Changed structure to more robust material`,
            `Still in progress`,
        ],

        'lecciones aprendidas': 
        `Familiarity with ADC, different IMUs, brushless motor calibration systems, and the LoRa protocol`,

        'imagenes': [
            `LoRa_Dron_adc.png`,
            `LoRa_Dron_battery.png`,
            `LoRa_Dron_motors.png`,
            `LoRa_Dron_buzzer.png`,
            `LoRa_Dron_Lora-sx1278.png`,
            `LoRa_Dron_hc-sr04.png`,
            `LoRa_Dron_mpu6050.png`,
            `LoRa_Dron_mpu6500-bmp280.png`,
        ],

        'estado': 'Almost finished',
    },

    {
        'id': 'remote-control-LoRa',
        'nombre': 'Controller with LoRa protocol',
        'url': 'https://github.com/Alfonsoalm/LoRaDRON',
        'tecnologias': 'LoRa, Arduino Micro, Arduino/C++, I2C-SPI Protocols',
        'categorias': 'Electronics, Programming',

        'descripcion': `This project complements the LoRa Drone project and was executed first to perform drone tests. It works with an Arduino Micro and a LoRa module that connects to the drone.`,

        'objetivos': {
            'principal': `Design a controller capable of connecting via LoRa with the designed drone`,
            'secundarios': [
                `Analog reading of potentiometers`,
                `Display values sent on OLED screen and Serial Port`,
                `Send values to the drone via LoRa`,
                `Motor calibration tests with the controller`,
            ]
        },

        'proceso': `Started with an electrical schematic of the various components and pins used on the Arduino Micro, then designed the controller parts in Solidworks. Potentiometers were connected for measurement tests, followed by connecting the LoRa module for data transmission and conducting final tests.`,
        
        'esquema': ``,

        'desafios': [
            `Ergonomic design of the controller`,
            `Spatial organization of components in the controller`,
        ],

        'soluciones': [
            `Designed a second controller with applied improvements`,
            `Designed the electrical schematic and correct placement`,
        ],

        'lecciones aprendidas': [
            `Use of the LoRa SX1278 module`,
            `Design of an MVP for a LoRa-connected controller`
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Completed',
    },

    {
        'id': 'arm-robot-ESP32',
        'nombre': 'Robotic Arm with ESP32',
        'url': '',
        'tecnologias': 'ESP32, Servomotors, Stepper Motor, Arduino/C++',
        'categorias': '3D Printing, Electronics, Programming',

        'descripcion': `The project began by printing parts of a robotic arm obtained from the internet, then assembling it with servomotors and testing it with motor drivers.`,

        'objetivos': {
            'principal': `Print and assemble the arm and its components`,
            'secundarios': [
                `Print each part of the arm`,
                `Assemble each part and design improvements`,
                `Motor testing`,
            ]
        },

        'proceso': `Began designing with an Ender 3 for arm parts for subsequent assembly. After experiencing printing issues, switched to a recently acquired Elegoo Neptune 4 PLUS, achieving much better results. Finally, adjusted connections and tested movements of the servomotors and the axis Stepper motor.`,
        
        'esquema': ``,

        'desafios': [
            `Correct printing of parts`,
            `Large number of printed pieces`,
        ],

        'soluciones': [
            `Used a more reliable printer`,
            `Patience in manufacturing`,
        ],

        'lecciones aprendidas': [
            `Testing I2C driver for servomotors`,
            `Creation of a robotic arm MVP`,
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Completed',
    },

    {
        'id': 'webserver-ESP32',
        'nombre': 'Web Server with ESP32',
        'url': 'https://github.com/Alfonsoalm/ESP32_Webserver',
        'tecnologias': 'ESP32, JS, HTML, CSS, Arduino/C++',
        'categorias': 'Programming, Web Interfaces',

        'descripcion': `The project started with the idea of measuring a series of environmental variables in various household environments, recording these data, and displaying them on a simple interface.`,

        'objetivos': {
            'principal': `Create a web server to visualize and store temperature, humidity, light, and CO2 variables`,
            'secundarios': [
                `Connecting sensors to the ESP32`,
                `WiFi communication of the ESP32`,
                `Designing an IoT visualization interface`
            ]
        },

        'proceso': `Began with testing measurements of environmental variables sensors, then connected the ESP32 via WiFi to the local network to view the interface, and finally made aesthetic adjustments.`,
        
        'esquema': ``,

        'desafios': [
            `Interface development and WiFi communication`,
        ],

        'soluciones': [
            `Developed code for the ESP32 interface`,
        ],

        'lecciones aprendidas': [
            `Web interface design`,
            `Use of CO2 and light sensors`,
            `Data storage in the ESP32`,
            `ESP32 code compilation`,
            `Using PlatformIo and VSCode for programming`
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Completed',
    },

    {
        'id': 'domotic-server-raspberry',
        'nombre': 'Home Automation Server with Raspberry Pi',
        'url': 'https://github.com/Alfonsoalm/ESP32_Webserver',
        'tecnologias': 'Linux, HomeAssistant, DHT22-Sensor',
        'categorias': 'Home Automation, Electronics',

        'descripcion': `Began with the idea of designing a home automation server in my room to control LED RGB lights, later adding other devices to establish a HomeAssistant server remotely controlled via Tailscale VPN.`,

        'objetivos': {
            'principal': `Create a home automation server with Raspberry Pi`,
            'secundarios': [
                `Bluetooth/WiFi device communication`,
                `HomeAssistant installation`,
                `Remote control tests with VPN`,
            ]
        },

        'proceso': `Started with tests to turn on a Bluetooth LED strip using a Raspberry Pi with HomeAssistant installed, then added various devices like ESP32 with temperature and humidity sensors and several WiFi-connected lights. Finally, tested remote connection using VPN.`,
        
        'esquema': ``,

        'desafios': [
            `Multiple installation options for HomeAssistant`,
            `Remote control outside the local home network`
        ],

        'soluciones': [
            `Investigated the best option`,
            `Used VPN and DNS domain for remote connection`
        ],

        'lecciones aprendidas': [
            `Familiarity with HomeAssistant`,
            `VPN and networking usage`
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Completed',
    },

    {
        'id': 'speaker-matriz-led',
        'nombre': 'Large LED Matrix Bluetooth Speaker',
        'url': 'https://github.com/Alfonsoalm/Altavoz-Con-Analizador-De-Espectro',
        'tecnologias': 'ESP8266, Arduino/C++, Microphone, Bluetooth Module',
        'categorias': 'Electronics, Programming',

        'descripcion': `This project started with the idea of developing a large speaker capable of displaying music frequencies it plays on an LED matrix. It uses a microphone and frequency analysis of the audio to light up the matrix.`,
        
        'objetivos': {
            'principal': `Build a large speaker with high-quality sound and an LED backlight system through frequency analysis`,
            'secundarios': [
                `Test sound quality with speaker, amplifier, and Bluetooth module`,
                `Connect audio receiver module with a microphone to an ESP32 for frequency analysis`,
                `Connect LED matrix to ESP32 to complete the system`,
            ]
        },

        'proceso': `Began with the speaker structure and drilling holes for the audio potentiometer, switch, and speaker. After painting, audio components, Bluetooth module, amplifier, and speaker were installed and sound quality tested. Then, connected the microcontroller and receiver to analyze reproduced audio, and connected the LED matrix for aesthetics. The LED screen was made with a 3D printer using transparent filament.`,
        
        'esquema': '',

        'desafios': [
            `Noise issues in audio cables`,
            `Malfunctioning LED matrix`,
        ],

        'soluciones': [
            `Added noise filtering components`,
            `More rigorous LED connection tests`,
        ],

        'lecciones aprendidas': [
        `Audio frequency analysis`,
        `Familiarity with LED matrix`,
        `Familiarity with audio amplifiers`,
        `Familiarity with Bluetooth modules`,
        ],

        'imagenes': [
            ``,
        ],
        'estado': 'Completed',
    },
    {
        'id': 'mini-speaker-Bluetooth',
        'nombre': 'Mini Wireless Bluetooth Speaker',
        'url': '',
        'tecnologias': 'Bluetooth, 12V Battery',
        'categorias': 'Electronics',

        'descripcion': `This project started as a need to create a desktop speaker for wireless music playback without depending on a power cable or audio jack. It is powered by a 12V battery and has a Bluetooth module to connect to devices.`,

        'objetivos': {
            'principal': `Build a 100% wireless speaker`,
            'secundarios': [
                `Connect Bluetooth module with amplifier and speakers`,
                `Power the system with a battery`,
                `Perform system tests`,
            ]
        },
        'proceso': `Began by building the wooden structure and making the speaker hole, then tested the audio system's sound quality through connections of different parts, and finally tested battery autonomy to reach 3/4 hours of duration.`,
        
        'esquema': ``,

        'desafios': [
            `Achieving acceptable sound quality with the available amplifier`,
            `Achieving reasonable autonomy with a good battery design`,
        ],

        'soluciones': [
            `Enhanced with additional components`,
            `Designed a battery with high-quality cells`
        ],

        'lecciones aprendidas': [
            `Battery design based on speaker consumption`,
            `Knowledge of various market amplifiers`
        ],

        'imagenes': [
            ``,
        ],

        'estado': 'Completed',
    },
]
