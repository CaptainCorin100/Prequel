from flask import Flask, session, render_template, request, redirect, url_for, escape
import pymysql.cursors
import bcrypt
import re

app = Flask(__name__)
db = pymysql.connect(host="localhost", user="budget-sheets", passwd="sheets-budget", db="budget-sheets", cursorclass=pymysql.cursors.DictCursor)
cursor = db.cursor()

def cleanhtml(raw_html): #Clean html function using regex. Found on stack overflow. Source: https://stackoverflow.com/questions/9662346/python-code-to-remove-html-tags-from-a-string#12982689
  cleanr = re.compile('<.*?>')
  cleantext = re.sub(cleanr, '', raw_html)
  return cleantext

#database interface abstraction functions
def check_login(username, password):
    sql = 'SELECT `password` FROM `users` WHERE `username`="{}"'
    print(sql.format(username))
    cursor.execute(sql.format(username))
    result = cursor.fetchone()
    if(bcrypt.checkpw(password.encode("utf-8"), result.get("password").encode("utf-8"))):
        return True
    else:
        return False

def create_user_account(username, email, password):
    password_hash = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    sql = 'INSERT INTO `users` (`username`, `email`, `password`) VALUES ("{}", "{}", "{}")'
    #Use line below to print sql code when debugging
    #print(sql.format(username, email, password_hash.decode("utf-8")))
    cursor.execute(sql.format(cleanhtml(username), email, password_hash.decode("utf-8")))
    db.commit()
    return True


#flask application urls and functions
@app.route("/")
def index():
    if "username" in session:
        return render_template("home.html", login_status="<p>Logged in as user " + session['username'] + '</p> <br> <a href="/logout/">Logout</a>')
    else:
        return render_template("home.html", login_status='<a href="/login/">Log in</a>')

#user handling urls
@app.route("/login/", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        app.logger.info("User " + username + " requested login.")
        if (check_login(username, password)):
            session['username'] = request.form['username']
            app.logger.info("User " + username + " logged in.")
            return redirect(url_for('index'))
        else:
            app.logger.info("User " + username + " failed login.")
            return render_template("login.html")
    else:
        return render_template("login.html")

@app.route("/logout/")
def logout():
    session.pop("username", None)
    return redirect(url_for("index"))

@app.route("/signup/", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["password"]
        if (create_user_account(username, email, password)):
            return redirect(url_for("login"))
        else:
            return redirect(url_for("index"))
    return redirect(url_for("index"))

#user planning pages urls.
@app.route("/budget/setup/")
def budget_setup():
	return render_template("statistics.html")

app.secret_key = "b@*_dx$'\xbe\x91v\x1d\xd8M\xaeC\xee\xe4\x90J\x15\xc4%\x16(\x13'"

if (__name__ == "__main__"):
	app.run(host="0.0.0.0")
