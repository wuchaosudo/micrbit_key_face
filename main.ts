input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    soundExpression.twinkle.playUntilDone()
    led.setBrightness(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.setBrightness(255)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    soundExpression.hello.playUntilDone()
    led.setBrightness(0)
})
led.setBrightness(255)
basic.showIcon(IconNames.Happy)
basic.pause(1000)
led.setBrightness(0)
