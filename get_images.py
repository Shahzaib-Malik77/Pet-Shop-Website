import urllib.request
import re
import sys

def search_unsplash(query):
    url = f"https://unsplash.com/s/photos/{query.replace(' ', '-')}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'https://images\.unsplash\.com/photo-[a-zA-Z0-9\-]+', html)
        unique_links = list(set(links))
        return unique_links[:3]
    except Exception as e:
        return str(e)

for arg in sys.argv[1:]:
    print(f"{arg}:", search_unsplash(arg))
