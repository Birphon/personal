import bs4
import json
import urllib3

event = [
    "athens-1896", "london-1908", "stockholm-1912",
    "antwerp-1920", "paris-1924", "amsterdam-1928", "los-angeles-1932", "berlin-1936",
    "london-1948", "helsinki-1952", "melbourne-1956", "rome-1960", "tokyo-1964",
    "mexico-city-1968", "munich-1972", "montreal-1976", "moscow-1980", "los-angeles-1984",
    "seoul-1988", "barcelona-1992", "atlanta-1996", "sydney-2000", "athens-2004",
    "beijing-2008", "london-2012", "rio-2016", "tokyo-2020"
]

unavailable_data = ["paris-1900", "st-louis-1904"]

json_file_path = './json/medal_data.json'

def save_data_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

def fetch_medals_data(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url, headers={"User-Agent": "Mozilla/5.0"})
    html = response.data
    soup = bs4.BeautifulSoup(html, "html.parser")
    data = json.loads(soup.find("script", id="__NEXT_DATA__").string)
    table = data['props']['pageProps']['initialMedals']['medalStandings']['medalsTable']

    result = []
    for row in table:
        medals = next(m for m in row["medalsNumber"] if m["type"] == "Total")
        result.append({
            "description": row["description"],
            "medals": medals
        })
    return result

def alt_data(url):
    http = urllib3.PoolManager()
    response = http.request("GET", url, headers={"User-Agent": "Mozilla/5.0"})
    html = response.data
    soup = bs4.BeautifulSoup(html, "html.parser")
    data = json.loads(soup.find("script", id="__NEXT_DATA__").string)

    # Accessing the new data structure
    table = data['props']['pageProps']['olympicGame']['countryAwards']
    return table

def print_medal_data(table):
    medal_data = []
    for entry in table:
        country = entry['country']['name']
        medals = entry['medals']

        # Extract medal counts
        gold_medals = next((m['count'] for m in medals if m['medalType'] == 'GOLD'), 0)
        silver_medals = next((m['count'] for m in medals if m['medalType'] == 'SILVER'), 0)
        bronze_medals = next((m['count'] for m in medals if m['medalType'] == 'BRONZE'), 0)

        # Calculate total medals
        total_medals = gold_medals + silver_medals + bronze_medals

        medal_data.append({
            "country": country,
            "medals": {
                "gold": gold_medals,
                "silver": silver_medals,
                "bronze": bronze_medals,
                "total": total_medals
            }
        })
    return medal_data

# Collecting all data
all_medal_data = []

# Fetching and processing medal data for each event
for e in event:
    print()
    print(e)
    table = alt_data(f"https://olympics.com/en/olympic-games/{e}/medals")
    medal_data = print_medal_data(table)
    all_medal_data.append({
        "event": e,
        "medals": medal_data
    })
    print(f"completed {e}")

# Fetching and processing the main medal data
main_data = fetch_medals_data("https://olympics.com/en/paris-2024/medals")
all_medal_data.append({
    "event": "paris-2024",
    "medals": main_data
})

for ud in unavailable_data:
    print()
    print(ud)
    all_medal_data.append({
        "event": ud,
        "medals": "Data Unavailable or Corrupted"
    })
    print(f"completed {ud}")


# Save all collected data to a JSON file
save_data_to_json(all_medal_data, json_file_path)
