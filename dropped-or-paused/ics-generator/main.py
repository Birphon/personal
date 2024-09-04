import arrow
from ics import Calendar, Event

def create_ics_file(year, month, days, file_name = 'output.ics'):

    # Get dates
    dates = get_dates(year, month, days)

    # Create new calendar 
    cal = Calendar()

    # Create events
    for date in dates:
        e = Event()
        e.name = "Event on " + date.format('YYYY-MM-DD')
        e.begin = date.format('YYYY-MM-DD HH:mm:ss')
        cal.events.add(e)

    # Save to file
    with open(file_name, 'w') as f:
        f.write(str(cal))

def get_dates(year, month, days):
    days = [day.lower() for day in days]

    # Create arrow date object for start of month and end of month
    start_date = arrow.get(year, month, 1)
    end_date = start_date.shift(months=+1)

    # Loop over each day in start_date and end_date
    dates = [d for d in arrow.Arrow.span_range('day', start_date, end_date) if d.format('dddd').lower() in days]

    return dates

# Test the function
create_ics_file(2023, 1, ['Monday', 'Wednesday', 'Friday'])
