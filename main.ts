/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Oct 2023
 * This program reads the amount of light
*/

// variables
let lightvalue: number = 0
let neopixelStrip: neopixel.Strip = null

// screen setup
basic.clearScreen()
lightvalue = input.lightLevel()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  lightvalue = input.lightLevel()
  if (lightvalue <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }

  if (lightvalue >= 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    }
  if (lightvalue >= 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    }
  if (lightvalue >= 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    }

  if (lightvalue >= 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    neopixelStrip.show()
    }
})

// turns off lights
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})
