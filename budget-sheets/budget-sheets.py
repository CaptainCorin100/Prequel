from flask import Flask, session, render_template, request, redirect, escape

app = Flask(__name__)

@app.route("/")
def index():
    if "username" in session:
        return render_template("home.html")
    else:
        return render_template("home.html")

@app.route("/login/"):
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    else:
        return render_template("login.html")

if(__name__ == "__main__"):
    app.run(host="0.0.0.0")
