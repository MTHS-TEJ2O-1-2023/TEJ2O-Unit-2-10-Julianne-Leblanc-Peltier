"""
Created by: Julianne Leblanc-Peltier
Created on: Oct 2023
This module is a Micro:bit MicroPython program which turns on the neopixels depending on the light level
"""

from microbit import *

# variables
amount_of_light = 0
neopixelstrip: neopixel.Strip = None

# screen set up
display.clear()
amount_of_light = input.lightlevel()
neopixelstrip = neopixel.NeoPixel(pin0, 4)
neopixelstrip[0] = (0, 0, 0)
neopixelstrip[1] = (0, 0, 0)
neopixelstrip[2] = (0, 0, 0)
neopixelstrip[3] = (0, 0, 0)
neopixelstrip.show()
display.show(Image.HAPPY)

while True:
    # if button a is pressed, depending on light level, turns on neopixels
    if button_a.is_pressed():
        display.show(Image.Yes)
        neopixelstrip[0]

        # if light level is equal to or below 51, none of the neopixels
        if amount_of_light <= 51:
            display.scroll(amount_of_light)
            neopixelstrip[0] = (0, 0, 0)
            neopixelstrip[1] = (0, 0, 0)
            neopixelstrip[2] = (0, 0, 0)
            neopixelstrip[3] = (0, 0, 0)
            neopixelstrip.show()

        # if light level is equal to or above 52, 1 neopixel turns on
        if amount_of_light >= 52:
            display.scroll(amount_of_light)
            neopixelstrip[0] = (255, 255, 0)
            neopixelstrip.show()

        # if light level is equal to or above 104, 2 neopixels turn on
        if amount_of_light >= 104:
            display.scroll(amount_of_light)
            neopixelstrip[0] = (255, 255, 0)
            neopixelstrip[1] = (255, 255, 0)
            neopixelstrip.show()

        # if light level is equal to or above 156, 3 neopixels turn on
        if amount_of_light >= 156:
            display.scroll(amount_of_light)
            neopixelstrip[0] = (255, 255, 0)
            neopixelstrip[1] = (255, 255, 0)
            neopixelstrip[2] = (255, 255, 0)
            neopixelstrip.show()

        # if light level is equal to or above 208, all (4) neopixels turn on
        if amount_of_light >= 208:
            display.scroll(amount_of_light)
            neopixelstrip[0] = (255, 255, 0)
            neopixelstrip[1] = (255, 255, 0)
            neopixelstrip[2] = (255, 255, 0)
            neopixelstrip[3] = (255, 255, 0)
            neopixelstrip.show()

    # if button b is pressed, turns off all neopixels
    if button_b.is_pressed():
        display.clear()
        neopixelstrip[0] = (0, 0, 0)
        neopixelstrip[1] = (0, 0, 0)
        neopixelstrip[2] = (0, 0, 0)
        neopixelstrip[3] = (0, 0, 0)
        neopixelstrip.show()
        display.show(Image.SAD)
