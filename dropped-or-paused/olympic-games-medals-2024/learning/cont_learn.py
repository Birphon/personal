import bs4
import json
import urllib3

event = [
    "athens-1896", "paris-1900", "st-louis-1904", "london-1908", "stockholm-1912",
    "antwerp-1920", "paris-1924", "amsterdam-1928", "los-angeles-1932", "berlin-1936",
    "london-1948", "helsinki-1952", "melbourne-1956", "rome-1960", "tokyo-1964",
    "mexico-city-1968", "munich-1972", "montreal-1976", "moscow-1980", "los-angeles-1984",
    "seoul-1988", "barcelona-1992", "atlanta-1996", "sydney-2000", "athens-2004",
    "beijing-2008", "london-2012", "rio-de-janeiro-2016", "tokyo-2020"
]

def fetch_medals_data(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url, headers={"User-Agent": "Mozilla/5.0"})
    html = response.data
    soup = bs4.BeautifulSoup(html, "html.parser")
    data = json.loads(soup.find("script", id="__NEXT_DATA__").string)
    table = data['props']['pageProps']['initialMedals']['medalStandings']['medalsTable']

    for row in table:
        medals = next(m for m in row["medalsNumber"] if m["type"] == "Total")
        print(row["description"], medals)


def alt_data(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url, headers={"User-Agent": "Mozilla/5.0"})
    html = response.data
    soup = bs4.BeautifulSoup(html, "html.parser")
    data = json.loads(soup.find("script", id="__NEXT_DATA__").string)

    # Accessing the new data structure
    table = data['props']['pageProps']['olympicGame']['countryAwards']

    for entry in table:
        country = entry['country']['name']
        medals = entry['medals']

        # Extract medal counts
        gold_medals = next((m['count'] for m in medals if m['medalType'] == 'GOLD'), 0)
        silver_medals = next((m['count'] for m in medals if m['medalType'] == 'SILVER'), 0)
        bronze_medals = next((m['count'] for m in medals if m['medalType'] == 'BRONZE'), 0)

        # Calculate total medals
        total_medals = gold_medals + silver_medals + bronze_medals

        print(f"{country} {{'gold': {gold_medals}, 'silver': {silver_medals}, 'bronze': {bronze_medals}, 'total': {total_medals}}}")


fetch_medals_data("https://olympics.com/en/paris-2024/medals")

for e in event:
    alt_data(f"https://olympics.com/en/olympic-games/{e}/medals")

