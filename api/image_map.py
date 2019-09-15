from api.tags import *

IMAGE_MAP = {
    "city1.jpg": {"tags": {CITY, HOTEL, ARCHITECTURE}, "pf": 1.5},
    "city3.jpg": {"tags": {CITY, HOTEL, ARCHITECTURE}, "pf": 1.2},
    "city4.jpg": {"tags": {CITY, HOTEL, EXPERIENCE, CULTURE}, "pf": 0.9},
    "desert1.jpg": {"tags": {WILDERNESS, EXPERIENCE, HOT}, "pf": 0.9},
    "desert2.jpg": {"tags": {WILDERNESS, EXPERIENCE, LANDSCAPE, HOT}, "pf": 1.1},
    "food1.jpg": {"tags": {FOOD, HOTEL}, "pf": 1.6},
    "food2.jpg": {"tags": {FOOD, EXPERIENCE, HOTEL}, "pf": 0.8},
    "food3.jpg": {"tags": {FOOD, EXPERIENCE, CULTURE}, "pf": 1},
    "sea1.jpg": {"tags": {SEA, HOT}, "pf": 1.1},
    "sea2.jpg": {"tags": {SEA, HOT}, "pf": 0.9},
    "exp1.jpg": {"tags": {EXPERIENCE, LANDSCAPE, CULTURE}, "pf": 1.6},
    "exp2.jpg": {"tags": {SPORT, EXPERIENCE, TENT}, "pf": 0.5},
    "lake1.jpg": {"tags": {EXPERIENCE, LANDSCAPE, TENT, LAKE, SPORT}, "pf": 0.8},
    "lake2.jpg": {"tags": {LANDSCAPE, LAKE}, "pf": 1.1},
    "mountain1.jpg": {"tags": {MOUNTAIN, LAKE, LANDSCAPE}, "pf": 0.8},
    "mountain2.jpg": {"tags": {MOUNTAIN, LANDSCAPE, COLD}, "pf": 0.8},
    "mountain3.jpg": {"tags": {MOUNTAIN, LANDSCAPE, COLD, TENT}, "pf": 1.3},
    "mountain4.jpg": {"tags": {MOUNTAIN, LANDSCAPE, COLD, SKI, SPORT}, "pf": 1.6},
    "tent2.jpg": {"tags": {EXPERIENCE, WILDERNESS, TENT, LANDSCAPE}, "pf": 0.4},
}
