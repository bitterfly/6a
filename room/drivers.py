import bpy
from math import ceil

def driver(func):
    '''make function available in drivers'''
    bpy.app.driver_namespace[func.__name__] = func
    return func

PLANKS = 15

# here be epic maths

@driver
def distance_stacked():
    return 0.1

@driver
def distance_top():
    return 1.0

@driver
def top_count(bot, planks = PLANKS):
    return ceil((-bot + distance_stacked() * (1 - planks)) / (distance_top() - distance_stacked()))

@driver
def stacked_count(bot, planks = PLANKS):
    return planks - top_count(bot)