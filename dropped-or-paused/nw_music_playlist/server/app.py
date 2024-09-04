import sqlite3

from flask import Flask, redirect, render_template, request, session

app = Flask(__name__)
app.secret_key = "your_secret_key"


# Authenticate user
def authenticate_user(username, password):
    # Implement your user authentication logic here
    # You can query the identification.db database to check the credentials

    # For demonstration purposes, assuming there is a user with username "admin" and password "password"
    if username == "admin" and password == "password":
        return True
    else:
        return False


# Save submission to the pending database
def save_submission(username, song_link):
    # Implement your logic to save the submission to the pending database
    # You can use SQLite or any other database of your choice
    # Here, we assume you have a "pending.db" SQLite database with a table for each day

    conn = sqlite3.connect("pending.db")
    c = conn.cursor()

    # Assuming you have a table named 'monday' for Monday submissions
    c.execute(
        "INSERT INTO monday (username, song_link) VALUES (?, ?)", (username, song_link)
    )

    conn.commit()
    conn.close()


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        # Perform user authentication
        if authenticate_user(username, password):
            # User authenticated, store user session
            session["username"] = username
            return redirect("/submit")
        else:
            # Invalid credentials, display error message
            return render_template(
                "login.html", error_message="Invalid username or password"
            )

    return render_template("login.html")


@app.route("/logout", methods=["GET"])
def logout():
    session.clear()
    return redirect("/login")


@app.route("/submit", methods=["GET", "POST"])
def submit():
    if "username" not in session:
        return redirect("/login")

    if request.method == "POST":
        song_link = request.form["song_link"]

        # Perform song submission
        if validate_song_link(song_link):
            # Save the song link to the pending database
            save_submission(session["username"], song_link)
            return render_template(
                "submit.html", success_message="Song submitted successfully"
            )
        else:
            # Invalid song link, display error message
            return render_template("submit.html", error_message="Invalid song link")

    return render_template("submit.html")


if __name__ == "__main__":
    app.run(debug=True)
