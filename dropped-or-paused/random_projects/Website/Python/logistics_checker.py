import requests
import json
from flask import Flask, jsonify, request
from geopy.distance import geodesic

app = Flask(__name__)


@app.route('/closest-head-office', methods=['POST'])
def closest_head_office():
    # Read and parse the order data from the request body
    order_data = request.json

    # Get the street address of the order
    address = order_data['address']

    # Make a request to the Google Maps Geocoding API to convert the address to latitude and longitude
    api_key = "YOUR_API_KEY"
    url = f"https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={api_key}"
    response = requests.get(url)

    # Get the latitude and longitude from the API response
    order_lat = response.json()['results'][0]['geometry']['location']['lat']
    order_lon = response.json()['results'][0]['geometry']['location']['lng']

    # Read and parse the head_office.json file
    with open('head_office.json', 'r') as f:
        head_office_data = json.load(f)

    # Initialize a variable to keep track of the closest head office
    closest_head_office = None
    closest_distance = float('inf')

    # Iterate through each head office
    for office in head_office_data:
        # Get the latitude and longitude of the head office
        office_lat = office['latitude']
        office_lon = office['longitude']

        # Calculate the distance between the order and the head office
        distance = geodesic((order_lat, order_lon), (office_lat, office_lon)).miles

        # Check if this is the closest head office so far
        if distance < closest_distance:
            closest_distance = distance
            closest_head_office = office

    # Return the closest head office as a JSON response
    return jsonify(closest_head_office)


if __name__ == '__main__':
    app.run(debug=True)
