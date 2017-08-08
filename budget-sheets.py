from flask import Flask, session, render_template, request, redirect, escape

app = Flask(__name__)

@app.route("/")
def index():
    if "username" in session:
        return render_template("home.html", stylesheet=url_for("budget-sheets/static", filename="style.css"))
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
        
    return redirect(url_for("index"))

app.secret_key = "b'*_dx$@\xbe\x91v\x1d\xd8M\xaeC\xee\xe4\x90J\x15\xc4"\x16(\x13'"

if(__name__ == "__main__"):
    app.run(host="0.0.0.0")
