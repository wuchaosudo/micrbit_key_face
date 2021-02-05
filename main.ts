input.onButtonPressed(Button.A, function () {
    led.setBrightness(255)
    soundExpression.twinkle.playUntilDone()
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(1000)
    led.setBrightness(0)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(255)
    soundExpression.hello.playUntilDone()
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(1000)
    led.setBrightness(0)
})
led.setBrightness(255)
basic.showIcon(IconNames.Happy)
basic.pause(1000)
led.setBrightness(0)
