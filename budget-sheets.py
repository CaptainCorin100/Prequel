from flask import Flask, session, render_template, request, redirect, escape
import pymysql.cursors

app = Flask(__name__)
db = pymysql.connect(host="localhost", user="budget-sheets", passwd="sheets-budget", db="budget-sheets", cursorclass=pymysql.cursors.DictCursor)
cursor = db.cursor()

@app.route("/")
def index():
    if "username" in session:
        return render_template("home.html")
    else:
        return render_template("home.html")

@app.route("/login/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        app.logger.info("User " + request.form['username'] + " requested login")

        session['username'] = request.form['username']
        return redirect(url_for('index'))
    else:
        return render_template("login.html")

@app.route("/logout/")
def logout():
    session.pop("username", None)
    return redirect(url_for("index"))

@app.route("/signup/", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        return redirect(url_for("login"))
    return redirect(url_for("index"))

app.secret_key = "b@*_dx$'\xbe\x91v\x1d\xd8M\xaeC\xee\xe4\x90J\x15\xc4%\x16(\x13'"

if (__name__ == "__main__"):
    if (db != None):
        app.run(host="0.0.0.0")
