from duckduckgo_search import DDGS
import sys

def get_images(query):
    with DDGS() as ddgs:
        results = list(ddgs.images(query, max_results=3))
        return [r['image'] for r in results]

queries = [
    "dog grooming kit set",
    "cat interactive toy set",
    "cat feather teaser toy",
    "dog ceramic bowl duo",
    "dog travel water bottle portable",
    "tough squeaky bone toy dog",
    "beef recipe dog food bag",
    "slow feeder bowl dog",
    "self cleaning brush cat"
]

for q in queries:
    try:
        urls = get_images(q)
        print(f"QUERY: {q}")
        for u in urls:
            print(u)
    except Exception as e:
        print(f"Error for {q}: {e}")
