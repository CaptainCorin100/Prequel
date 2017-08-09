from flask import Flask, session, render_template, request, redirect, url_for, escape
import pymysql.cursors
import bcrypt

app = Flask(__name__)
db = pymysql.connect(host="localhost", user="budget-sheets", passwd="sheets-budget", db="budget-sheets", cursorclass=pymysql.cursors.DictCursor)
cursor = db.cursor()

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
    print(sql.format(username, email, password_hash.decode("utf-8")))
    cursor.execute(sql.format(username, email, password_hash))
    db.commit()
    return True


#flask application urls and functions
@app.route("/")
def index():
    if "username" in session:
        return render_template("home.html")
    else:
        return render_template("home.html")

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
@app.route("/user/<username>/budget")
def budget(username):
	#TODO lookup budget info for username, then check if user login is allowed to see it.
	return render_template("statistics.html")

app.secret_key = "b@*_dx$'\xbe\x91v\x1d\xd8M\xaeC\xee\xe4\x90J\x15\xc4%\x16(\x13'"

if (__name__ == "__main__"):
	app.run(host="0.0.0.0")
