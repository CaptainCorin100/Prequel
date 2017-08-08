from flask import Flask, session, render_template, request, redirect, escape

app = Flask(__name__)

@app.route("/")
def index():
    if "username" in session:
        return render_template("home.html", stylesheet=url_for("static", filename="style.css"))
    else:
        return render_template("home.html")

@app.route("/login/")
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    else:
        return render_template("login.html")

@app.route("/logout/")
def logout():
    session.pop("username", None)
    return redirect(url_for("index"))

app.secret_key = "This key will be better when it is actually secret, and loaded from a database."

if(__name__ == "__main__"):
    app.run(host="0.0.0.0")
