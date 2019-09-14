from typing import List, Union
from collections import Counter
from copy import deepcopy

from api.image_map import IMAGE_MAP
from api.db import db


def get_tags(image_id: str, as_list: bool = False) -> Union[set, list]:
    tags = IMAGE_MAP.get(image_id, {}).get('tags', [])
    return list(tags) if as_list else tags


def get_pf(image_id: str) -> float:
    return IMAGE_MAP.get(image_id, 1.0)['pf']


def get_most_common(cntr: Counter, rank: int = 1) -> str:
    return cntr.most_common(rank)[-1][0]


def avg_price_factor(choices: List[str]) -> float:
    return sum(get_pf(ch) for ch in choices) / len(choices)


def select_best_destination(choices) -> dict:
    cntr = Counter(sum((get_tags(ch, as_list=True) for ch in choices), []))

    rank = 1
    last_len = 0
    options = deepcopy(db)
    while last_len != len(options) > 1:
        last_len = len(options)
        options = [city for city in options if get_most_common(cntr, rank=rank) in city['tags']] or options
        rank += 1

    avg_pf = avg_price_factor(choices)
    options.sort(key=lambda x: abs(x['pf'] - avg_pf))
    return options[0]


class DecisionService:
    def __init__(self, session):
        self.session = session

    def make_decision(self):
        choices = set(self.session.get().get('choices'))
        return select_best_destination(choices)
