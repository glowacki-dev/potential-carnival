from typing import List
from collections import Counter
from copy import deepcopy
from random import choice

from api.image_map import IMAGE_MAP
from api.db import db


def get_tags(image_id: str, as_list: bool = False) -> set:
    tags = IMAGE_MAP.get(image_id)
    return list(tags) if as_list else tags


def get_most_common(cntr: Counter, rank: int = 1) -> str:
    return cntr.most_common(rank)[-1][0]


def select_best_destination(choices: List[str]) -> dict:
    cntr = Counter(sum((get_tags(ch, as_list=True) for ch in choices), []))

    rank = 1
    last_len = 0
    options = deepcopy(db)
    while last_len != len(options) > 1:
        last_len = len(options)
        options = [city for city in options if get_most_common(cntr, rank=rank) in city['tags']]
        rank += 1

    options.sort(key=lambda x: len(x['tags']))
    return choice(options[-2:])
