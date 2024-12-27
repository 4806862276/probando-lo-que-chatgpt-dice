// Función para hacer volar el dron
function fly () {
    // Enciende los motores para hacer que el dron suba
    pins.digitalWritePin(motor1_in1, 1)
    pins.digitalWritePin(motor1_in2, 0)
    pins.digitalWritePin(motor2_in1, 1)
    pins.digitalWritePin(motor2_in2, 0)
    // Espera 2 segundos para simular el vuelo ascendente
    // El dron sube por 2 segundos
    basic.pause(2000)
    // Mantén el dron estable por 1 segundo
    // El dron se mantiene en el aire por 1 segundo
    basic.pause(1000)
    // Apaga los motores para aterrizar el dron
    pins.digitalWritePin(motor1_in1, 0)
    pins.digitalWritePin(motor1_in2, 0)
    pins.digitalWritePin(motor2_in1, 0)
    pins.digitalWritePin(motor2_in2, 0)
}
let motor2_in2 = 0
let motor2_in1 = 0
let motor1_in2 = 0
let motor1_in1 = 0
// Configura los pines de los motores
motor1_in1 = DigitalPin.P0
motor1_in2 = DigitalPin.P1
motor2_in1 = DigitalPin.P2
motor2_in2 = DigitalPin.P8
// Ejecuta la función de vuelo
fly()
